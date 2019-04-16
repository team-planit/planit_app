import React, { Component } from 'react';
import { Image, View } from 'react-native';
import Menu from '../components/Menu';

export default class Tasks extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (     
      <View style = { styles.container}>
        <Menu navigate={navigate} /> 
        <Image
          source={require('../assets/TaskViewer.png')}
        />     
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
};      