import React from "react";
import { View, Text } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

import styles from "./styles";
import { useEffect } from "react";
import { useState } from "react";

function ColorList({ text }) {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    setLista([]);
  }, []);

  function handlePress(nome, cor) {
    let name = nome.text;
    console.log("AINDA NÃO RESOLVI E NÃO SEI RESOLVER", name, cor);
  }

  return (
    <View style={styles.container} underlayColor={"#e6e6e6"}>
      <>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.colorsContainer}>
          <TouchableHighlight
            onPress={() => {
              let cor = "red";
              handlePress({ text }, cor);
            }}
            style={{ ...styles.cor, backgroundColor: "#E63734" }}
            underlayColor={"#b61916"}
          />
          <TouchableHighlight
            onPress={() => {
              let cor = "orange";
              handlePress({ text }, cor);
            }}
            style={{ ...styles.cor, backgroundColor: "#DEA74C" }}
            underlayColor={"#ac7620"}
          />
          <TouchableHighlight
            onPress={() => {
              let cor = "yellow";
              handlePress({ text }, cor);
            }}
            style={{ ...styles.cor, backgroundColor: "#EDEC42" }}
            underlayColor={"#bbbb11"}
          />
          <TouchableHighlight
            onPress={() => {
              let cor = "green";
              handlePress({ text }, cor);
            }}
            style={{ ...styles.cor, backgroundColor: "#39E831" }}
            underlayColor={"#1db814"}
          />
          <TouchableHighlight
            onPress={() => {
              let cor = "blue";
              handlePress({ text }, cor);
            }}
            style={{ ...styles.cor, backgroundColor: "#3231E5" }}
            underlayColor={"#1616b6"}
          />
          <TouchableHighlight
            onPress={() => {
              let cor = "violet";
              handlePress({ text }, cor);
            }}
            style={{ ...styles.cor, backgroundColor: "#9D35EA" }}
            underlayColor={"#7113b9"}
          />
        </View>
      </>
    </View>
  );
}

export default ColorList;
