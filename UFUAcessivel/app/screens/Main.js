import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";

class Main extends React.Component {
  render() {
    const currentRegion = {
      latitude: -18.9185003,
      longitude: -48.2595576,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005
    };

    const markers = [];
    let count = 0;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="default" hidden={true} />
        <MapView initialRegion={currentRegion} style={styles.map}>
          {this.props.selectedBlocksList.forEach(item => {
            item.markers.forEach(elemento => {
              elemento.id = count;
              count += 1;
              markers.push(elemento);
            });
          })}
          {markers.forEach(item => {
            this.props.colorsList.map(elemento => {
              if (item.type === elemento.title) {
                item.pinColor = elemento.color;
              }
            });
          })}
          {markers.map(item => (
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
          onPress={() => this.props.navigation.navigate("Colors")}
        >
          <MaterialCommunityIcons name="cogs" color="#343434" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("List")}
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

const mapStateToProps = state => {
  const selectedBlocksList = state.markers.selectedBlocks;
  const colorsList = state.colors.pinColors;

  return {
    selectedBlocksList,
    colorsList
  };
};

export default connect(mapStateToProps)(Main);
