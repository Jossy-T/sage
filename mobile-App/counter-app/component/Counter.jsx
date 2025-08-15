
import { Button, Text, TouchableOpacity, View ,Image} from "react-native"
import { add, reset, subtract } from "../redux/slice"
import { useDispatch, useSelector } from "react-redux"


export default function Counter(){
    const value = useSelector(state=> state.counter.value)
    const dispatch = useDispatch()

    return<View  style={{ flex: 0, justifyContent: "center", alignItems: "center" }}>

        <Image source={require("../assets/favicon.png")} style={{width:50,height:50,marginTop: 200}}/>

        <Text style={{ fontSize: 40, marginTop: 100 }}>{value}</Text>

        <View style={{ flex: 0,flexDirection:"row", justifyContent: "center", alignItems: "center" }}>

            <TouchableOpacity  onPress={() => dispatch(add())}
                style={{ backgroundColor: "green", padding: 2, borderRadius: 20,  width: 100, margin:10,alignItems: "center" }}>
                <Text style={{margin:10,color:"white" }}>+ Add</Text>
            </TouchableOpacity>


            <TouchableOpacity  onPress={() => dispatch(subtract())}
                style={{ backgroundColor: "green", padding: 2, borderRadius: 20,  width: 100, margin:10,alignItems: "center" }}>
                <Text style={{margin:10,color:"white"}}>- Subtract</Text>
            </TouchableOpacity>

        
            <TouchableOpacity  onPress={() => dispatch(reset())}
                style={{ backgroundColor: "green", padding: 2, borderRadius:20, margin:10,width: 100, alignItems: "center" }}>
                
                <Text style={{margin:10,color:"white"}}>Reset</Text>
            </TouchableOpacity> 

        </View>
            <Text style={{marginTop:30,textAlign:"center",fontSize:12,fontWeight:"bold",lineHeight:20}}>Counter apps are designed to help users track and manage numerical counts, whether for personal use or in specific applications. 
                They range from simple click counters to more advanced tools for habit tracking, sports scoring, or 
                industrial counting. Many counter apps offer features like custom counters, step adjustments, logging, and export options. 
            </Text>
            
  

    </View> 
}