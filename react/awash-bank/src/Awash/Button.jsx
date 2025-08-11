import {useSelector,useDispatch} from "react-redux";
import {add,reset,subtract} from "../redux/slice";
import logo from '../idgybV5uFx.png'; 
export default function Button(){
     const value=useSelector(state=>state.counter.value);
    const dispatch=useDispatch();
    // const [counter, setCounter]=useState("0")
    return <>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly", margin:"6% 0%"}}>

            <img src={logo} alt="logo" style={{width:"30%", display:"flex", flexDirection:"row",justifyContent:"center",alignContent:"center"}}/>
                
            <div style={{display:"flex", justifyContent:"center",alignContent:"center",flexDirection:"column", backgroundColor:"#05206b", margin:"2% 10%", padding:"20px 0px", width:"30%"}}>
                <h1 style={{display:"inline-flex", justifyContent:"center", color:"#f59d06"}}>{value}</h1>
                <div style={{display:"inline-flex", justifyContent:"space-evenly",alignContent:"center"}}>
                    <button style={{backgroundColor:"#f59d06", color:"#0f40b3",fontWeight:"bolder"}} onClick={()=>dispatch(add())}>+add</button>
                    <button style={{backgroundColor:"#f59d06", color:"#0f40b3",fontWeight:"bolder"}} onClick={()=>dispatch(subtract())}>-subtract</button>
                    <button style={{backgroundColor:"#f59d06", color:"#0f40b3",fontWeight:"bolder"}} onClick={()=>dispatch(reset())}>reset</button>
                </div>

            </div>
        </div>
    </>

}