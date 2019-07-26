import React, { Component } from 'react'
import { Text,TouchableOpacity,View, ImageBackground } from 'react-native'
import { Input, Header, Button,Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import SvgUri from 'react-native-svg-uri';
//import { Header, Left, Button, Icon, Right, Body, Title, Drawer } from 'native-base'
//import SidebarScreen from './sidebarScreen'

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundImg:'',
      logo:'',
      burger:'',
    }
  }

  componentWillMount(){
    this.state.backgroundImg = require('../../assets/Backgroundflower.png');
    this.state.logo = require('../../assets/LogoParisTrop.png');
  }

  render() {
    return (
      <View>
        <Header
          titleStyle ={{textAalign:'center'}} 
          barStyle="dark-content"
          leftComponent={
            
            <Image
            style={{height:35, width:50}}
            source={this.state.logo}
            />
          }
          containerStyle={{
            backgroundColor: 'white',
            justifyContent: 'space-around',
            height:80,
          }}
          rightComponent={
            <TouchableOpacity
              onPress={()=>{this.props.navigation.toggleDrawer()}}
            >
            <Image
            style={{height:60, width:60,marginRight:-10}}
            source={require('../../assets/Burger.png')}
            />
            </TouchableOpacity>
          }
        />
        <View style={{height:'90%', width:'100%',alignItems:'center', justifyContent: 'center'}}>
          <ImageBackground style={{flex:1,width:'100%', alignItems: 'center', justifyContent: 'center'}} source={this.state.backgroundImg} >



          </ImageBackground>




        </View>
      </View>

    )
  }
}
module.exports = HomeScreen;
