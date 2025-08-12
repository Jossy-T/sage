import {useState } from "react";
import {useDispatch} from "react-redux"
import { addTask } from '../redux/Slice';

export default function Form() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTask(text));
      setText('');
    }
  };

  return (
    <form style={{margin:"0px 50px", textAlign:"center", display:"flex", justifyContent:"center"}} onSubmit={handleSubmit}>
      <input style={{width:"200px", height:"50px", textAlign:"center"}}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your task"
      />
      <button style={{margin:"15px",backgroundColor:"green", color:"white", width:"100px", height:"30px"}} type="submit">Add Task</button>
    </form>
  );}