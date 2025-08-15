import { useState } from 'react';
import { Text, View,Image,TextInput,Button,Form, SafeAreaView } from 'react-native';
import { Switch } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Greet from './component/Greet';
import UserInput from './component/UserInput';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import About from './pages/About';
import Flatlist from './pages/Flatlist';
import Users from './pages/Users';

const Stack=createNativeStackNavigator();
export default function App() {
    // const [on,setOn]=useState(false)

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="About" component={About}/>
            <Stack.Screen name="Flatlist" component={Flatlist}/>
            <Stack.Screen name="Users" component={Users}/>
        </Stack.Navigator>
      </NavigationContainer>
  )

    
        //   <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>

        //   <Greet name="Jossy"/>
          

        // <Text style={{fontSize:25,fontWeight:"700"}}>Open up App.js to start working </Text>

        // <Image source={require("./assets/favicon.png")}
        // style={{width:50, height:50, margin:20 }}/>

        // {/* <button style={{margin:15}}  onClick={()=>alert("succesfull")}>learn more</button> */}
        //     <UserInput/>
        // <TextInput 
        // placeholder='Name'
        // style={{height:50,width:150, textAlign:"center",color:"green",fontWeight:"bold", borderWidth:2, margin:20}}
        // />

        // <Button title="click" onPress={()=>alert("Nice")}/>

        // <Switch value={on} onValueChange={setOn}/>
        // <ActivityIndicator size="large" color="#082a97"/>
        
        // </View>
     
  
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#faf5f5ff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
