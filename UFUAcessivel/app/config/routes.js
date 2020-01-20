import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "../screens/Main";
import List from "../screens/List";

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        header: () => null
      }
    },
    List: {
      screen: List,
      navigationOptions: {
        headerTitle: "Blocos",
        headerTintColor: "#343434"
      }
    }
  })
);

export default Routes;
