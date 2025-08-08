import { useState } from "react"
export default function Button(){
    const [counter, setCounter]=useState("0")
    return <>
        
        <div style={{display:"flex", justifyContent:"center"}}>
        <button onClick={()=>setCounter(counter+1)}>+add</button>
        <h1>{counter}</h1>
        <button onClick={()=>setCounter(counter-1)}>-subtract</button>
        </div>
    </>

}