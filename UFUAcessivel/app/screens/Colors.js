import React from "react";
import { View, StatusBar, FlatList } from "react-native";
import { connect } from "react-redux";

import { ColorList, Separator } from "../components/Colors";

class Colors extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={true} />
        <FlatList
          data={this.props.titlesList}
          extraData={this.props.generalState}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => <ColorList text={item.title} />}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const titlesList = state.colors.pinColors;
  const generalState = state.colors;

  return {
    titlesList,
    generalState
  };
};

export default connect(mapStateToProps)(Colors);
