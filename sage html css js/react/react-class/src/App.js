import Button from "./component/Button"
import "./App.css"
import {useState} from "react"
import Loginout from "./component/condition/Loginout"

function App(){
  const[counter,setCounter]=useState(0)
  return <div>
    <h1>First component</h1>
    <Button name="Buy Now"/>
    <br/><br/>
   <Button name="order"/>
   <br/>

    <div className="btn">
      <button onClick={()=>setCounter(counter+1)}>+</button>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter(counter-1)}>-</button>
      <Loginout/>

      <ReactList/>
    </div>

  </div>

}

export default App
