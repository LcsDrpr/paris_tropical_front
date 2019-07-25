import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Input, Header, Button,Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';


class SignInScreen extends Component {

    render() {

      var backgroundImg = require('../../assets/Backgroundflower.png');

      var emailText;
      var passwordText;
      var signInButton;
      var forPasswordButton;

      if(this.props.language == 'en'){
        emailText = 'Email';
        passwordText = 'Password';
        signInButton = 'Sign In';
        forPasswordButton = 'Forgot Password'
      }else if(this.props.language == 'pt'){
        emailText = 'E-mail';
        passwordText = 'Senha';
        signInButton = 'Registrar'
        forPasswordButton = 'Esqueceu a senha'

      }
  
        return (
  
          <View>
            <Header
              headerTitle= {
                <Image source={require('../../assets/LogoParisTrop.png')}/>
              }
              titleStyle ={{textAalign:'center'}} 
              barStyle="dark-content"
              //placement="left"
              leftComponent={
                /*<SvgUri
                  width="25"
                  height="25"
                  source={require('../../assets/icons/angle-left.svg')}
                  onPress={() => { this.props.navigation.goBack() }}
                />*/
                <Icon
                  name="chevron-left"
                  size={25}
                  color="#41479b" 
                  onPress={() => { this.props.navigation.goBack() }}
                />
              }
              centerComponent={{ text: 'MY TITLE', style: { color: '#41479b', textAlign:'center', alignItems:'center' } }}
              containerStyle={{
                  backgroundColor: 'white',
                  justifyContent: 'space-around',

                }}
            />
              <View style={{height:'90%', width:'100%',alignItems:'center', justifyContent: 'center'}}>
              <ImageBackground style={{flex:1,width:'100%', alignItems: 'center', justifyContent: 'center'}} source={backgroundImg} >
                <Input
                  placeholder={emailText}
                />
                <Input
                  placeholder={passwordText}
                />
                <View style={{flex:1,flexDirection: 'column',alignItems:'center', justifyContent: 'center'}}>
                  <Button style={{ width:'100%', height:40}}
                    title={signInButton}
                  />
                  <Button style={{ width:'100%', height:40}}
                  title={forPasswordButton}
                  />
                </View>
                </ImageBackground>
              </View>
          </View>
        );
    }
}


function mapStateToProps(state) {
  return { language: state.language }
}

export default connect(
  mapStateToProps, 
  null
)(SignInScreen);