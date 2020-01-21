import React from "react";
import { Text } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { CheckBox } from "react-native-elements";
import styles from "./styles";

function ListItem({ text, onPress, selected }) {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.container}
      underlayColor={"#e6e6e6"}
    >
      <>
        <Text style={styles.text}>{text}</Text>
        <CheckBox
          size={20}
          checked={selected}
          onIconPress={onPress}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          color={"#000099"}
        />
      </>
    </TouchableHighlight>
  );
}

export default ListItem;
