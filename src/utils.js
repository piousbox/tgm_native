import React from 'react'
import { Text, View, } from 'react-native'
import { Icon, } from 'react-native-elements'

const style = {
  text: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
    justifyContent: 'center',
    paddingLeft: 20,
  },
  innerText: { fontSize: 20, color: '#fff' },
  innerText2: { color: '#fff' },
  p: { 
    padding: 20, 
  },
}


class Header extends React.Component {
  render () {
    return (
      <View style={{}} >
        <View style={{ flex: 1, flexDirection: 'column' }} >
          <Text style={{ textAlign: 'center', fontSize: 20 }} >{this.props.children}</Text>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }} >
            <View style={{ width: '10%', borderBottomColor: 'green', borderBottomWidth: 6, height: '60%' }} />
            <View style={{ width: 24, }} ><Icon name='filter-vintage' color="green" /></View>
            <View style={{ width: '10%', borderBottomColor: 'green', borderBottomWidth: 6, height: '60%' }} />
          </View>
        </View>
      </View>
    )
  }
}

export {
  Header,
}













/*
class Card extends React.Component {
  render () {
    return null
  }
}

class Client extends React.Component {
  render () {
    return null
  }
}

class Divider extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }} >
        <View style={{ width: '30%', borderBottomColor: 'black', borderBottomWidth: 1, height: '50%' }} />
        <View style={{ width: 24, }} ><Icon name='filter-vintage' /></View>
        <View style={{ width: '30%', borderBottomColor: 'black', borderBottomWidth: 1, height: '50%' }} />
      </View>
      )
  }
}

class Footer extends React.Component {
  render () {
    return (
      <View>
        <Text>Finally, the footer!</Text>
      </View>
    )
  }
}


class Header extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }} >
        <Text style={{ textAlign: 'center', fontSize: 20 }} >{this.props.children}</Text>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }} >
          <View style={{ width: '10%', borderBottomColor: 'green', borderBottomWidth: 6, height: '60%' }} />
          <View style={{ width: 24, }} ><Icon name='filter-vintage' color="green" /></View>
          <View style={{ width: '10%', borderBottomColor: 'green', borderBottomWidth: 6, height: '60%' }} />
        </View>
      </View>
    )
  }
}

class H1 extends React.Component {
  render () {
    return null
  }
}

class H2 extends React.Component {
  render () {
    return null
  }
}

class H3 extends React.Component {
  render () {
    return null
  }
}

class Industry extends React.Component {
  render () {
    return null
  }
}


class Quote extends React.Component {
  render () {
    return null
  }
}


class TeamMember extends React.Component {
  render () {
    return null
  }
}
*/