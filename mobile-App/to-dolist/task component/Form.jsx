import {useState } from "react";
import {useDispatch} from "react-redux"
import { addTask } from "../redux/slice";
import { TouchableOpacity, FlatList ,Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Form() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    // e.preventDefault();
    if (text&&text.trim()) {
      dispatch(addTask(text));
      setText('');
    }
  };

  return (
    <View style={{backgroundColor:"#94da5cff"}}>

      <TextInput style={{fontSize:15,width:200,color:"white",height:50,marginVertical:100,marginHorizontal:80, margin:100,textAlign:"center"}}
        value={text}
        onChangeText={setText}
        placeholder="Enter your task"
        />
        
        <TouchableOpacity 
            style={{marginVertical:20,marginHorizontal:130,backgroundColor:"green", width:100, height:30}} onPress={handleSubmit}>
            <Text style={{color:"white", textAlign:"center",padding:5}}>Add task</Text>
        </TouchableOpacity>
    </View>
  );}