import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

import Routes from "./config/routes";

EStyleSheet.build({
  $white: "#FFFFFF",
  $darkText: "#343434",
  $border: "#949494"
});

export default function App() {
  return <Routes />;
}
