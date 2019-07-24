import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import {connect} from 'react-redux';


class LanguagesScreen extends Component {

    render() {

      var backgroundImg = require('../../assets/BackgroundPages.png');
      var backgroundPageImg = require('../../assets/BackgroundPages.png');

      var enImg = require('../../assets/EnglishButton.png');
      var ptImg = require('../../assets/PortugeseButton.png');
  
        return (
  
          <View style={{flex:1, height:'100%', width:'100%',alignItems:'center', justifyContent: 'center'}}>
            <ImageBackground style={{flex:1,
              height:'100%',width:'100%', alignItems: 'center', justifyContent: 'center'}} source={backgroundImg} >
            <Text style={{marginBottom:10}}>Escolha o seu idioma</Text>
            <TouchableOpacity
              style={styles.shadow}
              onPress={() => {
                this.props.ptChosen();
                this.props.navigation.navigate('identification')}}>
              <Image
                style={styles.button}
                source={ptImg}
              />
            </TouchableOpacity>
            <Text style={{marginBottom:10}}>Choose your language</Text>
            <TouchableOpacity
              style={styles.shadow}
              onPress={() => {
                this.props.enChosen();
                this.props.navigation.navigate('identification')}}>
              <Image
                style={styles.button}
                source={enImg}
                
              />
            </TouchableOpacity>
            </ImageBackground>
          </View>
  
        );
    }
}

const styles = StyleSheet.create({

  shadow:{
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    //backgroundColor: '#fff',
    elevation: 2, // Android
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width:'auto',
    height:99.71,
    width:150,
    marginBottom:20,
    borderRadius:5,

  }
})


function mapDispatchToProps(dispatch) {
  return {
    enChosen: function() { 
        dispatch( {type: 'enchosen' } ) 
    },
    ptChosen: function(){
      dispatch({type:'ptchosen'})
    }
  }
}

export default connect(
  null, 
  mapDispatchToProps
)(LanguagesScreen);