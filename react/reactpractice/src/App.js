// import logo from './logo.svg';
import Button from "./components/button/Button"
import './App.css';
import Reactlist from "./components/list/Reactlist";
import {useState} from "react"
import UseEffect from "./components/Hooks/UseEffect";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App(){
    const [counter,setCounter]=useState(0)
  return<div>
  <h1>FIRST component</h1>
  <Button name="Buy Now"/>
  
  <Reactlist/>

    <div className="btn1">
      <button onClick={()=>setCounter(counter+1)}>+</button>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter(counter-1)}>-</button>
    </div>

    <UseEffect/>
  </div>
}
export default App
