import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native'

export default function Counter()
{
    const [count, setCount] = useState(0); // Initializing state

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Count: {count}</Text>
            <Button title="increase" onPress={() => setCount(count + 1)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});


/*
Breakdown of the Code
useState(0) → Initializes a state variable called count with an initial value of 0.
const [count, setCount] → count stores the current value, while setCount updates it.
<Text>Count: {count}</Text> → Displays the current count.
<Button title="Increase" onPress={() => setCount(count + 1)} /> → Updates count when pressed.
🔹 How It Works
Initially, count = 0.
Every time the "Increase" button is clicked, setCount(count + 1) updates the state.
The component re-renders, showing the new count value
*/