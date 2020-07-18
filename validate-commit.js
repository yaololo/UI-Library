/* eslint-disable */

const { readFileSync } = require("fs");
let msg = readFileSync(process.argv[2]).toString();

// colors
const Reset = "\x1b[0m";
const Reverse = "\x1b[7m";
const FgRed = "\x1b[31m";

const isReleaseCommit = {
  regEx: /(\(release\))/
};
// rules
const hasConventionalCommitPrefix = {
  regEx: /^(Feature|Fix|Doc|Refactor|Test|Setup)(\(release\))?!? /,
  problemDescription: "Add an conventional commit prefix with Feature, Fix, Doc, Refactor, Test, Setup"
};
// const hasIssueReference = {
//   regEx: /\S+ (GH-[0-9]+|STS-[0-9]+|ROTF-[0-9]+|no-jira|(([0-9]+)\.([0-9]+)\.([0-9]+)))+/,
//   problemDescription:
//     "Add an issue reference like 'GH-7 - Blah Bla' at the start."
// };
const matchesKeyword = {
  type: "MATCH_KEY_WORD",
  regEx: /\S+ - (Add|Fix|Remove|Implement|Clean|Clear|Refactor|Set up|Model|Improve|Update|Integrate)/,
  problemDescription:
    "Append - before the your sentence and start your sentence with Add, Fix, Remove, Implement, Clean, Clear, Refactor, Set up, Model, Improve, Update or Integrate."
};
const lengthNotExceeded = {
  regEx: /^.{1,100}(\n\n\S(.|\n)*|\n$)/,
  problemDescription:
    "Do not exceed 100 characters on the first line. If you want to describe more, put an empty line next and then your elaborations."
};

const tests = [hasConventionalCommitPrefix, matchesKeyword, lengthNotExceeded];

// execute rules
const results = tests
  .map(({ problemDescription, regEx, type }) => {
    // Skip key word match if it is standard-version generated commits which is version bump
    if (type && isReleaseCommit.regEx.test(msg)) {
      return null;
    }

    if (!regEx.test(msg)) {
      return problemDescription;
    }
  })
  .filter((x) => x);
printResults(results);

function printResults(results) {
  if (results.length == 0) {
    console.info("Nice commit msg!");
    process.exit(0);
  } else {
    console.log(Reverse);
    console.warn(
      "Sorry, there is at least problem with your commit message. To make your teammates happy, observe the following rules:"
    );
    console.log(Reset, FgRed);
    results.map((problemDescription) => {
      console.warn(`- ${problemDescription}`);
    });
    console.log("Sample commit message: Feature - Add an apply.");
    console.log(Reset);
    process.exit(1);
  }
}
