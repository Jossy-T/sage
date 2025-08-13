import {Text} from "react-native"

export default function Greet(Props){
    return<>
        <Text style={{fontWeight:"500"}}>Hello  {Props.name}</Text>
    </>
}