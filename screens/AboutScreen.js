import React from 'react'
import {View, Text, StyleSheet, StatusBar, Image, TouchableOpacity} from 'react-native'
import colors from '../Colors'

import { AntDesign } from "@expo/vector-icons"
export default class AboutScreen extends React.Component {
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
                    fontSize: 24, 
                    textTransform: "uppercase",
                    textAlign: 'center'
                    }}>
                        About:
                    </Text>
                </View>
               <View style={{alignItems: "center", justifyContent: "center", marginTop:20}}>
                <View style={styles.aboutInfo}>
                        <Text
                        style={styles.aboutTitle}>
                            What?
                        </Text>
                        <Text
                        style={styles.aboutText}>
                          Simple in use application for cupping coffee at factory and retail coffee shops.
                        </Text>
                        <Text
                        style={styles.aboutTitle}>
                            Why?
                        </Text>
                        <Text
                        style={styles.aboutText}>
                            To simplify the work of people in the coffee industry.
                        </Text>
                        <Text
                        style={styles.aboutTitle}>
                            Who?
                        </Text>
                        <Text
                        style={styles.subAboutTitle}>
                            Idea:
                        </Text>
                        <Text
                        style={styles.aboutText}>
                            Oleksa Sarnarskyi and Andriy Zavada
                        </Text>
                        <Text
                        style={styles.subAboutTitle}>
                            Developed:
                        </Text>
                        <Text
                        style={styles.aboutText}>
                             Oleksa Sarnarskyi
                        </Text>
                        <View style={styles.socialBar}>
                            <TouchableOpacity style={styles.socialButtonOpacity}>
                                <AntDesign name="facebook-square" size={32} color={colors.black} style={{ marginRight: 10}}/>
                                <AntDesign name="linkedin-square" size={32} color={colors.black} style={{ marginRight: 10}}/>
                                <AntDesign name="instagram" size={32} color={colors.black} style={{ marginRight: 10}}/>
                                <AntDesign name="github" size={32} color={colors.black} style={{ marginRight: 10}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
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
    },
    aboutInfo:{
        // justifyContent: 'center',
        // alignItems: 'center',
        height: 500, 
        width: 350,
        backgroundColor: colors.lightGray,
        borderRadius: 8,
        padding: 8
    },
    aboutTitle:{
        marginTop: 18,
        textTransform: "uppercase",
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    aboutText:{
        marginTop: 8,
        textTransform: "uppercase",
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '600'
    },
    socialBar:{
        
        justifyContent: 'center',
        alignItems: 'center',
        // flexWrap: 'wrap',
    },
    socialButtonOpacity:{
      display: 'flex',
      flexDirection: 'row',
      marginTop: 100
    },
    subAboutTitle:{
        marginTop: 8,
        textTransform: "uppercase",
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500'
    }
})