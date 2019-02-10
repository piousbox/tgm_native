import React, {Component} from 'react'
import {
  Button,
  Dimensions,
  Platform, 
  StyleSheet, ScrollView,
  Text, 
  View,
  YellowBox,
} from 'react-native'
import SideMenu from 'react-native-side-menu'
import { createStackNavigator, createAppContainer, } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const window = Dimensions.get('window')

import rootReducer       from './rootReducer'
import IndustrialHeader  from './IndustrialHeader'
import Menu              from './Menu'
import MainBanner        from './MainBanner'
import SettingsScreen    from './SettingsScreen'

const store = createStore(rootReducer)

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
      isOpen: false 
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
            <MainBanner />
          </ScrollView>
        </SideMenu>
      
    )
  }
}


const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen },
})

const AppContainer = createAppContainer(AppNavigator)

class App extends React.Component {
  render () {
    return (
      <Provider store={store}><AppContainer /></Provider>
    )
  }
}

export default App


