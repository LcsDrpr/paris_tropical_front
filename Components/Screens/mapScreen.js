import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

class MapScreen extends Component {
  state = {
    location: { latitude: 0, longitude: 0 },
    errorMessage: null,
    logPosition: [],
    displayHistorique: true
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

      // fetch("https://locapicapart1.herokuapp.com/logPosition", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
      //   body:
      //     "facebookid=" +
      //     this.props.user.userId +
      //     "&latitude=" +
      //     location.coords.latitude +
      //     "&longitude=" +
      //     location.coords.longitude
      // });
    }

    var currentPosition = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    };
    this.setState({ location: currentPosition });

    // fetch(
    //   "https://locapicapart1.herokuapp.com/logPosition?facebookid=" +
    //     this.props.user.userId
    // )
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(data => {
    //     this.setState({
    //       logPosition: data.historiquePosition
    //     });
    //   });
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
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: this.state.location.latitude,
            longitude: this.state.location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          {makerList}
        </MapView>
        <Button
          title="Historique"
          onPress={() =>
            this.setState({ displayHistorique: !this.state.displayHistorique })
          }
        />
      </View>
    );
  }
}

export default MapScreen;
