import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Picker } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import { Icon, Container, Header, Content, Right } from 'native-base';


class MapScreen extends Component {
  state = {
    location: { latitude: 0, longitude: 0 },
    errorMessage: null,
    logPosition: [],

    displayHistorique: true,
    language: null
  };

  componentWillMount() {
    this._getLocationAsync();
  }
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log("LOCATION --> ", location);

    if (location.coords.latitude != 0 && location.coords.longitude != 0) {
      var logPositionCopy = [...this.state.logPosition];
      logPositionCopy.push({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      });
      this.setState({ logPosition: logPositionCopy });
    }

    var currentPosition = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    };
    this.setState({ location: currentPosition });
  };
  render() {
    if (this.state.displayHistorique) {
      var makerList = this.state.logPosition.map((marker, i) => {
        return (
          <Marker
            key={i}
            pinColor="blue"
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude
            }}
          />
        );
      });
    }
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 3,
            marginTop: 20,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: "#d6d7da"
          }}
        >
          <Picker  style={{}} 
            selectedValue={this.state.language}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <MapView
          style={{ flex: 2 }}
          region={{
            latitude: this.state.location.latitude,
            longitude: this.state.location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          {makerList}
        </MapView>
        <View style={{ flex: 3, backgroundColor: "blue" }} />
        <Text> {this.state.language} </Text>
      </View>
    );
  }
}

export default MapScreen;
