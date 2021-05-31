import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, FlatList} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import colors from '../Colors'


export default class CupModal extends React.Component {
    state = {
        name: this.props.list.name,
        color: this.props.list.color,
        farmer: this.props.list.farmer,
        country: this.props.list.country,
        cups: this.props.list.cups
    }

    renderCup = cups => {
      return (
        <View>
          <Text>{cups.title}</Text>
        </View>
      )
    }

  render() {
    return (
      <SafeAreaView style={styles.container}>
          <TouchableOpacity 
            style={{position:'absolute', top: 50, left:300, zIndex: 10}}
            onPress={this.props.closeModal}
            >
                <AntDesign name="close" size={24} color={colors.black} />
          </TouchableOpacity>
          <View style={[styles.section, styles.header, {borderBottomColor: this.state.color}]}>
            <View>
                <Text style={styles.title}> 
                  {this.state.name}
                </Text>
            </View>
          </View>
          
          <View style={[styles.section, {flex: 3}]}>
          <Text style={styles.title}> 
                  Roast Level
                </Text>
            {/* <FlatList 
              data={this.state.cups} 
              renderItem={({item}) => this.renderCup(item)}
              keyExtractor={item => item.title}
            /> */}
          </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        // textAlign: 'center',
        flex: 1
    },
    section: {
      flex: 1,
      alignSelf: 'stretch'
    },
    header: {
      justifyContent: 'flex-end',
      marginLeft: 64,
      borderBottomWidth: 3
    },
    title: {
     fontSize: 30,
     fontWeight: 'bold',
     color: colors.black
    }
})