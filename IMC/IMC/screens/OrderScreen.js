import React from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const OrderScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Top Left Button */}
      <TouchableOpacity
        style={styles.backbutton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.backButtonText}>← Continue Shopping</Text>
      </TouchableOpacity>

      {/* Center Content */}
      <Ionicons name="checkmark-circle" size={100} color="green" />
      <Text style={styles.title}>Order Confirmed!</Text>
      <Text style={styles.message}>
        Thank you for your purchase. Your order has been placed successfully.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 20,
    marginBottom: 15,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    color: '#444',
  },
  backbutton: {
    position: 'absolute',
    top: 40,
    left: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  backButtonText: {
    fontSize: 15,
    color: '#2067a8',
  },
});

export default OrderScreen;
