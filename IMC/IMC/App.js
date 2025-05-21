import React, { useEffect, useState } from 'react';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { View } from 'react-native';
import { CartProvider } from './context/CartContext';
import DrawerNavigator from './navigation/DrawerNavigator';
import GlobalHeader from './components/GlobalHeader';
import { UserProvider } from './context/UserContext';
const navigationRef = createNavigationContainerRef();

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(null);

  return (
    <UserProvider>
      <CartProvider>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            const route = navigationRef.getCurrentRoute();
            setCurrentRoute(route?.name);
          }}
          onStateChange={() => {
            const route = navigationRef.getCurrentRoute();
            setCurrentRoute(route?.name);
          }}
        >
          <HeaderWrapper currentRoute={currentRoute}>
            <DrawerNavigator />
          </HeaderWrapper>
        </NavigationContainer>
      </CartProvider>
    </UserProvider>
  );
}
function HeaderWrapper({ children, currentRoute }) {
  const hideHeaderOnScreens = ['OrderScreen', 'AccountInfo', 'Login'];

  const shouldShowHeader = currentRoute && !hideHeaderOnScreens.includes(currentRoute);

  return (
    <View style={{ flex: 1 }}>
      {shouldShowHeader && <GlobalHeader title={currentRoute} />}
      {children}
    </View>
  );
}

