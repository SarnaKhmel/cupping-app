import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import colors from '../Colors'

export default CupList = ({list}) => {
    
    return (
        <View style={[styles.listContainer, {backgroundColor: list.color}]}>
            <Text style={styles.description }>
                Semple name:
            </Text>
            <Text style={styles.listTitle} numberOfLines={1}>
                {list.name}
            </Text>
            <Text style={styles.description }>
                Country:
            </Text>
            <Text style={styles.listTitle} numberOfLines={1}>
                {list.country}
            </Text>
            <Text style={styles.description }>
                Farmer:
            </Text>
            <Text style={styles.listTitle} numberOfLines={1}>
                {list.farmer}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        marginTop:32,
        paddingVertical: 32, 
        paddingHorizontal: 16, 
        borderRadius: 6, 
        marginHorizontal: 12,
        alignItems: 'center',
        width: 200
    },
    description: {
        fontSize: 12,
        fontWeight: "500",
        color: colors.black,
        marginBottom: 4
    },
    listTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: colors.white,
        marginBottom: 18,
        alignItems: 'flex-start'
    },
    
})