import { useState } from "react";
import { TextInput, View ,Text} from "react-native";
import { Button } from "react-native";


export default function UserInput(){
    const [name,setName]= useState("")
    const [password,setPassword]= useState("")
    return(
        <View>
            <TextInput
                placeholder="Name"
                value={name}
                onChangeText={setName}

                style={{borderWidth:2,padding:10,margin:10,width:150}}
            />
            <Text>your name is: {name}</Text>

            <TextInput
                placeholder="Enter your password"
                secureTextEntry 
                // to make our password invisible when we write
                value={password}
                onChangeText={setPassword}

                style={{borderWidth:2,padding:10,margin:10,width:150}}
            />
            <Button title="submit" onPress={()=>alert("submited succesfully" + "password: "+ password)}/>
        </View>
    )
};