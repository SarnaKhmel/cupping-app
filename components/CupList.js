import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native'
import colors from '../Colors'
import CupModal from './CupModal'

export default class CupList extends React.Component {
    state = {
        showCupsVisible:false
    }

    toggleListModal() {
        this.setState({showCupsVisible: !this.state.showCupsVisible})
    }

    render() {
        const list = this.props.list
        
            return (
                <View>
                    <Modal 
                        animationType="slide"
                        visible={this.state.showCupsVisible}
                        onRequestClose={() => this.toggleListModal()}
                    >
                        <CupModal list = {list} closeModal={() => this.toggleListModal()} />
                    </Modal>

                    <TouchableOpacity style={[styles.listContainer, {backgroundColor: list.color}]}>
                        <Text style={styles.description }>
                            Semple name:
                        </Text>
                        <Text style={styles.listTitle} numberOfLines={1}>
                            {list.name}
                        </Text>
                        <Text style={styles.description }>
                            Country:
                        </Text>
                        <Text style={styles.listTitle} numberOfLines={1}>
                            {list.country}
                        </Text>
                        <Text style={styles.description }>
                            Farmer:
                        </Text>
                        <Text style={styles.listTitle} numberOfLines={1}>
                            {list.farmer}
                        </Text>
                    </TouchableOpacity>
                </View>
                
            )
    }
}
    

const styles = StyleSheet.create({
    listContainer: {
        marginTop:32,
        paddingVertical: 32, 
        paddingHorizontal: 16, 
        borderRadius: 6, 
        marginHorizontal: 12,
        alignItems: 'center',
        width: 200
    },
    description: {
        fontSize: 12,
        fontWeight: "500",
        color: colors.black,
        marginBottom: 4
    },
    listTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: colors.white,
        marginBottom: 18,
        alignItems: 'flex-start'
    },
    
})