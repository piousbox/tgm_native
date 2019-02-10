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
import { connect } from 'react-redux'

const window = Dimensions.get('window')

/* class SettingsScreen extends React.Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)
  }

  render() {
    const menu = <Menu navigator={navigator} onItemSelected={this.onMenuItemSelected} />

    return (
      <Provider store={store} >
        <SideMenu
          menu={menu}
          isOpen={this.state.isOpen}
          onChange={isOpen => this.updateMenuState(isOpen)} >
          <ScrollView  >
            <IndustrialHeader openSidebar={() => {this.setState({isOpen:true})}} />
            <Text>Settings.</Text>
          </ScrollView>
        </SideMenu>
      </Provider>
    )
  }
} */

class SettingsScreen extends React.Component {
  render () {
    return (
      <View>
        <Text>Settings for {this.props.profile.name}</Text>
      </View>
    )
  }
}

const mapS = (state) => {
  return { 
    profile: state.profile
  }
}

export default connect(mapS)(SettingsScreen)
