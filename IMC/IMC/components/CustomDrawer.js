import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';

const CustomDrawer = (props) => {
  const { navigation } = props;

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
          <Ionicons name="close-circle-outline" size={28} color="#001F5B" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.item}>
        <Text style={styles.itemText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Car Shop')} style={styles.item}>
        <Text style={styles.itemText}>Order Now!</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Car Shop')} style={styles.item}>
        <Text style={styles.itemText}>Car Shop</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Car Shop')} style={styles.item}>
        <Text style={styles.itemText}>Mother's Day SALE!</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Reviews')} style={styles.item}>
       
        <Text style={styles.itemText}>Reviews</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.item}>
       
        <Text style={styles.itemText}> Profile</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  item: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    marginLeft: 5,
    color: '#001F5B',
    fontWeight: '600',
  },
});

export default CustomDrawer;
