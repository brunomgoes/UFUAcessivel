import React, { Component } from "react";
import { FlatList, View, StatusBar } from "react-native";

import { ListItem, Separator } from "../components/ListItem";
import blocos from "../data/blocos";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pontos: blocos,
      selectedBlocos: []
    };
  }

  handlePress = hey => {
    this.state.pontos.map(item => {
      if (item.id === hey.id) {
        item.selected = !item.selected;
        if (item.selected === true) {
          this.state.selectedBlocos.push(item);
          console.log("selected:" + item.title);
        } else if (item.selected === false) {
          const i = this.state.selectedBlocos.indexOf(item);
          if (1 != -1) {
            this.state.selectedBlocos.splice(i, 1);
            console.log("unselect:" + item.title);
            return this.state.selectedBlocos;
          }
        }
      }
    });
    this.setState({ pontos: this.state.pontos });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={true} />
        <FlatList
          data={this.state.pontos}
          extraData={this.state}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => (
            <ListItem
              text={item.title}
              selected={item.selected}
              onPress={() => this.handlePress(item)}
            />
          )}
        />
      </View>
    );
  }
}

export default List;
