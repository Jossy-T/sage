import { useDispatch } from "react-redux";
import {deleteTask, toggleTask } from "../redux/slice";
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';



export default function TaskItem({tasks}){
    const dispatch = useDispatch();

    return(
        <View 
            style={{
            padding: 10,
            marginHorizontal: 35,
            flexDirection: "row", 
            alignItems: "center", 
            justifyContent: "space-between",
            color:"white"
            }}>


            {/* checkbox part */}
            <TouchableOpacity
                onPress={() => dispatch(toggleTask(tasks.id))}
                style={{
                    width: 15,
                    height: 15,
                    borderRadius:10,
                    borderWidth: 1.5,
                    borderColor: "#81c846",
                    marginRight: 10,
                    backgroundColor: tasks.completed ? "#5aa71c" : "#ebf7e2ff"
                }}
            />

            {/* the displayed text after user add tasks */}
            <Text style={{textDecoration: tasks.completed ?"line-through" : "none", flex:1,flexDirection:"row"}}>
                <Text style={{fontSize:18,fontStyle:"normal",color:"white"}}>
                {tasks.text}
                </Text> 
            </Text>


            {/* Delete button */}

            <TouchableOpacity style={{backgroundColor:"red", padding:3,paddingHorizontal:5,marginVertical:10 , width:97, borderRadius:7, height:25}} onPress={()=> dispatch(deleteTask(tasks.id))}>
                <Text style={{color:"white"}}>
                    Delete the list
                </Text>
            </TouchableOpacity>


        </View>
    )
}











            /* <CheckBox Value={tasks.completed} 
            onValueChange={()=>dispatch(toggleTask(tasks.id))}/> */

            /* <TextInput type="checkbox" checked={tasks.completed} 
            onChange={()=> dispatch(toggleTask(tasks.id))}/> */