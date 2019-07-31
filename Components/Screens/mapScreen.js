import React, { Component } from "react";
import { StyleSheet, Text, View, Button,  ScrollView, TouchableOpacity,  } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import SidebarScreen from './sidebarScreen';
import { ListItem, Header, Image } from 'react-native-elements';
import { Container, Content, Icon, Picker, Form, TextStyle } from "native-base";




class PickerPlaceholderExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ''
    };
  }
  onValueChange(value) {
    console.log('console log value', value);
    this.setState({
      selected: value
    });
    console.log('CONSOLE LOG STATE',value);
        fetch('http://10.2.3.138:3000/finder?wannado='+value)
          .then(function(response) {
            return response.json();
          })
          .then((data)=>{
            console.log(data);
        })
      }
      render(){
        return (
          <Content>
            <Form>
              <Picker
                mode="dropdown"
                //iosIcon={<Icon name="arrow-down" style={{fontSize: 10}} />}
                placeholder="I want to"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                textStyle={{fontSize: 12, paddingRight: 0}}
                style={{ width: "100%" }}
                selectedValue={this.state.selected}
                onValueChange={ this.onValueChange.bind(this) }

              >
                <Picker.Item label="Eat breakfast" value="breakfast" />
                <Picker.Item label="Eat lunch" value="lunch" />
                {// <Picker.Item label="Wanna Drink" value="Wanna Drink" />
                // <Picker.Item label="Wanna Go Out" value="Wanna Go Out" />
                // <Picker.Item label="Net Banking" value="key4" />
              }
              </Picker>
            </Form>
          </Content>
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
      <View style={{ flex: 2 }}>
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

            borderRadius: 4,
            borderWidth: 0,
            flexDirection: 'row',
            justifyContent: 'center',
            borderColor: "#d6d7da"

          }}
        >

          <PickerPlaceholderExample/>
          <PickerPlaceholderExample/>
          <PickerPlaceholderExample/>

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


        <View style={{ flex: 2,   }}>
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

const styles = StyleSheet.create({
  contentContainer: {
    // paddingVertical: 20,
    // borderWidth: 1,
    borderColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
  }}
)




export default MapScreen;
