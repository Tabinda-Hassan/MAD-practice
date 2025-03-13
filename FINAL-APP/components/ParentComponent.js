import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import Name from './Name.js'

export default function ParentComponent()
{
    return (
        <View style={StyleSheet.container}>
        <Text style={StyleSheet.boldText}>Hello! </Text>
        <Name />  
        </View>
    )
}

/*
In React Native, every functional component you create can be used like an HTML tag.
Since Name.js exports a function, you can use it in JSX as <Name />.
*/
// Name();  // This is a function call, NOT how we use React components.



// Define styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boldText: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});