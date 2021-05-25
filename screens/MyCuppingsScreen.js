import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import colors from '../Colors'

export default class MyCuppingsScreen extends React.Component {
    render() {
        return (
           <View style={styles.container}>
               <Text style={styles.devider}>
                   lift of capping
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
    },
    devider: {
        backgroundColor: colors.lightblue,
        height: 1,
        flex: 1,
        alignSelf: 'center'
    }
})