import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import { Text, FlatList, View, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function TaskList(){
    const tasks = useSelector((state) => state.task);

    if(tasks.length===0){
        return<Text style={{textAlign:"center",color:"white"}}> Add Task </Text>;
    }

    return(
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <TaskItem tasks={item} />}
                style={{flex:1,color:"white"}} 
            />
        

    );
}