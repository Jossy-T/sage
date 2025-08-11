import {Link} from "react-router-dom"

export default function NavBar(){
    return<>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/add"> Add Task</Link>
    </>
}