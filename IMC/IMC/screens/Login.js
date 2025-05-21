import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { login } from '../services/firebase';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import axios from 'axios';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { setUserEmail } = useContext(UserContext);

 const handleLogin = async () => {
  if (!email || !password) {
    Alert.alert('Error', 'Please enter both email and password');
    return;
  }

  try {
    const res = await login(email, password);
    setUserEmail(email); // Save to context
       // ✅ Fetch user profile from Firebase Realtime Database
    const firebaseUrl = `https://islamabadmotorcompany-1d5f0-default-rtdb.firebaseio.com/profiles.json`; // Replace with your actual database URL
    const response = await axios.get(firebaseUrl);

    // Loop to find profile for this email
    const allUsers = response.data || {};
    let userData = null;
    for (let key in allUsers) {
      if (allUsers[key].email === email) {
        userData = allUsers[key];
        break;
      }
    }

    if (userData) {
      setUserProfile(userData); // Save profile to context
    }

    Alert.alert('Login Successful', `Welcome ${email}`);
    navigation.navigate('Home');
  } catch (error) {
    const msg = error.response?.data?.error?.message || 'Login Failed';
    Alert.alert('Login Failed', msg);
  }
}

  return (
    <ImageBackground
  source={require('../assets/images/bg.jpeg')} // ← your background image path
  style={styles.background}
  resizeMode="cover"
>
    <View style={styles.loginContainer}>
      <Image
        source={require('../assets/images/login.jpeg')}
        style={{ width: 150, height: 150, marginBottom: 15, borderRadius: 75 }}
      />

      <View style={styles.card}>
        <Text style={styles.loginTitle}>Glad to see you again!</Text>

        <TextInput
          placeholder="Email"
          style={styles.loginInput}
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

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupLink}>
            Don't have an account? <Text style={styles.signupText}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
 </ImageBackground>
 );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    paddingBottom: 0,
    paddingTop: 175,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#0047ab',
    textAlign: 'center',
  },
  loginInput: {
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
  background: {
  flex: 1,
  width: '100%',
  height: '100%',
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
  loginButton: {
    backgroundColor: '#001F5B',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  signupLink: {
    marginTop: 20,
    textAlign: 'center',
    color: '#666',
  },
  signupText: {
    color: '#0066cc',
    fontWeight: 'bold',
  },
});

export default Login;
