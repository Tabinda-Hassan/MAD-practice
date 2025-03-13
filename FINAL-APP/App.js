import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! Lets do the work</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default function ParentComponent()
{
    return (
        <View style={StyleSheet.container}>
        <Text style={StyleSheet.boldText}>Hello! </Text>
        <Name />  
        </View>
    )
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  boldText: {
      fontSize: 20,
      fontWeight: 'bold',
  }
});