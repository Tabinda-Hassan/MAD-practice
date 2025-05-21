import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

const firebaseURL = 'https://islamabadmotorcompany-1d5f0-default-rtdb.firebaseio.com/profiles.json';

const ProfileScreen = () => {
  const { userProfile, setUserProfile } = useContext(UserContext);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [purpose, setPurpose] = useState('');
  const [preferredModel, setPreferredModel] = useState('');

  // Load data from context when screen opens
  useEffect(() => {
    if (userProfile) {
      setName(userProfile.name || '');
      setEmail(userProfile.email || '');
      setAddress(userProfile.address || '');
      setPhone(userProfile.phone || '');
      setPurpose(userProfile.purpose || '');
      setPreferredModel(userProfile.preferredModel || '');
    }
  }, [userProfile]);

  const handleSave = async () => {
    const userData = {
      name,
      address,
      phone,
      email,
      purpose,
      preferredModel,
    };

    try {
      await axios.post(firebaseURL, userData);
      setUserProfile(userData); // update context
      Alert.alert('Success', 'Your profile has been saved!');
    } catch (error) {
      Alert.alert('Error', 'Failed to save your profile. Please try again.');
      console.error(error);
    }
  };

  const handleCancel = () => {
    setName('');
    setAddress('');
    setPhone('');
    setEmail('');
    setPurpose('');
    setPreferredModel('');
    Alert.alert('Cancelled', 'Profile update cancelled.');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.heading}>Your Profile</Text>

      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Why are you interested in IMC?</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., Affordable luxury cars"
        value={purpose}
        onChangeText={setPurpose}
      />

      <Text style={styles.label}>Preferred car model to book?</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., Toyota Yaris"
        value={preferredModel}
        onChangeText={setPreferredModel}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#001F5B',
    textAlign: 'center',
    marginTop: 20,
  },
  logo: {
    width: 190,
    height: 60,
    alignSelf: 'center',
    marginVertical: 25,
    marginTop: 15,
  },
  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#001F5B',
    marginBottom: 5,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#65989e',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  cancelButton: {
    backgroundColor: '#889597',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProfileScreen;

