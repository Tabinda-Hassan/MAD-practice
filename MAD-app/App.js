import React from "react";
import { View, Text } from "react-native";
import Header from "./components/header"; // Import the Header component

const App = () => {
  return (
    <View>
      <Header />
      <View style={{ padding: 20 }}>
        <Text>Welcome to my React Native App!</Text>
      </View>
    </View>
  );
};

export default App;


