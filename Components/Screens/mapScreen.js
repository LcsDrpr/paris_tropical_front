import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Picker } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import { Icon, Container, Header, Content, Right } from 'native-base';
import { ListItem } from 'react-native-elements';




class Menupicker extends Component {
  state = {
    language: null
  }
  render() {
    return (
        <Picker 
          selectedValue={this.state.language}
          style={{ height: 50, width: 100,  }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
     
    );
  }
}

class MapScreen extends Component {
  state = {
    location: { latitude: 0, longitude: 0 },
    errorMessage: null,
    logPosition: [],

    displayHistorique: true,
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
            flex: 1,
            marginTop: 20,
            borderRadius: 4,
            borderWidth: 0,
            flexDirection: 'row',
            justifyContent: 'center',
            borderColor: "#d6d7da"
            
          }}
        >

          <Menupicker />
          <Menupicker/>
          <Menupicker/>

        </View>

        <MapView
          style={{ flex: 3 }}
          region={{
            latitude: this.state.location.latitude,
            longitude: this.state.location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          {makerList}
        </MapView>


        <View style={{ flex: 1, justifyContent: 'center'  }}>
        <Listfood/>
        {/* <Text> {this.state.language} </Text> */}
        </View>
      </View>
    );
  }
}


 class Listfood extends Component {

  render() {
    const list = [
      {
        name: 'City Food',
        avatar_url: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
       
      },
      {
        name: 'Halal Eat ',
        avatar_url: 'https://cdn.pixabay.com/photo/2016/03/10/18/44/top-view-1248955__340.jpg',
      },
       {
        name: 'City Food',
        avatar_url: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
       
      },
      {
        name: 'City Food',
        avatar_url: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
       
      },
      {
        name: 'City Food',
        avatar_url: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
       
      },
    ]
    return (
      <View >
         {
    list.map((l, i) => (
      <ListItem 
        key={i}
        leftAvatar={{ source: { uri: l.avatar_url } }}
        title={l.name}
      />
    ))
  }
      </View>
    )
  }
}






export default MapScreen;
