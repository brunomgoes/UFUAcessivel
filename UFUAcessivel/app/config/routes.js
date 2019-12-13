import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Home from '../screens/Home';
import List from '../screens/List';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
    },
  },
  List: {
    screen: List,
    navigationOptions: {
      headerTitle: 'Blocos',
      headerTintColor: '#343434',
    },
  },
});

export default createAppContainer(AppNavigator);
