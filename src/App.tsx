import React, { Fragment } from "react";
import GlobalStyle from "components/style-utils";
// import ErrorBoundary from "components/error-boundary";
// import Routes from "components/routes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>{/* <Routes /> */}</BrowserRouter>
    </Fragment>
  );
};

export default App;
