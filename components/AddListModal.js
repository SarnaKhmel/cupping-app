import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableOpacity,
    TextInput
  } from 'react-native'

import { AntDesign } from "@expo/vector-icons"
import colors from '../Colors'
import tempData from '../tempData'

export default class AddListModal extends React.Component {
    backgroundColor = ["#D92222", "#FFA213", "#14D701", "#2360F8", "#7428F7", "#CA236C"]

    state = {
        name: "",
        country: "",
        farmer: "",
        color: this.backgroundColor[0]
    }

    createCupping = () => {
        const { name, country, farmer, color } = this.state

        tempData.push({
            name,
            color,
            farmer,
            country
        })

        this.setState({name: ""});
        this.setState({country: ""});
        this.setState({farmer: ""});
        this.props.closeModal();

    }

    renderColor() {
        return this.backgroundColor.map(color =>{
            return (
                <TouchableOpacity 
                    key={color} 
                    style={[styles.colorSelect, {backgroundColor: color}]}
                    onPress={()=>this.setState({color})}    
                >
                </TouchableOpacity>
            )
        })
    }

    render() {
        return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <TouchableOpacity style={{position: 'absolute', top:50, left: 300}} onPress={this.props.closeModal}>
                    <AntDesign name="close" size={24} />
                </TouchableOpacity>
                <View style={{alignItems: 'stretch', marginHorizontal: 32 }}>
                    <Text style={styles.title}> Create new cupping  </Text>
                    
                    <TextInput 
                        style={styles.input} 
                        placeholder ="Sample"
                        onChangeText={text =>this.setState({name: text})}
                        />
                    <TextInput 
                        style={styles.input} 
                        placeholder ="Country" 
                        onChangeText={text =>this.setState({country: text})}/>
                    <TextInput 
                        style={styles.input} 
                        placeholder ="Farmer" 
                        onChangeText={text =>this.setState({farmer: text})}
                    />
                    <View style={{flexDirection:"row", justifyContent:"space-between", marginTop: 12}}>{this.renderColor()}</View>

                    <TouchableOpacity 
                        style={[styles.create, { backgroundColor: this.state.color }]}
                        onPress={this.createCupping}
                    >
                            <Text style={{color: colors.white, fontSize: 18, fontWeight:"600"}}>Create!</Text>
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
      justifyContent:'center',
      alignItems: 'center'
    },
    title: {
        fontSize: 28,
        fontWeight: "900",
        color: colors.darkred,
        alignSelf: 'center',
        marginBottom: 16, 
        // marginTop: 100
    },
    input: {
        borderRadius: 6,
        borderColor:colors.black,
        borderWidth: StyleSheet.hairlineWidth,
        height: 50,
        paddingHorizontal: 16, 
        fontSize: 18, 
        marginBottom:8
    },
    create: {
        borderColor:colors.black,
        borderRadius: 6,
        marginTop:24,
        height:50,
        alignItems:'center',
        justifyContent: 'center'
    },
    colorSelect: {
        width: 30,
        height:30,
        borderRadius: 6,

    }
})