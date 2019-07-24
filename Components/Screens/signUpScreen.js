import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Button } from "react-native-elements";

class SignUpScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
         
        <Input placeholder="FirstName" />

        <Input placeholder="LastName" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Input placeholder="City" value="" />
        <Button onPress={() => {}} title="Signup" />
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
export default SignUpScreen;
