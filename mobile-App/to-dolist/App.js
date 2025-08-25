import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Form from './task component/Form';
import TaskList from './task component/Tasklist';
import TaskItem from './task component/TaskItem';

export default function App() {
  return(
  <Provider store={store}>
    <Form/>
    <TaskList/>
    {/* <TaskItem/> */}
  </Provider>
  );
}




































// const styles = StyleSheet.create({
//   container: {
  //     flex: 1,
  //     backgroundColor: '#fff',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  // });
  






  // const[country,setCountry]=useState([])
  // function getcountry(){
  //   fetch("https://restcountries.com/v3.1/all")
  //   .then((res)=>res.json())
  //   .then((data)=>setCountry(data))
  // }
  // const[searchs,setSearchs]=useState("")
  // function search(name){
  //   fetch("https://restcountries.com/v3.1/name/"+name)
  //   .then((res)=>
  //     {
  //       if(res.status==200)
  //     return res.json()
  //       else return <Text>country not found</Text>
  //     })
  //     .then((data)=>setCountry(data))
  // }
  // return (
  //   <FlatList>
  
    
  //   <ScrollView>
  //     <TextInput value={searchs} placeholder='search country' 
  //     onChangeText={(text)=>setSearchs(text)}/>
  //     <Button title='search country' onPress={()=>search(searchs)}/>
  //     <Button title='All country' onPress={getcountry}/>
  //     <View>
  //       {country.map((country)=>(
  //         <View key={country.cca3}>
  //           <Image source={{uri:country.flags.png}} alt={{uri:country.flags.png}} 
  //           style={{ width: 100, height: 50 }}/>
  //         </View>
  //       ))}
  //     </View>
  //   </ScrollView>
  //   </FlatList>
  // );