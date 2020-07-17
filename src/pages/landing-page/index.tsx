import React from "react";
import Table from "components/table";
import { ITHeader } from "type/table-utils";
interface TBodyData {
  leadNo: string;
  ucid: string;
  leadPriority: string;
  leadDataSource: string;
  lastUpdated: string;
}

export const headerData: ITHeader<TBodyData> = [
  {
    title: "Lead Number",
    key: "leadNo",
    dataIndex: "leadNo"
  },
  {
    title: "UCID",
    key: "ucid",
    dataIndex: "ucid"
  },
  {
    title: "Lead Priority",
    key: "leadPriority",
    dataIndex: "leadPriority"
  },
  {
    title: "Lead Data Source",
    key: "leadDataSource",
    dataIndex: "leadDataSource"
  },
  {
    title: "Last Update",
    key: "lastUpdated",
    dataIndex: "lastUpdated"
  }
];

const bodyData = [
  {
    key: 1,
    leadNo: "L-202020220",
    ucid: "222038182",
    leadPriority: "Higher Priority",
    leadDataSource: "STS",
    lastUpdated: "202020"
  },
  {
    key: 2,
    leadNo: "L-2020202ssP",
    ucid: "sdf32w",
    leadPriority: "Higher Priorityyyy",
    leadDataSource: "STS",
    lastUpdated: "202020"
  }
];

const LandingPage = () => {
  return (
    <div>
      <Table
        tHeaderData={headerData}
        tBodyData={bodyData}
        tableClassPrefix="testing"
      ></Table>
    </div>
  );
};

export default LandingPage;
