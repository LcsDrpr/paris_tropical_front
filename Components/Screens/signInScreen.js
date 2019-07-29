import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground,TouchableOpacity } from 'react-native';
import { Input, Header, Button,Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';


class SignInScreen extends Component {

  constructor() {
    super();
    this.state = {
      backgroundImg:'',
      logo:'',
      email: '',
      password:'',
      errorMessage:''
    };
  }

    componentWillMount(){
      this.state.backgroundImg = require('../../assets/Backgroundflower.png');
      this.state.logo = require('../../assets/LogoParisTrop.png');
    }


    render() {

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
              titleStyle ={{textAalign:'center'}} 
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
                  height:80,
                }}
            />
              <View style={{height:'90%', width:'100%',alignItems:'center', justifyContent: 'center'}}>

              <ImageBackground style={{flex:1,width:'100%', alignItems: 'center', justifyContent: 'center'}} source={this.state.backgroundImg} >

                <Input
                  label={emailText}
                  labelStyle={styles.labelstyle}
                  inputStyle={styles.placeholderstyle}
                  containerStyle={{marginBottom:20}}
                  inputContainerStyle={{height:30}}
                  placeholder={emailText}
                  onChangeText={(value) => this.setState({email: value})} 
                    value={this.state.email}
                />
                <Input
                  label={passwordText}
                  labelStyle={styles.labelstyle}
                  inputStyle={styles.placeholderstyle}
                  containerStyle={{marginBottom:20}}
                  inputContainerStyle={{height:30}}
                  placeholder={passwordText}
                  onChangeText={(value) => this.setState({password: value})} 
                    value={this.state.password}
                />
                <View style={{flexDirection: 'column',alignItems:'center', justifyContent: 'center'}}>

                <TouchableOpacity
                  style={{ width:'85%',
                  height:60,marginTop:20}}
                >

                  <Button
                    type='clear'
                    titleStyle={{color:'#41479b',textAlign:'center', width:'85%'}}
                    containerStyle={styles.button}
                    title={signInButton}

                    onPress={() =>  fetch('http://10.2.3.144:3000/signin/', {
                      method:'POST',
                      headers: {'Content-Type':'application/x-www-form-urlencoded'},
                      body:'email='+this.state.email+'&password='+this.state.password})
                    .then(function(response) {
                      return response.json();
                    })
                    .then((data)=>{
                      
                      if(data.exist == true){
                        this.props.handleUserValid(data.user.lastname, data.user.firstname, data.user.email,data.user.city, data.user.country);
                        fetch('http://10.2.3.144:3000/getMeteo/')
                        .then(function(response) {
                          return response.json();
                        })
                        .then((meteo)=>{
                          console.log('FULL METEO : ',meteo);
                          console.log('METEO MAIN : ',meteo.jsonBody.main.temp);
                          console.log('METEO WEATHER PART : ',meteo.jsonBody.weather[0].icon);
                          this.props.getMeteo(meteo.jsonBody.main.temp, meteo.jsonBody.weather[0].icon);
                          this.props.navigation.navigate('home');
                        });

                      }else{
                        this.setState({errorMessage: "Votre mot de passe n'est pas le bon"});
                      }
                    })}


                  />

                </TouchableOpacity> 

                <TouchableOpacity
                  style={{ width:'85%',
                  height:60,marginTop:20}}>
                  <Button
                    type='clear'
                    titleStyle={{color:'#41479b',textAlign:'center',width:'85%'}}
                    containerStyle={styles.button}
                    title={forPasswordButton}
                  />
                </TouchableOpacity> 
                </View>
                </ImageBackground>
              </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({

  placeholderstyle:{
    color:'rgba(65, 71, 155, 0.7)',
    fontSize:16,
  },

  labelstyle:{
    color:'#41479b',
    fontSize:12,
  },

  button: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    height:60,
    borderRadius:5,
    width:'85%',
  }
})


function mapDispatchToProps(dispatch) {

  return {
    handleUserValid: function(lastname,firstname,email,city,country) { 
      dispatch( {type: 'setUserData',
        Nom:lastname,
        Prenom:firstname,
        Email:email,
        City:city,
        Country:country
      })
    },
    getMeteo: function(temp, icon){
      console.log("TEMPERATURE !",temp + "ICONE PEUTETRE SOLEIL",icon);
      dispatch({ type : 'getCurrentMeteo',
      Temperature : temp,
      WeatherIcone : icon,
      })
    }
  }
}


function mapStateToProps(state) {
  return { language: state.language }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SignInScreen);