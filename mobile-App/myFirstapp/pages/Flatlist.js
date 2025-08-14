import { View,Text,FlatList } from "react-native";
export default  function Flatlist(){
    const lists=Array.from({length:100},
        (_,i)=>({id:i.toString(), name:`Item ${i+1}`})
    );

    return(
        <View style={{flex:1}}>
            <FlatList
                data={lists}
                horizontal={false}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>(
                    <Text>{item.name}</Text>
                )}
            />
        </View>
    )
}