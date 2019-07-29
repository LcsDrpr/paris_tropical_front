import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Picker, ScrollView, TouchableOpacity,  } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import SidebarScreen from './sidebarScreen';
import { ListItem, Header, Image } from 'react-native-elements';




class Menupicker extends Component {

  state = {
    language: null
  }

  render() {
    return (
        <Picker 
          selectedValue={this.state.language}
          style={{ height: 50, width: 100, marginTop: 20  }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="JavaScript" value="js" />



        </Picker>
 
     
    );
  }
}

class MapScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundImg:'',
      logo:'',
      burger:'',
      location: { latitude: 0, longitude: 0 },
    errorMessage: null,
    logPosition: [],
    displayHistorique: true,

    }
    
  }
  // state = {
    
  // };





  componentWillMount() {
    this._getLocationAsync();
    this.state.backgroundImg = require('../../assets/Backgroundflower.png');
    this.state.logo = require('../../assets/LogoParisTrop.png');
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
       <Header
          titleStyle ={{textAalign:'center'}} 
          barStyle="dark-content"
          leftComponent={
            
            <Image
            style={{height:35, width:50}}
            source={this.state.logo}
            />
          }
          containerStyle={{
            backgroundColor: 'white',
            justifyContent: 'space-around',
            height:80,
          }}
          rightComponent={
            <TouchableOpacity
              onPress={()=>{this.props.navigation.toggleDrawer()}}
            >
            <Image
            style={{height:60, width:60,marginRight:-10}}
            source={require('../../assets/Burger.png')}
            />
            </TouchableOpacity>
          }
        />
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


        <View style={{ flex: 1,   }}>
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

      <ScrollView contentContainerStyle={styles.contentContainer}> 

         {
    list.map((l, i) => (
      <ListItem   
        key={i}
        leftAvatar={{ source: { uri: l.avatar_url } }}
        title={l.name}
      />
    ))
  }
      </ScrollView> 
      </View>

    )
  }
}

// const styles = StyleSheet.create({
//   contentContainer: {
//     // paddingVertical: 20,
//     // borderWidth: 1,
//     borderColor: 'rgba(0,0,0, .4)',
//     shadowOffset: { height: 1, width: 1 }, // IOS
//     shadowOpacity: 1, // IOS
//     shadowRadius: 1, //IOS
//   }}
// )




export default MapScreen;
