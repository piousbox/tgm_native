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
import { 
  GoogleSignin, GoogleSigninButton, statusCodes, 
} from 'react-native-google-signin'

const window = Dimensions.get('window')

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
      isSigninInProgress: false,
    }

    // client id: 287149765762-ttpcli7i1e2q5jdsnp4g5sobu7v6rjc0.apps.googleusercontent.com
    // client secret: 0_f76BcWwYF1q1nxGstRJO-S
    // debug sha-1
    // F3:35:E2:7E:A6:83:79:E3:83:B7:0D:ED:77:4A:C7:5F:3C:64:00:12
    // debug client id 287149765762-ttpcli7i1e2q5jdsnp4g5sobu7v6rjc0.apps.googleusercontent.com
    // production sha-1
    // 72:FF:D4:95:6C:67:EE:1C:2F:23:12:1F:3C:5B:C3:9C:FB:D0:3F:55
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      // webClientId: '287149765762-ttpcli7i1e2q5jdsnp4g5sobu7v6rjc0.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      webClientId: '287149765762-ttpcli7i1e2q5jdsnp4g5sobu7v6rjc0.apps.googleusercontent.com',
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: '', // specifies a hosted domain restriction
      loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
      accountName: '', // [Android] specifies an account name on the device that should be used
      // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    })

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

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      console.warn('+++ userInfo:', userInfo)

      this.setState({ userInfo });
    } catch (error) {
      

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
        console.warn('+++ error:', error)
      }
    }
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
            { /* <Button onPress={()=>{}} title="Login" /> */ }
            <GoogleSigninButton
              style={{ width: 48, height: 48 }}
              size={GoogleSigninButton.Size.Icon}
              color={GoogleSigninButton.Color.Dark}
              onPress={this._signIn}
              disabled={this.state.isSigninInProgress} />
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


