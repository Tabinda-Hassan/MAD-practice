import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const AccountInfoScreen = () => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phoneno: '',
    address: '',
    streetno: '',
    province: 'Punjab',
    city: '',
    paymentmethod: 'Cash on Delivery',
  });

  const navigation = useNavigation();

  // Example of mock user autofill (replace with actual Firebase Auth logic)
  useEffect(() => {
    const mockUser = {
      firstname: 'Ali',
      lastname: 'Khan',
      email: 'ali@example.com',
    };
    setForm(prev => ({ ...prev, ...mockUser }));
  }, []);

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

const handleSubmit = async () => {
  try {
    await axios.post('https://islamabadmotorcompany-1d5f0-default-rtdb.firebaseio.com/accountinfo.json', form);
    navigation.navigate('OrderScreen'); 
  } catch (error) {
    console.error('Submission error:', error.message);
  }
};


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Account Information</Text>
      
      {[
        { key: 'firstname', placeholder: 'First Name' },
        { key: 'lastname', placeholder: 'Last Name' },
        { key: 'email', placeholder: 'Email', keyboardType: 'email-address' },
        { key: 'phoneno', placeholder: 'Phone Number', keyboardType: 'phone-pad' },
        { key: 'address', placeholder: 'Address' },
        { key: 'streetno', placeholder: 'Street No.' },
        { key: 'city', placeholder: 'City' }
      ].map(({ key, placeholder, keyboardType }) => (
        <TextInput
          key={key}
          style={styles.input}
          placeholder={placeholder}
          value={form[key]}
          onChangeText={text => handleChange(key, text)}
          keyboardType={keyboardType || 'default'}
        />
      ))}

      <Picker
        selectedValue={form.province}
        onValueChange={value => handleChange('province', value)}
        style={styles.picker}
      >
        {['Punjab', 'Sindh', 'Khyber Pakhtunkhwa', 'Balochistan', 'Islamabad'].map(province => (
          <Picker.Item key={province} label={province} value={province} />
        ))}
      </Picker>

      <Picker
        selectedValue={form.paymentmethod}
        onValueChange={value => handleChange('paymentmethod', value)}
        style={styles.picker}
      >
        {['Cash on Delivery', 'Credit Card', 'JazzCash', 'Easypaisa'].map(method => (
          <Picker.Item key={method} label={method} value={method} />
        ))}
      </Picker>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>PROCEED TO PAYMENT</Text>
      </TouchableOpacity>
       <Text style={styles.footer}>
              islamabadmotorcompany.com | 051-226-9613 | BlueArea, Islamabad
            </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 50,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#001F5B',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 10,
    marginVertical: 8,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#001F5B',
    padding: 15,
    marginTop: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 12,
    textAlign: 'center',
    color: '#444',
    marginTop: 20,
  },
});

export default AccountInfoScreen;
