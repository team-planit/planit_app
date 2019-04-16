import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './src/screens/Home';
import Tasks from './src/screens/Tasks';
import Settings from './src/screens/Settings';

export default class App extends Component {
  render() {
    return(
      <AppContainer/>
    )
  }
}

export const RootStack = createStackNavigator ({
  Home: {
    screen: Home
  },
  TaskViewer: {
    screen: Tasks
  },
  Settings: {
    screen: Settings
  }
},{
  headerMode: 'none',
  initialRouteName: 'Home'
});

const AppContainer = createAppContainer(RootStack);

  