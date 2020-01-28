import React, { useState, useEffect } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from "expo-location";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import blocos from "../data/blocos";

function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);
  const [pontos, setPontos] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const coords = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude: -18.9185003,
          longitude: -48.2595576,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        });
      }
    }

    loadInitialPosition();
  }, []);

  useEffect(() => {
    let markers = [];
    let count = 0;
    let pinColor = null;

    setColors([
      "red",
      "tomato",
      "orange",
      "yellow",
      "gold",
      "wheat",
      "tan",
      "linen",
      "green",
      "blue",
      "aqua",
      "violet",
      "indigo"
    ]);

    {
      blocos.forEach(item => {
        if (item.selected) {
          item.markers.forEach(elemento => {
            elemento.id = count;
            count += 1;
            markers.push(elemento);
          });
        }
      });
      markers.forEach(item => {
        if (item.title === "Acesso à calçada") {
          pinColor = colors[2];
          item.pinColor = pinColor;
        } else if (item.title === "Elevador") {
          pinColor = colors[8];
          item.pinColor = pinColor;
        } else if (item.title === "Acesso ao bloco") {
          pinColor = colors[9];
          item.pinColor = pinColor;
        } else if (
          item.title === "Acesso ao primeiro andar" ||
          "Acesso ao segundo andar"
        ) {
          pinColor = colors[12];
          item.pinColor = pinColor;
        }
      });
    }

    setPontos(markers);
  }, []);

  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" hidden={true} />
      <MapView
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={currentRegion}
        style={styles.map}
      >
        {pontos.map(item => (
          <Marker
            key={item.id}
            coordinate={item.coordinates}
            title={item.title}
            pinColor={item.pinColor}
          ></Marker>
        ))}
      </MapView>
      <TouchableOpacity
        style={styles.options}
        onPress={() => navigation.navigate("Colors")}
      >
        <MaterialCommunityIcons name="cogs" color="#343434" size={20} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("List")}
      >
        <MaterialCommunityIcons
          name="map-search-outline"
          color="#343434"
          size={45}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
    borderColor: "#343434",
    borderWidth: 2
  },
  options: {
    backgroundColor: "#fff",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#343434",
    borderWidth: 2,
    position: "relative"
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5
  }
});

export default Main;
