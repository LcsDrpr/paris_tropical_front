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

      <View style={{height:'90%', width:'100%',alignItems:'center', justifyContent: 'center'}}>
        <TouchableOpacity>
          <Button
            titleStyle={{color:'#41479b',textAlign:'right', paddingRight:10,fontWeight:'bold'}}
            type='clear'
            //containerStyle={styles.button}
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

    )
  }
}
module.exports = SidebarScreen;
