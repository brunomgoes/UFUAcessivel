import React, { Component } from "react";
import { FlatList, View, StatusBar } from "react-native";

import { ListItem, Separator } from "../components/List";
import blocos from "../data/blocos";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blocos: blocos,
      SelectedBlocos: []
    };
  }

  handlePress = hey => {
    this.state.blocos.map(item => {
      if (item.id === hey.id) {
        item.selected = !item.selected;
        if (item.selected === true) {
          this.state.SelectedBlocos.push(item);
          console.log("selected:" + item.title);
        } else if (item.selected === false) {
          const i = this.state.SelectedBlocos.indexOf(item);
          if (1 != -1) {
            this.state.SelectedBlocos.splice(i, 1);
            console.log("unselect:" + item.title);
            return this.state.SelectedBlocos;
          }
        }
      }
    });
    this.setState({ blocos: this.state.blocos });
  };

  handleMarkerPress = hey => {
    this.state.blocos.map(item => {
      if (item.id === hey.id) {
        item.selected = !item.selected;
        if (item.selected === true) {
          this.state.SelectedBlocos.push(item);
          console.log("selected:" + item.title);
        } else if (item.selected === false) {
          const i = this.state.SelectedBlocos.indexOf(item);
          if (1 != -1) {
            this.state.SelectedBlocos.splice(i, 1);
            console.log("unselect:" + item.title);
            return this.state.SelectedBlocos;
          }
        }
      }
    });
    this.setState({ blocos: this.state.blocos });
  };

  _showSelectedBlocos() {
    return this.state.SelectedBlocos.length;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={this.state.blocos}
          keyExtractor={item => item.id}
          extraData={this.state}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => (
            <ListItem
              text={item.title}
              selected={item.selected}
              onPress={() => {
                this.handlePress(item);
              }}
              onIconPress={() => {
                this.handleMarkerPress(item);
              }}
            />
          )}
        />
      </View>
    );
  }
}

export default List;
