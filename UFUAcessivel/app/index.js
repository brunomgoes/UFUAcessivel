import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { Provider } from "react-redux";

import Routes from "./config/routes";
import store from "./config/store";

EStyleSheet.build({
  $white: "#FFFFFF",
  $darkText: "#343434",
  $border: "#949494"
});

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
