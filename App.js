import React from 'react'

import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Ionicons} from '@expo/vector-icons'
import {Image} from 'react-native'

import LoadingScreen from './screens/LoadingScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

import AboutScreen from './screens/AboutScreen'
import CuppingScreen from './screens/CuppingScreen'
import MyCuppingsScreen from './screens/MyCuppingsScreen'
import ProfileScreen from './screens/ProfileScreeen'
import RecipesScreen from './screens/RecipesScreen'

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

// const AppStack = createStackNavigator({Home: HomeScreen})

const AppTabNavigstor = createBottomTabNavigator(
  {
    Home:{
      screen: HomeScreen,
      navigationOptions:{
        tabBarIcon: ({tintColor}) => <Ionicons name="home" size={24} color={tintColor}/>
      }
    },
    Recipes:{
      screen: RecipesScreen,
      navigationOptions:{
        tabBarIcon: ({tintColor}) => <Ionicons name="book" size={24} color={tintColor}/>
      }
    },
    Cupping:{
      screen: CuppingScreen,
      navigationOptions:{
        tabBarIcon: ({tintColor}) => <Ionicons name="add-circle" size={24} color={tintColor}/>
      }
    },
    MyCuppings:{
      screen: MyCuppingsScreen,
      navigationOptions:{
        tabBarIcon: ({tintColor}) => <Ionicons name="list" size={24} color={tintColor}/>
      }
    },
    Profile:{
      screen: ProfileScreen,
      navigationOptions:{
        tabBarIcon: ({tintColor}) => <Ionicons name="person" size={24} color={tintColor}/>
      }
    },
    About:{
      screen: AboutScreen,
      navigationOptions:{
        tabBarIcon: ({tintColor}) => <Ionicons name="information-circle-outline" size={24} color={tintColor}/>
      }
    }
  },
  {
    tabBarOptions:{
      activeTintColor: "#DC3311",
      inactiveTintColor: "#002333"
    }
  }
)


const AuthStack = createStackNavigator({Login: LoginScreen, Register: RegisterScreen})

export default createAppContainer(createSwitchNavigator({
  Loading: LoadingScreen,
  App: AppTabNavigstor,
  Auth: AuthStack
}, {initialRouteName: "Loading"}))