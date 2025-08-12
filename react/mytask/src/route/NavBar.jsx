import {Link} from "react-router-dom"

export default function NavBar(){
    return<>
    <div style={{display:"flex", justifyContent:"space-evenly", 
        fontSize:"18px",backgroundColor:"rgba(3, 97, 18, 0.8)"}}>
        <Link style={{textDecoration:"none",color:"white"}} to="/">Home</Link>
        <Link  style={{textDecoration:"none",color:"white"}} to="/about">About</Link>
        <Link  style={{textDecoration:"none",color:"white"}} to="/add"> Add Task</Link>
    </div>

    </>
}