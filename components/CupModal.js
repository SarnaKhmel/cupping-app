import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, Animated, TouchableOpacity, FlatList, ScrollView, TextInput} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import colors from '../Colors'
// import { Slider } from 'react-native-elements';
import Slider from "react-native-smooth-slider";
// import {RangeStepInput} from 'react-range-step-input';

export default class CupModal extends React.Component {
    state = {
        name: this.props.list.name,
        color: this.props.list.color,
        farmer: this.props.list.farmer,
        country: this.props.list.country,
        roastLevel: this.props.list.roastLevel,
        aroma: this.props.list.aroma,
        flavors: this.props.list.flavors,
        aftertaste: this.props.list.aftertaste,
        acidity: this.props.list.acidity,
        body: this.props.list.body,
        balance: this.props.list.balance,
        uniformity: this.props.list.uniformity,
        sweetness: this.props.list.sweetness,
        cleanCup: this.props.list.cleanCup,
        overall: this.props.list.overall,
        score: this.props.list.score,
        completed: this.props.list.completed
    }

    // renderCup = cup => {
    //   return (
    //     <View>
    //       <Text>{cup.roastLevel}</Text>
    //     </View>
    //   )
    // }
    //   onChange(e) {
    //     const newVal = forceNumber(e.target.roastLevel);
    //     this.setState({value: newVal});
    // }

  render() {
    const list = this.props.list
    const minRoastLevel = 1
    const maxRoastLevel = 5
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
                <Text style={styles.description }> Country: </Text>
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
    }
})