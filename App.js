import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Components/Navigation/Navigation';
import language from './Components/Reducers/language.reducer';
import user from './Components/Reducers/user.reducer';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {DrawerNavigator} from 'react-navigation';



const store = createStore(combineReducers({language,user}));

export default function App() {

  

  return (

      <Provider store={store}>

        <Navigation/>

      </Provider>


  );
}
