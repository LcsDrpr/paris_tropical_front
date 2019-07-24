import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { State } from 'react-native-gesture-handler';
import { Input, Button } from "react-native-elements";
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
    };
  }


  render() {

    return (
      <View style={styles.container}>
         
        <Input placeholder="FirstName" onChangeText={(value) => this.setState({firstname: value})} value={this.state.firstname} />

        <Input placeholder="LastName" onChangeText={(value) => this.setState({lastname: value})} value={this.state.lastname} />
        <Input placeholder="Email" onChangeText={(value) => this.setState({email: value})} 
            value={this.state.email} />
        <Input placeholder="Password" onChangeText={(value) => this.setState({password: value})}
            value={this.state.password} />
        <Input placeholder="City" onChangeText={(value) => this.setState({city: value})} value={this.state.city} />
        <Button 
          onPress={() =>  fetch('http://10.2.3.144:3000/signup', {
            method:'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body:'firstname='+this.state.firstname+'&lastname='+this.state.lastname+'&email='+this.state.email+'&password='+this.state.password+'&city='+this.state.city
          })
          .then((response)=> {
            return response.json();
          })
          .then((data)=>{
            this.props.handleUserValid(data.user.lastname,data.user.firstname,data.user.email,data.user.city,data.user.country);
            this.props.navigation.navigate('home');
           })
        }
        
        title="Signup" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#d6d7da',
  },
  Button: {
    backgroundColor: '#dfe4ea',

    fontSize: 2,
   
  }
});

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
    }
  }
}

export default connect(
  null, 
  mapDispatchToProps
)(SignUpScreen);
//export default SignUpScreen;
