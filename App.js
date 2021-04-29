import React from 'react'

import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Iconst} from '@expo/vector-icons'

import LoadingScreen from './screens/LoadingScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

import firebase from 'firebase'

var firebaseConfig2 = {
  apiKey: "AIzaSyByfYO_CuSbmFPlgpQoz-2qW-1bI3wFxmc",
  authDomain: "cupping-app2.firebaseapp.com",
  projectId: "cupping-app2",
  storageBucket: "cupping-app2.appspot.com",
  messagingSenderId: "717247221739",
  appId: "1:717247221739:web:82d2bbf6b069e5bea753ae"
};

// Initialize Firebase firebase.initializeApp(firebaseConfig2);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig2);
}

const AppStack = createStackNavigator({Home: HomeScreen})

const AuthStack = createStackNavigator({Login: LoginScreen, Register: RegisterScreen})

export default createAppContainer(createSwitchNavigator({
  Loading: LoadingScreen,
  App: AppStack,
  Auth: AuthStack
}, {initialRouteName: "Loading"}))