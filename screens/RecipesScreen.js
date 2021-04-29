import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class RecipesScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Recipes Screen
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