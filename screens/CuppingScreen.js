import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class CuppingScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Cupping Screen
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