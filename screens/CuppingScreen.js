import React from 'react'
import { AntDesign } from "@expo/vector-icons"
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    StatusBar
  } from 'react-native'
  import {Ionicons} from '@expo/vector-icons'
  
  import * as firebase from 'firebase'
  
  import userPermissions from '../utilites/UserPermissions'
  import * as ImagePicker  from 'expo-image-picker'

export default class CuppingScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <StatusBar barStyle="dark-content"></StatusBar>
            <Image
              source={require("../assets/coffeeBeansAppBackgroundImage4.png")}
              style={{
              marginTop: -50,
              marginLeft: -40
            }}></Image>
            <View style={styles.divider}>
              <Text style={styles.title}>
                Cupping
                <Text
                  style={{
                  fontWeight: "600",
                  color: "#D32705"
                }}>
                  Lists
                </Text>
              </Text>
            </View>
            <View style={styles.add}>
             <TouchableOpacity style={styles.addCuppingButton}>
                <AntDesign name="plus" size={18} color={colors.lightred}/>
             </TouchableOpacity>
             <Text style={styles.addCupping}>
                 addCupping
             </Text>
             </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    divider:{
        marginTop: -150,
        marginLeft: 250
    },
    title: {
        fontSize: 18
    },
    add:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 150
    },
    addCuppingButton:{
        borderWidth: 2,
        borderColor: colors.darkred,
        borderRadius: 5,
        padding: 18,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addCupping: {
        color: colors.darkred,
        fontWeight: "500",
        fontSize: 12,
        marginTop: 8
    }
})