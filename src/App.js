import React, {Component} from 'react'
import {
  Button,
  Dimensions,
  Platform, 
  StyleSheet, ScrollView,
  Text, 
  View,
} from 'react-native'
import SideMenu from 'react-native-side-menu'
import { createStackNavigator, createAppContainer, } from 'react-navigation'

const window = Dimensions.get('window');

import IndustrialHeader  from './IndustrialHeader'
import Menu              from './Menu'
import MainBanner        from './MainBanner'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: window.height,
  },
  whiteBg: {
    backgroundColor: '#F5FCFF',
    height: window.height,
    padding: 10,
  },
  h1: {},
})

class HomeScreen extends React.Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)

    this.state = { 
      isOpen: false,
      selectedItem: 'About',
    }
  }

  toggle() {
    this.setState({ isOpen: true })
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen })
  }

  onMenuItemSelected = item => {
    this.setState({
      isOpen: false,
      selectedItem: item,
    })
    this.props.navigation.navigate(item)
  }

  render() {
    const menu = <Menu navigator={navigator} onItemSelected={this.onMenuItemSelected} />

    return (
      <SideMenu 
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)} >
        <ScrollView  >
          <IndustrialHeader openSidebar={() => {this.setState({isOpen:true})}} />
          <View style={styles.whiteBg} >
            <Text style={{ paddingBottom: 10 }} >Hello!</Text>
            <Button onPress={()=>{}} title="Login" />
          </View>
        </ScrollView>
      </SideMenu>
    )
  }
}



const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
})

const App = createAppContainer(AppNavigator)

export default App


