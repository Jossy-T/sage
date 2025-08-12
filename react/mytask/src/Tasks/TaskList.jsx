import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";


export default function TaskList(){
    const tasks = useSelector(state => state.task);

    if(tasks.length===0){
        return<h4 style={{textAlign:"center", margin:"30px"}}>Add tasks in <a href="/add">Add Task</a> page</h4>;
    }

    return(
        <ul>
            {tasks.map(task=>( <TaskItem key={task.id} tasks={task}/>))}
        </ul>
    )
}