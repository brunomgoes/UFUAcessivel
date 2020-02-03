import React from "react";
import { FlatList, View, StatusBar } from "react-native";
import { connect } from "react-redux";

import { ListItem, Separator } from "../components/ListItem";
import { selectBlock } from "../actions/markers";

class List extends React.Component {
  handlePress = hey => {
    this.props.blockList.map(item => {
      if (item.id === hey.id) {
        item.selected = !item.selected;
        if (item.selected === true) {
          this.props.selectedBlocksList.push(item);
          console.log("selected:" + item.title);
        } else if (item.selected === false) {
          const i = this.props.selectedBlocksList.indexOf(item);
          if (1 != -1) {
            this.props.selectedBlocksList.splice(i, 1);
            console.log("unselect:" + item.title);
            return this.props.selectedBlocksList;
          }
        }
      }
    });

    this.props.dispatch(
      selectBlock(this.props.blockList, this.props.selectedBlocksList)
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={true} />
        <FlatList
          data={this.props.blockList}
          extraData={this.props.generalState}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => (
            <ListItem
              text={item.title}
              selected={item.selected}
              onPress={() => {
                this.handlePress(item);
              }}
            />
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const blockList = state.markers.blocks;
  const selectedBlocksList = state.markers.selectedBlocks;
  const generalState = state.markers;

  return {
    blockList,
    selectedBlocksList,
    generalState
  };
};

export default connect(mapStateToProps)(List);
