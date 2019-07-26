import React, {
  Component
} from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity
} from 'react-native'
// import { Header, Left, Button, Icon, Right, Body, Title, Drawer } from 'native-base'
// import SidebarScreen from './sidebarScreen'
import {
  Input,
  Image,
  Header
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  connect
} from 'react-redux';


export default class PlaceScreen extends Component {

  componentWillMount() {
    this.state.backgroundImg = require('../../assets/Backgroundflower.png');
    this.state.logo = require('../../assets/LogoParisTrop.png');
  }

  constructor(props) {
    super(props)
    this.state = {}
  }
  closeDrawer() {
    this.drawer._root.close()
  }
  openDrawer() {
    this.drawer._root.open()
  }
  render() {



      var welcomeText="";
      // var passwordText;


      if (this.props.language == 'en') {
        welcomeText = 'Welcome to Paris';


      } else if (this.props.language == 'pt') {
        welcomeText = 'Bem-vindo em Paris';

      }


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
            }}
            rightComponent={
              <TouchableOpacity
                onPress={()=>{this.props.navigation.toggleDrawer()}}
              >
              <Image
              style={{height:35, width:35}}
              source={require('../../assets/Burger.png')}
              />
              </TouchableOpacity>
            }
          />
          <View>
<Text>

{welcomeText}

</Text>


          </View>
</View>

      )
    }
  }
