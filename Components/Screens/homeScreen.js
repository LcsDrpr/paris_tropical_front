import React, { Component } from 'react'
import { Text,TouchableOpacity,View, ImageBackground } from 'react-native';
import { Input, Header, Button,Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import SvgUri from 'react-native-svg-uri';

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundImg:'',
      logo:'',
      burger:'',
    }
  }

  componentWillMount(){
    this.state.backgroundImg = require('../../assets/Backgroundflower.png');
    this.state.logo = require('../../assets/LogoParisTrop.png');

  }

  render() {

    // api Taux de change 

   

    console.log("CONSOLE LOG METEO !! : ",this.props.meteo);

    var meteoIcon='http://openweathermap.org/img/wn/'+this.props.meteo.icon+'.png';
    var meteoTemp=this.props.meteo.temp+' °C';
    var welcomeText;
    var userName = this.props.user.firstname;
    var chosenCity = this.props.user.city;
    var localHour;
    var awayHour;
    var exchangeRate;

    console.log('PRENOM',userName);

    if(this.props.language == 'en'){
      welcomeText = 'Welcome to Paris'+userName+' !';
      localHour = 'Local Hour';
      awayHour = chosenCity+' Time';
      exchangeRate = 'Exchange Rate';
    }else if(this.props.language == 'pt'){
      welcomeText = 'Bem-vindo a Paris '+userName+' !';
      localHour = 'Hora Local';
      awayHour = 'Hora Do '+chosenCity;
      exchangeRate = 'Taxa De Cambio';
    }

    console.log(this.props.user);
    return (
      <View>
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
          centerComponent={
            <View style={{flexDirection:'row', alignItemps:'center' }}>
              <Image
                style={{height:35, width:50}}
                source={{uri:meteoIcon}}
              />
              <Text style={{marginTop:10}}>
                {meteoTemp}
                {/* le Taux de Change */}
               
              </Text>
           

            </View>

          }

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
        <View style={{height:'90%', width:'100%',alignItems:'center', justifyContent: 'center'}}>
          <ImageBackground style={{flex:1,width:'100%', alignItems: 'center', justifyContent: 'center'}} source={this.state.backgroundImg} >
            <View>
              <Text>{welcomeText}</Text>
            </View>
            <View>

              <Text>{localHour}</Text>
              <Text>{awayHour}</Text>
              <Text>{exchangeRate}</Text>
              <Text>{this.props.dataChange.rates.USD} USD/EUR</Text>


            </View>


          </ImageBackground>




        </View>
      </View>

    )
  }
}

function mapStateToProps(state) {
  return { language: state.language, user: state.user, meteo : state.meteo , dataChange: state.change }
}


export default connect(
  mapStateToProps,
  null
)(HomeScreen);
