import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "space-around",
    height: 70,
    backgroundColor: "#fff"
  },
  text: {
    paddingLeft: 10,
    fontSize: 18,
    color: "#343434"
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#e6e6e6"
  },
  cor: {
    height: 30,
    width: 30
  },
  colorsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 5
  }
});

export default styles;
