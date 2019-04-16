import React, { Component } from 'react';
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  StatusBar,
  Platform,
  Image,
  SafeAreaView
} from 'react-native';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class Menu extends Component {
  state = { 
    width: '20%',
    height: '12%',
    expanded: false,
    menuOptionH: '0%',
    fontSize: 0, 
    count: 0,
    showMenuOpt: true,
    hamburgerDisabled: false
  };  

 _onPress = () => {
  const { expanded, hamburgerDisabled } = this.state;

  if (!hamburgerDisabled) {
    this.setState({ hamburgerDisabled: true })
    setTimeout(() => this.setState({ hamburgerDisabled: false }), 500);
  }

  if (!expanded) {
    LayoutAnimation.easeInEaseOut();

    this.setState({ width: '93%', height: '60%' });

    setTimeout( () => { 
      this.setState({ showMenuOpt: true, menuOptionH: '100%', fontSize: 12 })
    },200);

    this.setState({ expanded: true });

  } else {
    LayoutAnimation.easeInEaseOut();

    this.setState({ showMenuOpt: false, menuOptionH: '0%', fontSize: 0 });

    setTimeout( () => { 
      LayoutAnimation.easeInEaseOut(); 
      this.setState({ width: '20%', height: '12%' }); 
    },150);

    this.setState({ expanded: false });
  }
}

getViewHeight( height ) {

  console.log(this.state.count,'height:', height);
  this.setState({count: this.state.count+1})
}

  render() {
    const { navigate } = this.props;

    const { 
      height, 
      width, 
      menuOptionH,
      showMenuOpt,
      hamburgerDisabled
    } = this.state;

    const { 
      menuContainer, 
      hamburgerButton, 
      menuOptContainer,
      menuButtons,
      menuIcons,
      menuText,
      fullContainer
    } = styles;

    return (
      <View style={fullContainer}>
        <SafeAreaView style={ menuContainer }>
          <View overflow = {'visible'} style={[ styles.box, { width, height }]}>
            { showMenuOpt && 
            <View style={[ menuOptContainer, { height: menuOptionH }]}>
              
              <TouchableOpacity 
                style = { menuButtons } 
                onPress = {() => navigate('Home')} 
                onLayout = {( event ) => this.getViewHeight(event.nativeEvent.layout.height)}
              >
                <Image
                  style = { menuIcons } 
                  source={require('../assets/calendar.png')}/>
                <Text style = { menuText } >
                  Calendar
                </Text>  
              </TouchableOpacity>
              
              <TouchableOpacity
                style = { menuButtons } 
                //onPress = {() => navigate('TaskViewer')} 
              >
                <Image 
                  style = { menuIcons } 
                  source={require('../assets/Tags.png')}/>
                <Text style = { menuText } >
                  Tags            
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style = { menuButtons } 
                onPress = {() => navigate('TaskViewer')}
              >
                <Image 
                  style = { menuIcons } 
                  source={require('../assets/TaskViewer.png')}/>
                <Text style = { menuText } >
                  Task Viewer
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style = { menuButtons } 
                //onPress = {() => navigate('TaskViewer')}
              >
                <Image 
                  style = { menuIcons } 
                  source={require('../assets/About.png')}/>
                <Text style = { menuText } >
                  About
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style = { menuButtons } 
                //onPress = {() => navigate('TaskViewer')}
              >
                <Image 
                  style = { menuIcons } 
                  source={require('../assets/Account.png')}/>
                <Text style = { menuText } >
                  Account
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style = { menuButtons } 
                onPress = {() => navigate('Settings')}
              >
                <Image 
                  style = { menuIcons } 
                  source={require('../assets/Settings.png')}/>
                <Text style = { menuText } >
                  Settings
                </Text>
              </TouchableOpacity>

            </View>
            }
              <TouchableOpacity disabled = { hamburgerDisabled } onPress={ this._onPress } style = { hamburgerButton }>
                <Image
                  source={require('../assets/hamburger.png')}
                />
              </TouchableOpacity>

            </View>
        </SafeAreaView>
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  fullContainer: {
    position: 'absolute',
    height:"100%",
    width:'100%',
    zIndex: 1
  },
  menuContainer: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
  box: {
    width: 200,
    height: 200,
    borderBottomRightRadius: 30,
    backgroundColor: '#fa8072'
  },
    hamburgerButton: {
    position: 'absolute',
    bottom: 30,
    right: 30
  },  
  menuOptContainer: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 30
  },
  menuButtons: {
    flex: 1,
    flexDirection: 'row',
    margin: 10
  },
  menuIcons:{
    flex: 1,
    height: null,
    resizeMode: 'center'
  },
  menuText: {
    paddingLeft: 10,
    paddingTop: '6%',
    width: '80%',
    fontSize: 15,
    textAlignVertical: "center",
    color: 'white'
  }
});
