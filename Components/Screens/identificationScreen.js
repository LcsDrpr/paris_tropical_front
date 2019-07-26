import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ImageBackground } from 'react-native';
import { Button, Header,Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';
import {connect} from 'react-redux';


class IdentificationScreen extends Component {
  constructor() {
    super();
    this.state = {
      backgroundImg:'',
      logo:'',
    };
  }

    componentWillMount(){

      this.state.backgroundImg = require('../../assets/Backgroundflower.png');
      this.state.logo = require('../../assets/LogoParisTrop.png');
    }

    render() {

      var signUpButtonText;
      var signInButtonText;

      if(this.props.language == 'en'){
        signUpButtonText = 'Sign Up';
        signInButtonText = 'Sign In';
      }else if(this.props.language == 'pt'){
        signUpButtonText = 'Registrar-Se';
        signInButtonText = 'Registrar';
      }

        return (
          <View>
            <Header
              barStyle="dark-content"
              leftComponent={
                <Icon
                  name="chevron-left"
                  size={25}
                  color="#41479b"
                  onPress={() => { this.props.navigation.goBack() }}
                />
              }
              centerComponent={
                <Image
                style={{height:35, width:50}}
                source={this.state.logo}/>
              }
              containerStyle={{
                  backgroundColor: 'white',
                  justifyContent: 'space-around',

                }}
            />

            <View style={{height:'90%', width:'100%',alignItems:'center', justifyContent: 'center'}}>
              <ImageBackground style={{flex:1,width:'100%', alignItems: 'center', justifyContent: 'center'}} source={this.state.backgroundImg} >

                <TouchableOpacity
                  onPress={() => { this.props.navigation.navigate('signUp')}}
                  style={{ width:'85%',
                    height:60,marginBottom:20}}
                >
                  <Button
                    titleStyle={{color:'#41479b',textAlign:'left', paddingRight:10}}
                    type='clear'
                    containerStyle={styles.button}
                    title={signUpButtonText}
                    icon={
                      <SvgUri
                        width="25"
                        height="25"
                        source={require('../../assets/icons/login-button.svg')}
                      />
                    }
                    iconRight
                    onPress={() => {
                      this.props.navigation.navigate('signUp')}}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                style={{ width:'85%',
                height:60,}}
                onPress={() => {
                  this.props.navigation.navigate('signIn')}}>
                <Button
                  titleStyle={{color:'#41479b',textAlign:'left', paddingRight:10}}
                  containerStyle={styles.button}
                  title={signInButtonText}
                  type='clear'
                  icon={
                    <SvgUri
                      width="25"
                      height="25"
                      source={require('../../assets/icons/fingerprint.svg')}
                    />
                  }
                  iconRight
                  onPress={() => {
                    this.props.navigation.navigate('signIn')}}
                />
              </TouchableOpacity>
              </ImageBackground>
            </View>

          </View>
        );
    }
}

const styles = StyleSheet.create({

  button: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android
    justifyContent: 'center',
    alignItems: 'center',
    height:60,
    borderRadius:5,
  }
})



function mapStateToProps(state) {
  return { language: state.language }
}

export default connect(
  mapStateToProps,
  null
)(IdentificationScreen);
