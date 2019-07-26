import React, { Component } from 'react'
import { Text } from 'react-native'
import { Header, Left, Button, Icon, Right, Body, Title, Drawer } from 'native-base'
import SidebarScreen from './sidebarScreen'

export default class HomeScreen extends Component {









  constructor(props) {
    super(props)
    this.state = {
      backgroundImg:'',
      logo:'',

      errorMessage:''
    };
  }



  closeDrawer() {
    this.drawer._root.close()
  }
  openDrawer() {
    this.drawer._root.open()
  }
  render() {

    var welcomeText;
    // var signInButtonText;

    if(this.props.language == 'en'){
      welcomeText = 'Welcome to Paris';
      // signInButtonText = 'Sign In';
    }else if(this.props.language == 'pt'){
      welcomeText = 'Bem-vindo em Paris';
      // signInButtonText = 'Registrar';
    }

    return (
      <Drawer
       ref={(ref) => { this.drawer = ref; }}
        content={<SidebarScreen/>}
        onClose={() => this.closeDrawer()}
      >
        <Header>

          <Body>
            <Title></Title>
          </Body>
          <Right>
          <Button transparent onPress={() => this.openDrawer()}>
            <Icon name="menu" />
          </Button>
          </Right>
        </Header>
      </Drawer>
    )
  }
}
module.exports = HomeScreen;
