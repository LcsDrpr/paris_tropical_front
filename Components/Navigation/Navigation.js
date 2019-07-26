import {createAppContainer, createStackNavigator,createDrawerNavigator} from 'react-navigation';

import LanguagesScreen from '../Screens/languagesScreen';
import IdentificationScreen from '../Screens/identificationScreen';
import SignUpScreen from '../Screens/signUpScreen';
import SignInScreen from '../Screens/signInScreen';
import HomeScreen from '../Screens/homeScreen';
import MapScreen from '../Screens/mapScreen';
import PlaceScreen from '../Screens/placeScreen';
import SidebarScreen from '../Screens/sidebarScreen';


const MyDrawerNavigator = createDrawerNavigator(
    {
        home: HomeScreen,
        map: MapScreen,
        place:PlaceScreen
    },
    {
        rawerType: 'back',
        drawerPosition: 'right',
        drawerWidth: 150,
        drawerBackgroundColor: '#ffff',
        contentComponent:SidebarScreen
    }

);

var StackNavigator = createStackNavigator({
    language : LanguagesScreen,
    identification : IdentificationScreen,
    signUp : SignUpScreen,
    signIn : SignInScreen,
    //home : HomeScreen,
    map : MapScreen,
    place : PlaceScreen,
    sidebar : SidebarScreen,
    myDrawerNavigator : MyDrawerNavigator
}, {headerMode: 'none'})



export default Navigation = createAppContainer(StackNavigator);
