import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/createStore";
import Blank from "./component/Blank/Blank";

export const App = () => (
  <Provider store={store}>
    <Blank />
  </Provider>
);
