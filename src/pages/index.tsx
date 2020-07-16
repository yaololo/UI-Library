import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./landing-page";

const MainEntryRoutes = () => {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
    </Switch>
  );
};

export default MainEntryRoutes;
