import React from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

import * as firebase from 'firebase'

export default class LoginScreen extends React.Component {
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
            marginTop: 32
          }}
          onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text
              style={{
              color: "#414951",
              fontSize: 14,
              marginTop: 24
            }}>
              New user?
              <Text
                style={{
                color: "#E9446A",
                fontWeight: "600"
              }}> Sign Up</Text>
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
    marginTop: 32,
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
  }
})