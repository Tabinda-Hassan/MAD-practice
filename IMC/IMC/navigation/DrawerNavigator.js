


import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import CarShopScreen from '../screens/CarShopScreen';
import OrderScreen from '../screens/OrderScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ReviewScreen from '../screens/ReviewScreen';
import CustomDrawer from '../components/CustomDrawer';
import CartScreen from '../screens/CartScreen';
import login from '../screens/Login';
import SignUp from '../screens/SignUp';
import AccountInfoScreen from '../screens/AccountInfoScreen';
import { View } from 'react-native';
import Login from '../screens/Login';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="OrderScreen" component={OrderScreen} />
      <Drawer.Screen name="Car Shop" component={CarShopScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Reviews" component={ReviewScreen} />
      <Drawer.Screen name="Cart" component={CartScreen} /> 
      <Drawer.Screen name="AccountInfo" component={AccountInfoScreen} />
     <Drawer.Screen name="Login" component={Login} />
     <Drawer.Screen name="SignUp" component={SignUp} />

    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
