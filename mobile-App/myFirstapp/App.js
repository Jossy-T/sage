import { useState } from 'react';
import { Text, View,Image,TextInput,Button } from 'react-native';
import { Switch } from 'react-native-web';

export default function App() {
    const [on,setOn]=useState(false)

  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:25,fontWeight:"700"}}>Open up App.js to start working </Text>

      <Image source={require("./assets/favicon.png")}
        style={{width:50, height:50, margin:20 }}/>

      {/* <button style={{margin:15}}  onClick={()=>alert("succesfull")}>learn more</button> */}

      <TextInput 
      placeholder='Name'
      style={{height:50,textAlign:"center",color:"green",fontWeight:"bold", borderWidth:2, margin:20}}
      />
      <Button title="click" onPress={()=>alert("succesfull")}/>

        <Switch value={on} onValueChange={setOn}/>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#faf5f5ff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
