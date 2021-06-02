import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, Animated, TouchableOpacity, FlatList, ScrollView, TextInput} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import colors from '../Colors'
import { Slider } from 'react-native-elements';
// import Slider from "react-native-smooth-slider";
// import {RangeStepInput} from 'react-range-step-input';

export default class CupModal extends React.Component {
    state = {
        name: this.props.list.name,
        color: this.props.list.color,
        farmer: this.props.list.farmer,
        country: this.props.list.country,
        roastLevel: this.props.list.roastLevel,

        aroma: this.props.list.aroma,
        flavor: this.props.list.flavor,
        aftertaste: this.props.list.aftertaste,
        acidity: this.props.list.acidity,
        body: this.props.list.body,
        balance: this.props.list.balance,
        // uniformity: this.props.list.uniformity,
        // sweetness: this.props.list.sweetness,
        // cleanCup: this.props.list.cleanCup,
        overall: this.props.list.overall,
        score: this.props.list.score,
        completed: this.props.list.completed,
        // cupScore: null
    }
    
  render() {
    const list = this.props.list
    const startSlidervalue = 6
    const endSlidervalue = 10
    const stepSlidervalue = 0.25
    
    cupScore = this.state.aroma + this.state.flavor + this.state.acidity + this.state.aftertaste + this.state.body + this.state.balance + this.state.overall + 30

    
    
    return (
      <SafeAreaView style={styles.container}>
          <TouchableOpacity 
            style={{position:'absolute', top: 50, left:300, zIndex: 10}}
            onPress={this.props.closeModal}
            >
          <AntDesign name="close" size={24} color={colors.black} />
          </TouchableOpacity>
          <View style={styles.header}>
                <Text style={styles.title}> 
                  {this.state.name}
                </Text>
          </View>
          <ScrollView style={styles.scrollView}>
              <View style={styles.line}>
                <Text style={styles.description }> Country: </Text>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={country => this.setState({country})}
                    value={this.state.country}>
                </TextInput>
              </View>
              <View style={styles.line}>
                <Text style={styles.description }> Farmer: </Text>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={farmer => this.setState({farmer})}
                    value={this.state.farmer}>
                </TextInput>
              </View>

              <View style={styles.line}>
                <Text style={styles.description }> roastLevel: </Text>
                <Text style={styles.description }>
                  {this.state.roastLevel}
                </Text>
              </View>
                <View style={styles.slider}>
                  <Slider
                    value={this.state.roastLevel}
                    useNativeDriver={true}
                    minimumValue = {1}
                    maximumValue = {5}
                    step={1}
                    onValueChange={roastLevel => this.setState({ roastLevel })}
                  />
              </View>

              <View style={styles.line}>
                <Text style={styles.description }> Aroma: </Text>
                <Text style={styles.description }>
                  {this.state.aroma}
                </Text>
              </View>
                <View style={styles.slider}>
                  <Slider
                    value={this.state.aroma}
                    useNativeDriver={true}
                    minimumValue = {startSlidervalue}
                    maximumValue = {endSlidervalue}
                    step={stepSlidervalue}
                    onValueChange={aroma => this.setState({ aroma })}
                  />
              </View>

              <View style={styles.line}>
                <Text style={styles.description }> Flavor: </Text>
                <Text style={styles.description }>
                  {this.state.flavor}
                </Text>
              </View>
                <View style={styles.slider}>
                  <Slider
                    value={this.state.flavor}
                    useNativeDriver={true}
                    minimumValue = {startSlidervalue}
                    maximumValue = {endSlidervalue}
                    step={stepSlidervalue}
                    onValueChange={flavor => this.setState({ flavor })}
                  />
              </View>
              
              <View style={styles.line}>
                <Text style={styles.description }> Aftertaste: </Text>
                <Text style={styles.description }>
                  {this.state.aftertaste}
                </Text>
              </View>
                <View style={styles.slider}>
                  <Slider
                    value={this.state.aftertaste}
                    useNativeDriver={true}
                    minimumValue = {startSlidervalue}
                    maximumValue = {endSlidervalue}
                    step={stepSlidervalue}
                    onValueChange={aftertaste => this.setState({ aftertaste })}
                  />
              </View>

              <View style={styles.line}>
                <Text style={styles.description }> Acidity: </Text>
                <Text style={styles.description }>
                  {this.state.acidity}
                </Text>
              </View>
                <View style={styles.slider}>
                  <Slider
                    value={this.state.acidity}
                    useNativeDriver={true}
                    minimumValue = {startSlidervalue}
                    maximumValue = {endSlidervalue}
                    step={stepSlidervalue}
                    onValueChange={acidity => this.setState({ acidity })}
                  />
              </View>

              <View style={styles.line}>
                <Text style={styles.description }> body: </Text>
                <Text style={styles.description }>
                  {this.state.body}
                </Text>
              </View>
                <View style={styles.slider}>
                  <Slider
                    value={this.state.body}
                    useNativeDriver={true}
                    minimumValue = {startSlidervalue}
                    maximumValue = {endSlidervalue}
                    step={stepSlidervalue}
                    onValueChange={body => this.setState({ body })}
                  />
              </View>

              <View style={styles.line}>
                <Text style={styles.description }> balance: </Text>
                <Text style={styles.description }>
                  {this.state.balance}
                </Text>
              </View>
                <View style={styles.slider}>
                  <TouchableOpacity>
                    <Slider
                      value={this.state.balance}
                      useNativeDriver={true}
                      minimumValue = {startSlidervalue}
                      maximumValue = {endSlidervalue}
                      step={stepSlidervalue}
                      onValueChange={balance => this.setState({ balance })}
                    />
                  </TouchableOpacity>
                </View>

              <View style={styles.line}>
                <Text style={styles.description }> overall: </Text>
                <Text style={styles.description }>
                  {this.state.overall}
                </Text>
              </View>
                <View style={styles.slider}>
                  <Slider
                    value={this.state.overall}
                    useNativeDriver={true}
                    minimumValue = {startSlidervalue}
                    maximumValue = {endSlidervalue}
                    step={stepSlidervalue}
                    onValueChange={overall => this.setState({ overall })}
                  />
              </View>
              <View style={styles.line}>
                <Text style={styles.description }> Score: </Text>
                <Text style={styles.description }>
                  {cupScore}
                </Text>
              </View>
              
              <View style={styles.lineSave}>
                <View style={styles.save}>
                  <TouchableOpacity style={styles.addCuppingButton}>
                      <AntDesign name="save" size={32} color={colors.lightred}/>
                  </TouchableOpacity>
                  <Text style={styles.addCupping}>
                      save
                  </Text>
                </View>
              </View>
          </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flex: 1
    },
    section: {
        flex: 1,
        alignSelf: 'center'
    },
    header: {
        justifyContent: 'center',
        marginLeft: 0,
        borderBottomWidth: 3,
        borderBottomColor: colors.lightred,
        marginTop: 50, 

    },
        title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.black,
    },
    scrollView:{
      // marginHorizontal: 2,
      backgroundColor: colors.lightGray,
      marginTop: 24,
      borderRadius: 6,
      height: 500,
      width: 350
    },
    line: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 8,
    },
    description:{
      height: 40,
      fontSize: 18,
      marginTop: 8,
      textTransform: "uppercase",
      marginRight: 10,
      fontWeight: '600',
    },
    input: {
      borderBottomColor: colors.black,
      borderBottomWidth: StyleSheet.hairlineWidth,
      height: 40,
      fontSize: 18,
      color: colors.black,
    },
    slider:{
      flex: 1,
      marginLeft: 20,
      marginRight: 20,
      alignItems: "stretch",
      justifyContent: "center"
    },
    save:{
        borderRadius: 6,
        textTransform: "uppercase",
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        paddingLeft: 60,
        paddingRight: 60,
        paddingBottom:5,
        marginBottom: 30
    },
    lineSave:{
        justifyContent: 'center',
        alignItems: 'center'
    }
})