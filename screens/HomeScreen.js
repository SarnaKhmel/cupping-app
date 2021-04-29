import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
  Image
} from 'react-native'

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
        <Image
          source={require("../assets/coffeeBeansAppBackgroundImage4.png")}
          style={styles.image}></Image>
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
        {/* <Text style={{ marginTop: -70}}> Hi {this.state.email}!</Text> */}

        <TouchableOpacity
          style={{
          marginTop: 0
        }}
          onPress={this.signOutUser}>
          <Text style={{
            color: "#DC3311"
          }}>Logout</Text>
        </TouchableOpacity>
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
  image: {
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
    marginTop: 0,
    height: 1,
    flex: 1,
    alignSelf: 'center'
  },
  title: {
    fontSize: 38,
    fontWeight: "900",
    color: "#002333",
    // paddingHorizontal: 20
    marginTop: 0
  }
})