import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import CounterDisplay from './CounterDisplay';

export default function CounterParent() {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <CounterDisplay count={count} />
            <Button title="Increase" onPress={() => setCount(count + 1)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
});


/*
🔹 How It Works
CounterParent manages the state (count).
CounterDisplay receives count as a prop and displays it.
Clicking the button in CounterParent updates the state, causing both components to re-render.
*/