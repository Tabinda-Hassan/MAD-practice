
import { Text, View , StyleSheet } from 'react-native';
import  Header  from './components/Header.js';
export default function App() {
  return (
    <View style={styles.container}>
        <Header></Header>
      <Text>Open up App.js to start working on your app!</Text>
    
    </View>
  );
}

const styles= StyleSheet.create(
  {
    container:{
      color:'white',
      backgroundColor:'red',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flex:1
    }
  }
)