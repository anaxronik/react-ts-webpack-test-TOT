import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { publicRoutes } from "./routing";
import "./styles/global.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {publicRoutes.map((route) => (
          <Route {...route} key={route.path} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};
