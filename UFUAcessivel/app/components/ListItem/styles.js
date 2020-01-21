import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
    backgroundColor: "#fff"
  },
  text: {
    paddingLeft: 10,
    fontSize: 16,
    color: "#343434"
  },
  icon: {
    paddingRight: 10
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#e6e6e6"
  }
});

export default styles;
