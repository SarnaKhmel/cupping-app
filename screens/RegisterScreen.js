import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  StatusBar
} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

import * as firebase from 'firebase'

import userPermissions from '../utilites/UserPermissions'
import * as ImagePicker  from 'expo-image-picker'

export default class RegisterScreen extends React.Component {
  state = {
    user:{
      name: "",
      email: "",
      password: "",
      avatar: null
    },
    errorMessage: null
  }

  static navigationOptions = {
    header: () => false
  };

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(userCredentials => {
        return userCredentials
          .user
          .updateProfile({displayName: this.state.name})
      })
      .catch(error => this.setState({errorMessage: error.message}));
  };

  handleAvatarPick = async() =>{
    userPermissions.getCameraPermissions()

    let result =  await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3]
    }) 

    if(!result.cancelled){
      this.setState({user:{...this.state.user, avatar: result.uri}})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content"></StatusBar>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
              <Image
                source={require("../assets/coffeeBeansAppBackgroundImage4.png")}
                style={{
                marginTop: -60,
                marginLeft: -35
              }}></Image>

              <TouchableOpacity
                style={styles.back}
                onPress={() => this.props.navigation.goBack()}>

                <Ionicons name="arrow-back-circle-sharp" size={42} color="#8A8F9E"></Ionicons>

              </TouchableOpacity>

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

              <View
                style={{
                position: "absolute",
                top: 180,
                alignItems: "center",
                width: "100%"
              }}>
                <Text style={styles.greeting}>{`Hello! \n Sign up to get started.`}</Text>
                <TouchableOpacity style={styles.avatarPlaceholder} onPress={this.handleAvatarPick}>
                  <Image source={{uri: this.state.user.avatar}} style={styles.avatar} />
                  <Ionicons
                    name="add"
                    size={52}
                    color="#FFF"
                    style={{
                    marginTop: 0,
                    marginRight: 0
                  }}></Ionicons>
                </TouchableOpacity>

              </View>

              <View style={styles.errorMessage}>
                {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
              </View>

              <View style={styles.form}>
                <View>
                  <Text style={styles.inputTitle}>User name</Text>
                  <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={name => this.setState({name})}
                    value={this.state.name}></TextInput>
                </View>

                <View style={{
                  marginTop: 32
                }}>
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

                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                  alignSelf: "center",
                  marginTop: 32
                }}
                  onPress={() => this.props.navigation.navigate("Login")}>
                  <Text
                    style={{
                    color: "#414951",
                    fontSize: 14,
                    marginTop: 24
                  }}>

                    <Text
                      style={{
                      color: "#D32705",
                      fontWeight: "600"
                    }}>
                      Login</Text>
                  </Text>
                </TouchableOpacity>
              </View>
        </KeyboardAvoidingView>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    // justifyContent: "center",
    // alignItems: "center"
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
    marginBottom: 40,
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
    marginTop: 24,
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
    marginTop: -60,
    height: 1,
    flex: 1,
    alignSelf: 'center'
  },
  title: {
    fontSize: 38,
    fontWeight: "900",
    color: "#002333",
    paddingHorizontal: 20,
    marginTop: 0
  },
  greeting: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center"
  },
  back: {
    position: "absolute",
    top: 32,
    left: 16,
    width: 42,
    height: 42,
    // borderRadius: 16, backgroundColor: "rgba(21, 22, 48, 0.3)", alignItems:
    // "center", justifyContent: "center"
  },
  avatarPlaceholder:{
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#8A8F9E",
    marginTop: 24,
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    position:"absolute",
    width: 80,
    height: 80,
    borderRadius: 50
  }
})