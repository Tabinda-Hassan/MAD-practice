import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { CartContext } from '../context/CartContext';

const GlobalHeader = ({ title }) => {
  const navigation = useNavigation();
  const { cartItems } = useContext(CartContext);

  const handleCartPress = () => {
    if (cartItems.length === 0) {
      Alert.alert('Cart is empty', 'You have no items in your cart.');
    } else {
      navigation.navigate('Cart');
    }
  };

  const handleAccountPress = () => {
    Alert.alert('Account', 'Choose an option', [
      { text: 'Login', onPress: () => navigation.navigate('Login') },
      { text: 'Sign Up', onPress: () => navigation.navigate('SignUp') },
      { text: 'Cancel', style: 'cancel' },
    ]);
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Ionicons name="menu" size={24} color="#001F5B" />
      </TouchableOpacity>

      <Text style={styles.centerTitle}>{title || 'IMC'}</Text>

      <View style={styles.rightIcons}>
        <TouchableOpacity onPress={handleCartPress} style={styles.cartIconWrapper}>
          <Ionicons name="cart-outline" size={26} color="#001F5B" />
          {cartItems.length > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{cartItems.length}</Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={handleAccountPress}>
          <Image source={require('../assets/images/profile.jpeg')} style={styles.profileImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderBottomWidth: 0.4,
    borderBottomColor: '#ccc',
  },
  centerTitle: {
  fontSize: 18,
  fontWeight: '600',
  color: '#001F5B',
  textAlign: 'center',          
  textAlignVertical: 'center',
  paddingRight: 0,
  paddingLeft: 38,
  }, 

  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1
  },
  profileImage: {
    width: 30,
    height: 28,
    borderRadius: 15,
    marginLeft: 10,
  },
 cartIconWrapper: {
  position: 'relative',
  marginLeft: 0, 
},

  badge: {
    position: 'absolute',
    top: -5,
    right: -6,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default GlobalHeader;
