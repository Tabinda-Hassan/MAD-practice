import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { signup } from '../services/firebase'; // ✅ Firebase signup function

const SignUp = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    try {
      const res = await signup(email, password);
      Alert.alert('Account Created', `Welcome, ${res.data.email}`);
      navigation.navigate('Login'); // ✅ Go back to login after successful signup
    } catch (error) {
      const msg = error.response?.data?.error?.message || 'Signup Failed';
      Alert.alert('Signup Failed', msg);
    }
  };

  return (
    <View style={styles.signupContainer}>
      <Image
        source={require('../assets/images/logo.png')}
        style={{ width: 285, height: 75, marginBottom: 15 }}
      />

      <View style={styles.card}>
        <Text style={styles.signupTitle}>Create your account</Text>

        <TextInput
          placeholder="Email"
          style={styles.signupInput}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            style={styles.passwordInput}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}>
            Already have an account? <Text style={styles.loginText}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signupContainer: {
    flex: 1,
    backgroundColor: '#eaf4ff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 25,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  signupTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#0047ab',
    textAlign: 'center',
  },
  signupInput: {
    width: '100%',
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    padding: 15,
  },
  eyeIcon: {
    marginLeft: 10,
    fontSize: 22,
    color: '#666',
  },
  signupButton: {
    backgroundColor: '#0047ab',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  loginLink: {
    marginTop: 20,
    textAlign: 'center',
    color: '#666',
  },
  loginText: {
    color: '#0066cc',
    fontWeight: 'bold',
  },
});

export default SignUp;
