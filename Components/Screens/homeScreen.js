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




