import { Divider } from "antd";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
