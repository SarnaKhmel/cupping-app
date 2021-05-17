import React from 'react'
import {View, Text, StyleSheet, ActivityIndicator, Image} from 'react-native'
import * as firebase from 'firebase'



export default class LoginScreen extends React.Component {

  
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? "App" : "Auth");
      });
  }
  
  render() {
    return (
      <View style={styles.container}>
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
        <Image source={require("../assets/coffeeBeansLoading.png")}style={styles.img}></Image>
        <Text>Loading...</Text>
        </View>
        
        {/* <ActivityIndicator>

        </ActivityIndicator> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  divider: {
    //backgroundColor: "#75C2E5",
    marginTop: 60,
    height: 1,
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 38,
    fontWeight: "900",
    color: "#002333",
    // paddingHorizontal: 20
    marginTop: 0
  },
  img:{
    marginTop:50
  }
})

