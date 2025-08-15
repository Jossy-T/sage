import { Text, View,Button,Image } from "react-native";

export default function Home({navigation}){
    return(
        <View>
            {/* <Image source={require("./assets/favicon.png")}
            style={{width:50, height:50, margin:20 }}/>  */}
            <Text>Welcome to this page</Text>
            <Button  title="About" onPress={()=>navigation.navigate("About")}/>

            <Button title="Flatlist" onPress={()=>navigation.navigate("Flatlist")}/>

            <Button title="Users" onPress={()=>navigation.navigate("Users")}/>
        </View>
    )
}