import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
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

    {
      blocos.forEach(item => {
        item.markers.forEach(elemento => {
          elemento.id = count;
          count += 1;
          markers.push(elemento);
        });
      });
    }

    setPontos(markers);
  }, []);

  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

  return (
    <View style={styles.container}>
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
          ></Marker>
        ))}
      </MapView>
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
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  }
});

export default Main;
