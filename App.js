import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Components/Navigation/Navigation';
import language from './Components/Reducers/language.reducer';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {DrawerNavigator} from 'react-navigation';



const store = createStore(combineReducers({language}));

export default function App() {

  

  return (

      <Provider store={store}>

        <Navigation/>

      </Provider>


  );
}
