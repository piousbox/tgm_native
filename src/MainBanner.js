import React from 'react'
import { 
  Button,
  StyleSheet, Text, View,
  Dimensions,
} from 'react-native'
import Image from 'react-native-scalable-image'
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
        { /* <Text>Finally, the footer!</Text> */ }
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


export default class MainBanner extends React.Component {
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
}

