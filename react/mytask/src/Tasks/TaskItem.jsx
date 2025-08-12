import { useDispatch } from "react-redux";
import {deleteTask, toggleTask } from "../redux/Slice";


export default function TaskItem({tasks}){
    const dispatch = useDispatch();

    return(
        <div style={{padding:"10px", margin:"0px 25px"}}>
            <input type="checkbox" checked={tasks.completed} 
            onChange={()=> dispatch(toggleTask(tasks.id))}/>

            <span style={{textDecoration: tasks.completed?"line-through" : "none"}}>
                {tasks.text}
            </span>

            <button style={{backgroundColor:"red",color:"white", padding:"3px",margin:"0px 7px", width:"20px", height:"25px"}} onClick={()=> dispatch(deleteTask(tasks.id))}>X</button>
        </div>
    )
}