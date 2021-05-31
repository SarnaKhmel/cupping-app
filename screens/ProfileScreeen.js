import React from 'react'
import {View, Text, StyleSheet,TextInput, TouchableOpacity, Image, StatusBar} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

import * as firebase from 'firebase'

import userPermissions from '../utilites/UserPermissions'
import * as ImagePicker  from 'expo-image-picker'
import colors from '../Colors'


export default class ProfileScreen extends React.Component {
    state = {
        user: {
            
        }
    }

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
    screenTitle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    }
})