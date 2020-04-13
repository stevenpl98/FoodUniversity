import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AppContainer from './src/AppNavigation';
import HomeScreen from './src/screens/HomeScreen';
import CategoriesScreen from './src/screens/Categories/CategoriesScreen';
import {
  DrawerNavigator,
  StackNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import SplashScreen from './src/screens/Splash/SplashScreen';


import { Provider } from "react-native-paper";
import App from "./src/screens";
import { theme } from "./src/core/theme";

class FoodApp extends React.Component 
{
  /*render() 
  {
    return <AppContainer />;
  }*/
  render() 
  {
    return <Provider theme={theme}><AppContainer /></Provider>;
  }
}

export default FoodApp;
