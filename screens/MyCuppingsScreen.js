import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, StatusBar, Image, ScrollView, FlatList, SafeAreaView} from 'react-native'
import colors from '../Colors'
import tempData from '../tempData'
export default class MyCuppingsScreen extends React.Component {
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
                
                <View style={styles.screenTitle}>
                    <Text
                    style={{
                    fontWeight: "600",
                    color: colors.black,
                    fontSize: 24
                    }}>
                    Created cuppings:
                    </Text>
                </View>

            <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.content}>
                <View style={styles.itemsBox}>
                    
                        {/* <FlatList 
                            data={tempData} 
                            keyExtractor={item => item.name} 
                            horizontal={true} 
                            showsHorizontalScrollIndicator={false} 
                            renderItem={({item}) => this.renderList(item)}
                        /> */}
                        <Text style={styles.items}>
                            Item
                        </Text>        
                </View>
            </ScrollView>
            </SafeAreaView>
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
    },
    content: {
        backgroundColor: colors.lightGray,
        marginTop: 30,
        borderRadius: 6,
        marginRight: 8,
        marginLeft: 8,
        marginBottom:32

    },
    itemBox: {
        marginTop:8,
        marginBottom: 8,
        borderRadius: 16
    },
    items:{
        marginTop:8,
        backgroundColor: colors.gray,
        fontSize: 18,
        padding:8,
        width: 300, 
        marginTop: 16,
        marginRight: 16,
        marginLeft: 16,
    },
    safeArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
       
    }
})