import React, { useState } from 'react';

export default function App() {
  
    return (
      <View style={styles.container}>
        <Text style={styles.counterText}>{count}</Text>
          style={styles.button} 
          onPress={() => setCount(count + 2)}
          <Text style={styles.buttonText}>Increment by 2</Text>
      </View>
    );
  }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
 

  });