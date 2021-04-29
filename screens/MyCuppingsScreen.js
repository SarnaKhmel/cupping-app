import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class MyCuppingsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    My Cuppings Screen
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