import React from "react";
import { View, Text } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { connect } from "react-redux";

import styles from "./styles";
import { changeColor } from "../../actions/colors";

class ColorList extends React.Component {
  handlePress = (name, color) => {
    this.props.dispatch(changeColor(name, color));
  };

  render() {
    return (
      <View style={styles.container} underlayColor={"#e6e6e6"}>
        <>
          <Text style={styles.text}>{this.props.text}</Text>
          <View style={styles.colorsContainer}>
            <TouchableHighlight
              onPress={() => {
                let color = "red";
                this.handlePress(this.props.text, color);
              }}
              style={{ ...styles.cor, backgroundColor: "#E63734" }}
              underlayColor={"#b61916"}
            />
            <TouchableHighlight
              onPress={() => {
                let color = "orange";
                this.handlePress(this.props.text, color);
              }}
              style={{ ...styles.cor, backgroundColor: "#DEA74C" }}
              underlayColor={"#ac7620"}
            />
            <TouchableHighlight
              onPress={() => {
                let color = "yellow";
                this.handlePress(this.props.text, color);
              }}
              style={{ ...styles.cor, backgroundColor: "#EDEC42" }}
              underlayColor={"#bbbb11"}
            />
            <TouchableHighlight
              onPress={() => {
                let color = "green";
                this.handlePress(this.props.text, color);
              }}
              style={{ ...styles.cor, backgroundColor: "#39E831" }}
              underlayColor={"#1db814"}
            />
            <TouchableHighlight
              onPress={() => {
                let color = "blue";
                this.handlePress(this.props.text, color);
              }}
              style={{ ...styles.cor, backgroundColor: "#3231E5" }}
              underlayColor={"#1616b6"}
            />
            <TouchableHighlight
              onPress={() => {
                let color = "violet";
                this.handlePress(this.props.text, color);
              }}
              style={{ ...styles.cor, backgroundColor: "#9D35EA" }}
              underlayColor={"#7113b9"}
            />
          </View>
        </>
      </View>
    );
  }
}

export default connect()(ColorList);
