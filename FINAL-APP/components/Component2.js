// Import necessary components from React Native
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/*
    Defining the main App component.
    This component returns a View containing a Text element styled with StyleSheet.
*/
export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.boldText}>Hello World!</Text>
        </View>
    );
}

/*
    Creating a StyleSheet object to define styles for the components.
    - 'container' style centers the content.
    - 'boldText' style makes the text bold and increases the font size.
*/
const styles = StyleSheet.create({
    container: {
        flex: 1,                // Makes the View take the full screen
        justifyContent: 'center', // Centers content vertically
        alignItems: 'center',     // Centers content horizontally
        backgroundColor: '#f8f9fa' // Light background color
    },
    boldText: {
        fontSize: 20,   // Increases text size
        fontWeight: 'bold', // Makes the text bold
        color: '#333'   // Dark gray text color
    }
});
