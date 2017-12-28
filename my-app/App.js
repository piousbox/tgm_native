import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Actions, Scene, Stack, Router } from 'react-native-router-flux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const siteReducer = (state={}, action) => {
  return state
}
const reducers = {
  site: siteReducer,
}
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const reducer = combineReducers(reducers)
const store = createStoreWithMiddleware(reducer)

class Home extends React.Component {
  render () {
    console.log('+++ +++ Home render!', this.props, this.state)

    return (
      <View style={styles.container}>
        <Text>This is home</Text>
        <Text onPress={Actions.home2}>Lets go to home2</Text>
      </View>)
  }
}

class Home2 extends React.Component {
  constructor(props) {
    super(props)

    let url = "https://manager.piousbox.com/api/cities.json"
    let self = this
    fetch(url).then(r => r.json()).then(_data => {
      console.log('+++ data:', _data)
      self.setState({ cities: _data })
    }).catch(_err => {
      console.log('+++ fetch failure:', _err)
    })
  }

  render () {
    console.log('+++ Home2 render:', this.props, this.state)
    if (!this.state || !this.state.cities) { return (null) }

    return (
      <View style={styles.container}>
        <Text>I edited this Five times. Open up App.js to</Text>
        <Text>start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <FlatList data={ this.state.cities }
                  renderItem={({item}) => <Text>{item.name}</Text>}
                  keyExtractor={(item, index) => index}
        />
      </View>)
  }
}

const scenes = Actions.create(
  <Scene key='root'>
    <Scene key='home'  component={Home}  title="Home 1" initial={true} />
    <Scene key='home2' component={Home2} title="Home 2" />
  </Scene>)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router scenes={scenes} />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
