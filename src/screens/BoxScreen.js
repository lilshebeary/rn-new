import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
        <View style={styles.viewStyle1} />
        <View style={styles.viewStyle2} />
        <View style={styles.viewStyle3} />
     </View>
  );
}

const styles = StyleSheet.create({
    //parent - alignItems, justifyContent, flexDirection
    parentStyle: {
        borderWidth: 3, 
        borderColor: 'black', 
        height: 200,
       flexDirection: 'row',
       justifyContent: 'space-between'
    },
    //child - flex, alignSelf(overrides parent alignItems) position: absolute ignores siblings
    viewStyle1: {
        height: 50,
        width: 50, 
        backgroundColor: 'red'
    },
    viewStyle2: {
        height: 50,
        width: 50, 
        backgroundColor: 'green', 
        marginTop: 50
    },
    viewStyle3: {
        height: 50,
        width: 50, 
        backgroundColor: 'purple'
    }
});

export default BoxScreen;
