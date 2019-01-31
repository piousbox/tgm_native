import React from 'react'
import { 
  StyleSheet, Text, View,
} from 'react-native'
import { Header, } from 'react-native-elements'

const logoUrl = "https://wasya.co/components/Navigation/images/logo-4.png"
const logoPath = './logo-4.png'

export default class IndustrialHeader extends React.Component {
  render() {
    // const {navigate} = this.props.navigation

    return (
      <Header 
        leftComponent={{ 
          icon: 'menu', color: '#fff', 
          onPress: this.props.openSidebar, 
        }}
        centerComponent={{ 
          text: 'TGM', style: { color: '#fff' },
          onPress: () => this.props.navigate('Home'),
        }}
      />)
  }
}

