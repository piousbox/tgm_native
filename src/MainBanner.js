import React from 'react'
import { 
  Button,
  StyleSheet, Text, View,
  Dimensions,
} from 'react-native'
import Image from 'react-native-scalable-image'
import { Icon, } from 'react-native-elements'
import { 
  GoogleSignin, GoogleSigninButton, statusCodes, 
} from 'react-native-google-signin'
import { connect } from 'react-redux'

const window = Dimensions.get('window')

import Const from './Const'

const styles = {
  /* text: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
    justifyContent: 'center',
    paddingLeft: 20,
  },
  innerText: { fontSize: 20, color: '#fff' },
  innerText2: { color: '#fff' },
  p: { 
    padding: 20, 
  }, */
  whiteBg: {
    backgroundColor: '#F5FCFF',
    height: window.height,
    padding: 10,
  },
}

class MainBanner extends React.Component {
  constructor(props) {
    super(props)

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
      webClientId: '287149765762-ttpcli7i1e2q5jdsnp4g5sobu7v6rjc0.apps.googleusercontent.com',
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: '', // specifies a hosted domain restriction
      loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
      accountName: '', // [Android] specifies an account name on the device that should be used
      // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    })
  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      console.warn('+++ userInfo:', userInfo)
      this.props.dispatch({ type: Const.profileAction, user: userInfo.user })

      this.setState({ userInfo });
    } catch (error) {
      console.warn('+++ error:', error)
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

  render () {
    console.warn('+++ MainBanner render:', this.state, this.props)
    
    return (
      <View style={styles.whiteBg} >
        <Text style={{ paddingBottom: 10 }} >Hello {this.props.profile.name}!</Text>
        <GoogleSigninButton
          style={{ width: 48, height: 48 }}
          size={GoogleSigninButton.Size.Icon}
          color={GoogleSigninButton.Color.Dark}
          onPress={this._signIn}
          disabled={this.state.isSigninInProgress} />
      </View>
    )
  }
}

const mapS = (state) => {
  return {
    profile: state.profile
  }
}

export default connect(mapS)(MainBanner)












/* export default class MainBanner extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: 'white' }} >
        <View style={style.text}>
          <Text style={style.innerText} >Rapid Software Development</Text>
          <Text style={style.innerText2}r >Using agile practices and the modern tech stack to achieve business goals</Text>
        </View>
       
        <Divider />
        <Text style={style.p} >We are a software consulting firm that specializes in full-cycle web application development. We service startups and small local businesses that are focused on technology. We utilize modern best development practices and provide our clients with cost-effective and performant tools.</Text>
        
        <Header>Services</Header>
        <Text style={style.p} >We offer two parallel services to our clients. We provide technical solutions to high-tech startups and mid-sized companies. We offer complete software solutions, support of existing solutions, data migrations, feature implementation, iterative development, and training.  </Text>
        <Text style={style.p} >In this parallel, we perform business analysis, find critical issues & discovery across all areas of business (core value proposition, operations, sales, marketing, and finance) to propose quick wins and elimination of bottlenecks - how a manageable amount of effort can make the most impact on the business's bottom line. Additionally, we provide recommendations on sorporate culture, processes, and tools. High-impact business consulting to startups and companies in emerging markets.  </Text>

        <Header>Software Development</Header>
        <Text style={style.p} >We do web application development, integration with external services, deployments, automation, wireframing and prototyping, as well as monitoring and scaling of existing applications. We will also go refactoring/rewriting of an existing application and migrating it from old codebase to nice and shiny new paradigm.</Text>

        <Card title="Ruby on Rails" kind="ror" description="Our framework for rapid prototyping and non-real-time applications is Ruby on Rails. We use it for constructing APIs, providing backend for websites, generating static websites, and as the tool for general scripting." />
        <Card title="Node.js & React.js" kind="node" description="" />
        <Card title="Infrastructure Automation" kind="devops" description="" />

        <Card title="API's" kind="api" description="" />
        <Card title="RMVP's" kind="mvp" description="" />
        <Card title="UI/UX" kind="uiux" description="" />
        <Footer />

      </View>)
  }
} */
