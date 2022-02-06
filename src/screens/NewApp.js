import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const NewApp = () => {
    return (
        <View style={styles.parentStyle}>
            <Text>App</Text>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        // *height: 100
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box1: {
        height: 50,
        width: 50,
        backgroundColor: "blue"
    },
    box2: {
        height: 50,
        width: 50,
        backgroundColor: "green",
        marginTop: 50
        // *alignSelf: 'flex-end'
        // **top: 50
        // ***add parent view and give parent justifyContent: 'flex-end'
    },
    box3: {
        height: 50,
        width: 50,
        backgroundColor: "red"
    }
});

export default NewApp;