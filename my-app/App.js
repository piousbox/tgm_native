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
    return (<View style={styles.container}><Text>This is home</Text></View>)
  }
}

class Home2 extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>I edited this Five times. Open up App.js to</Text>
        <Text>start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <FlatList data={ [{key: 'a'}, {key:'b'}] }
                  renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View>)
  }
}

const scenes = Actions.create(
  <Scene key='root'>
    <Scene key='home' component={Home} />
    <Scene key='home2' component={Home2} />
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
