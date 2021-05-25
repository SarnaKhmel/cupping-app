import React from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

import * as firebase from 'firebase'

import userPermissions from '../utilites/UserPermissions'
import * as ImagePicker  from 'expo-image-picker'


export default class ProfileScreen extends React.Component {
    state = {
        user: {
            
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Profile Screen
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})