import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Header } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import {connect} from 'react-redux';


class IdentificationScreen extends Component {

    render() {
      console.log('test recup redu language : ',this.props.language);
      var signUpButtonText;
      var signInButtonText;
      
      if(this.props.language == 'en'){
        signInButtonText = 'Sign Up';
        signInButtonText = 'Sign In';
      }else if(this.props.language == 'pt'){
        signInButtonText = 'Registrar-p';
        signInButtonText = 'Sign In';
      }

        return (
  
          <View>
            <Header
              titleStyle ={{textAalign:'center'}} 
              barStyle="light-content"
              placement="left"
              leftComponent={<Icon
                  name='arrow-back'
                  color='#41479b' />}
              centerComponent={{ text: 'MY TITLE', style: { color: '#fff', textAlign:'center' } }}
              containerStyle={{
                  backgroundColor: 'red',
                  justifyContent: 'space-between',
                }}
              />
            <View style={{height:'90%', width:'100%',alignItems:'center', justifyContent: 'center'}}>

              <Button
              title="Sign Up"
              style={width="70%"}
              />
              <Button title="Sign In"/>
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
)(IdentificationScreen);