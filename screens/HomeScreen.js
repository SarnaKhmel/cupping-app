import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
  Image,
  StatusBar
} from 'react-native'
import { AntDesign } from "@expo/vector-icons"
import * as firebase from 'firebase'

export default class HomeScreen extends React.Component {
  state = {
    email: "",
    displayName: ""
  }
  static navigationOptions = {
    header: () => false
  };

  componentDidMount() {
    const {email, displayName} = firebase
      .auth()
      .currentUser;

    this.setState({email, displayName});
  }

  signOutUser = () => {
    firebase
      .auth()
      .signOut();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content"></StatusBar>
        <Image
          source={require("../assets/coffeeBeansAppBackgroundImage4.png")}
          style={styles.imageTop}></Image>
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
          <View style={styles.idea}>
            <Text style={styles.aboutText}>
              Simple in use application for cupping coffee at factory and retail coffee shops.
            </Text>
          </View>
        </View>
        {/* <Text style={{ marginTop: -70}}> Hi {this.state.email}!</Text> */}
        
        <TouchableOpacity
          style={{
          marginTop: 0
        }}
          onPress={this.signOutUser}>
          <AntDesign name="logout" size={32} color={colors.lightred}/>
          <Text style={{
            color: colors.lightred
          }}>Logout</Text>
        </TouchableOpacity>
        <Image
          source={require("../assets/coffeeBeansAppBackgroundImage4.png")}
          style={styles.imageBottom}></Image>
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
  imageTop: {
    marginTop: 0,
    marginLeft: 240,
    transform: [
      {
        rotate: '90deg'
      }
    ]
  },
  divider: {
    //backgroundColor: "#75C2E5",
    marginTop: 50,
    // height: 1,
    flex: 1,
    alignSelf: 'center'
  },
  title: {
    fontSize: 38,
    fontWeight: "900",
    color: "#002333",
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingHorizontal: 20
    marginTop: 0,
    marginLeft:50
  },
  idea:{
    marginTop: 0,
    marginRight: 20,
    marginLeft: 20
  },
  imageBottom:{
    marginTop: 0,
    marginRight: 240,
    transform: [
      {
        rotate: '260deg'
      }
    ]
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
  }
})