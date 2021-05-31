import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  LayoutAnimation
} from 'react-native'

import * as firebase from 'firebase'
import { AntDesign } from "@expo/vector-icons"
import colors from '../Colors'

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: () => false
  };

  state = {
    email: "",
    password: "",
    errorMessage: null
  }
  handleLogin = () => {
    const {email, password} = this.state

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => this.setState({errorMessage: error.message}));
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content"></StatusBar>
        <Image
          source={require("../assets/coffeeBeansAppBackgroundImage4.png")}
          style={{
          marginTop: -60,
          marginLeft: -35
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
        <Text style={styles.greeting}>
          {`Hello again. \n Welcome back.`}</Text>

        <View style={styles.errorMessage}>
          {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Email Address</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={email => this.setState({email})}
              value={this.state.email}></TextInput>
          </View>

          <View style={{
            marginTop: 32
          }}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={password => this.setState({password})}
              value={this.state.password}></TextInput>

          </View>

          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 24
          }}
            onPress={() => this.props.navigation.navigate("Register")}>
            <AntDesign name="adduser" size={32} color={colors.lightred}/>
            <Text
                            style={{
                            color: "#D32705",
                            fontWeight: "600"
                          }}>
                            Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: 'center', alignItems: 'center' backgroundColor: '#DC8011'
  },
  greeting: {
    marginTop: 0,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center"
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center"
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30
  },
  inputTitle: {
    color: "#8A8F9E",
    fontSize: 14,
    fontWeight: "500",
    textTransform: "uppercase"
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 18,
    color: "#161F3D"
  },
  button: {
    marginTop: 32,
    marginHorizontal: 30,
    backgroundColor: "#8A8F9E",
    borderRadius: 10,
    height: 52,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFF"
  },
  divider: {
    //backgroundColor: "#75C2E5",
    marginTop: -40,
    height: 1,
    flex: 1,
    alignSelf: 'center'
  },
  title: {
    fontSize: 38,
    fontWeight: "900",
    color: "#002333",
    // paddingHorizontal: 20
    marginTop: 70
  }
})