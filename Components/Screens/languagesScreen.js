import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import { Button } from 'react-native-elements';
import {connect} from 'react-redux';


class LanguagesScreen extends Component {

    render() {

      var enImg = require('../../assets/EnglishButton.png');
      var ptImg = require('../../assets/PortugeseButton.png');
  
        return (
  
          <View style={{flex:1, height:'100%', width:'100%',alignItems:'center', justifyContent: 'center'}}>
           
            <Text style={{marginBottom:10}}>Escolha o seu idioma</Text>
            <TouchableOpacity onPress={() => {
              this.props.ptChosen();
              this.props.navigation.navigate('identification')}}>
              <Image
                style={styles.button}
                source={ptImg}
              />
            </TouchableOpacity>
            <Text style={{marginBottom:10}}>Choose your language</Text>
            <TouchableOpacity onPress={() => {
              this.props.enChosen();
              this.props.navigation.navigate('identification')}}>
              <Image
                style={styles.button}
                source={enImg}
                
              />
            </TouchableOpacity>

          </View>
  
        );
    }
}

const styles = StyleSheet.create({

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width:'auto',
    height:99.71,
    width:150,
    marginBottom:20,
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