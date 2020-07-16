import React, { Fragment } from "react";
import GlobalStyle from "components/style-utils";
// import ErrorBoundary from "components/error-boundary";
import MainEntryRoutes from "pages";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <MainEntryRoutes />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
