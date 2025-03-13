import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function CounterDisplay({ count }) {
    return (
        <View>
            <Text style={styles.text}>Count: {count}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});
