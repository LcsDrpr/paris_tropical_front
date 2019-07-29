import React from "react";
import { AppRegistry, StatusBar,StyleSheet, Text, View,TouchableOpacity,ImageBackground } from "react-native";
//import { StyleSheet, Text, View,TouchableOpacity,ImageBackground } from 'react-native';
import { Button, Header,Image } from 'react-native-elements';
import SvgUri from 'react-native-svg-uri';
//import { Container, Content, Text, List, ListItem } from "native-base";
//const routes = ["Home", "Map", "News"];

export default class SidebarScreen extends React.Component {

  render() {

    return (

      <View style={{ flex:1, width:'100%',justifyContent: 'flex-start',margin:0,padding:0}}>
        <View style={{flex:0.2, marginTop:100}}>
          <TouchableOpacity>
            <Button
              titleStyle={{color:'#41479b',textAlign:'right', paddingRight:10,fontWeight:'bold'}}
              type='clear'
              title='Map'
              icon={
                <Image
                  style={{marginRight:5,height:25, width:25}}
                  source={require('../../assets/icons/compass.png')}
                />
              }
              iconLeft
              onPress={() => {
                this.props.navigation.navigate('map')}}
            />
          </TouchableOpacity>
          </View>
        <View style={{flex:0.8, justifyContent:'flex-end'}}>
          <Image 
            style={{height:230,width:'100%'}}
            containerStyle={{height:230,width:180,marginLeft:50}}
            source={require('../../assets/flamingo.png')}
          />
        </View>
          
      </View>

    )
  }
}
module.exports = SidebarScreen;
