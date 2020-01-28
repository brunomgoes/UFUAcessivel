import React from "react";
import { View, StatusBar, FlatList } from "react-native";

import { ColorList, Separator } from "../components/Colors";

class Colors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [
        "Elevadores",
        "Estacionamentos",
        "Rampas para blocos",
        "Rampas para calçada"
      ]
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={true} />
        <FlatList
          data={this.state.lista}
          extraData={this.state}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => <ColorList text={item} />}
        />
      </View>
    );
  }
}

export default Colors;
