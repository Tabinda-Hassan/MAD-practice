
import { Text, View , StyleSheet, TextInput } from 'react-native';
import  Header  from './components/Header.js';
export default function App() {
  function handleInput(a)
  {
    console.log(a);
  }
  return (
    <View style={styles.container}>
        <Header name='top component'></Header>
      <Text>Open up App.js to start working on your app!</Text>
      <Header name='bottom component'></Header>
      <TextInput onChangeText={handleInput} placeholder='strat typing here...'></TextInput>

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