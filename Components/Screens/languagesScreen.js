import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ImageBackground } from 'react-native';
import { Button,Image } from 'react-native-elements';
import {connect} from 'react-redux';
import { Font } from 'expo';


class LanguagesScreen extends Component {

  constructor() {
    super();
    this.state = {
        backgroundImg:'',
        enImg:'',
        ptImg:'',
        logo:'',
        fontLoaded: false,
    };
  }

  /*async componentDidMount() {

    await Font.loadAsync({
      'lato-regular': require('../../assets/Font/Lato/Lato-Regular.ttf')
    });

    this.setState({fontLoaded:true});
  }*/

    componentWillMount(){

      /*Font.loadAsync({
        'lato-regular': require('../../assets/Font/Lato/Lato-Regular.ttf')
      });

      this.setState({fontLoaded:true});*/

      this.state.enImg = require('../../assets/EnglishButton.png');
      this.state.ptImg = require('../../assets/PortugeseButton.png');
      this.state.logo = require('../../assets/LogoParisTrop.png');
    }

    render() {

  
        return (
  
          <View style={{flex:1, height:'100%', width:'100%',alignItems:'center', justifyContent: 'center'}}>

            <Image 
              style={{width:220,height:140,marginBottom:40}}
              source={this.state.logo}/>

            <Text style={{marginBottom:10}}>Escolha o seu idioma</Text>
            <TouchableOpacity
              style={styles.shadow}
              onPress={() => {
                this.props.ptChosen();
                this.props.navigation.navigate('identification')}}>
              <Image
                style={styles.button}
                source={this.state.ptImg}
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
                source={this.state.enImg}
              />
            </TouchableOpacity>
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
    height:82,
    width:121,
    marginBottom:20,
    borderRadius:5

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