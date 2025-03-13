import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function MultiState() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("Hello!");

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Count: {count}</Text>
            <Text style={styles.text}>Message: {message}</Text>
            <Button title="Increase Count" onPress={() => setCount(count + 1)} />
            <Button title="Change Message" onPress={() => setMessage("Updated!")} />
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
