
import React, { Component } from 'react'
import { Text } from 'react-native'
import { Header, Left, Button, Icon, Right, Body, Title, Drawer } from 'native-base'
import SidebarScreen from './sidebarScreen'

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  closeDrawer() {
    this.drawer._root.close()
  }
  openDrawer() {
    this.drawer._root.open()
  }
  render() {
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
=======
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Card, CardItem } from "native-base";
import { DrawerItems  } from 'react-navigation';
import mapScreen from './mapScreen';
import { Drawer } from 'native-base';
import SideBar from './yourPathToSideBar';
import { StatusBar } from "react-native";


class HomeScreen extends Component {


    render() {

        return (

          <Container>
          <Header>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>HomeScreen</Title>
            </Body>
            <Right />
          </Header>
          <Content padder>
            <Card>
              <CardItem>
                <Body>
                  <Text>Chat App to talk some awesome people!</Text>
                </Body>
              </CardItem>
            </Card>
            <Button full rounded dark
              style={{ marginTop: 10 }}
              onPress={() => this.props.navigation.navigate("Chat")}>
              <Text>Chat With People</Text>
            </Button>
            <Button full rounded primary
              style={{ marginTop: 10 }}
              onPress={() => this.props.navigation.navigate("Profile")}>
              <Text>Goto Profiles</Text>
            </Button>
          </Content>
        </Container>
        );
    }
}





export default HomeScreen;




>>>>>>> maps
