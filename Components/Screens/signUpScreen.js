import React, { Component } from "react";
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity } from "react-native";
import { State } from 'react-native-gesture-handler';
import { Input, Button, Header, Image } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';

class SignUpScreen extends Component {

  constructor() {
    super();
    this.state = {
        firstname: '',
        lastname:'',
        email:'',
        password:'',
        city:'',
        backgroundImg:'',
        logo:''
    };
  }

    componentWillMount(){

      this.state.backgroundImg = require('../../assets/Backgroundflower.png');
      this.state.logo = require('../../assets/LogoParisTrop.png');

    }

  render() {

    var firstnameText;
    var lastnameText;
    var emailText;
    var passwordText;
    var cityText;
    var signUpButtonText;

    if(this.props.language == 'en'){
      firstnameText = 'First name';
      lastnameText = 'Last name';
      emailText = 'Email';
      passwordText = 'Password';
      cityText = "City"
      signUpButtonText = 'Sign Up';
    }else if(this.props.language == 'pt'){
      firstnameText = 'Nome Próprio';
      lastnameText = 'Sobrenome';
      emailText = 'E-mail';
      passwordText = 'Senha';
      cityText = "Cidade"
      signUpButtonText = 'Registrar-Se';
    }


    return (
      <View style={{flex:1}}>
          <Header
            headerTitle= {
              <Image source={require('../../assets/LogoParisTrop.png')}/>
            }
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
            }}
          />
        <View style={{ flex:2,height:'80%', width:'100%',alignItems:'center', justifyContent: 'center'}}>

        <ImageBackground style={{flex:1,width:'100%', alignItems: 'center', justifyContent: 'center'}} source={this.state.backgroundImg} >

            <Input
              label={firstnameText}
              labelStyle={styles.labelstyle}
              inputStyle={styles.placeholderstyle}
              containerStyle={{marginTop:10}}
              inputContainerStyle={{height:30}}
              placeholder={firstnameText} onChangeText={(value) => this.setState({firstname: value})} value={this.state.firstname} />

            <Input
              label={lastnameText}
              labelStyle={styles.labelstyle}
              inputStyle={styles.placeholderstyle}ê
              containerStyle={{marginTop:10}}
              inputContainerStyle={{height:30}}
              placeholder={lastnameText} onChangeText={(value) => this.setState({lastname: value})} value={this.state.lastname}
            />
            <Input
              label={emailText}
              labelStyle={styles.labelstyle}
              inputStyle={styles.placeholderstyle}
              containerStyle={{marginTop:10}}
              inputContainerStyle={{height:30}}
              placeholder={emailText} onChangeText={(value) => this.setState({email: value})} 
                value={this.state.email} />

            <Input
              label={passwordText}
              labelStyle={styles.labelstyle}
              inputStyle={styles.placeholderstyle}
              containerStyle={{marginTop:10}}
              inputContainerStyle={{height:30}}
              placeholder={passwordText} onChangeText={(value) => this.setState({password: value})}

                value={this.state.password} />

            <Input
              label={cityText}
              labelStyle={styles.labelstyle}
              inputStyle={styles.placeholderstyle}
              containerStyle={{marginTop:10}}
              inputContainerStyle={{height:30}}
              placeholder={cityText} onChangeText={(value) => this.setState({city: value})} value={this.state.city} />

             <TouchableOpacity
              style={{ width:'85%',
              height:60,marginTop:20}}
            > 
              <Button 
                type='clear'
                titleStyle={{color:'#41479b',textAlign:'center',width:'85%'}}
                containerStyle={styles.button}
                onPress={() => fetch('http://10.2.3.144:3000/signup/', {
                  method:'POST',
                  headers: {'Content-Type':'application/x-www-form-urlencoded'},
                  body:'firstname='+this.state.firstname+'&lastname='+this.state.lastname+'&email='+this.state.email+'&password='+this.state.password+'&city='+this.state.city
                })
                .then(function(response) {
                  return response.json();
                })
                .then((data)=>{
                  console.log(data);
                  this.props.handleUserValid(data.user.lastname,data.user.firstname,data.user.email,data.user.city,data.user.country);
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

                })
              }
              
              title={signUpButtonText}
              />
            </TouchableOpacity>
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
      } ) 
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
)(SignUpScreen);
//export default SignUpScreen;
