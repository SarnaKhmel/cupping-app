import React from 'react'
import {View, Text, StyleSheet, ActivityIndicator, Image} from 'react-native'
import * as firebase from 'firebase'

export default class LoginScreen extends React.Component {
  componentDidMount() {
    firebase
      .auth()
      .onAuthStateChanged(user => {
        this
          .props
          .navigation
          .navigate(user
            ? "App"
            : "Auth");
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading...
        </Text>
        <Image source={require("../assets/coffeeBeansLoading.png")}></Image>
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
  }
})