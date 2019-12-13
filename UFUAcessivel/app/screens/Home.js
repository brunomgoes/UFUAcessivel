import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

import blocos from '../data/blocos';

const ICON_COLOR = '#343434';
const ICON_SIZE = 60;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  icon: {
    paddingBottom: 10,
    paddingHorizontal: 10,
  }
});

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      blocos: blocos,
      SelectedBlocos: [],
    }
  }

  static propTypes = {
    navigation: PropTypes.object,
  };

  handleIconPress = () => {
    console.log("icon press");
  };

  handleListPress = () => {
    this.props.navigation.navigate('List');
  };

  render() {
    let markers = [];
    let count = 0;

    this.state.blocos.forEach(item => {
      item.markers.forEach(elemento => {
        elemento.id = count;
        count+= 1;
        markers.push(elemento);
      });
    });

    let mapMarkers = markers.map(item => {
      return <MapView.Marker
        key={item.id}
        coordinate={item.coordinates}
        title={item.title}
      />
    });

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -18.917841,
            longitude: -48.259092,
            latitudeDelta: 0.0042,
            longitudeDelta: 0.0031,
          }}
        >
          {mapMarkers}
        </MapView>
        <Ionicons
          onPress={this.handleListPress}
          name="md-list-box"
          color={ICON_COLOR}
          size={ICON_SIZE}
          style={styles.icon}
        />
      </View>
    );
  }
}

export default Home;
