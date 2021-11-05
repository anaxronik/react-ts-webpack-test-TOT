import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { publicRoutes } from "./routing";
import { store } from "./store";
import "./styles/global.scss";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {publicRoutes.map((route) => (
            <Route {...route} key={route.path} />
          ))}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
