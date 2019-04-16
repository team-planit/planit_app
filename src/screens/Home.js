import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Menu from '../components/Menu';

export default class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (     
      <View style = { styles.container}>
      <Menu navigate={navigate} />      
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
};
