import { useState } from "react";
import "./addtask.scss";

const AddTask = (props) => {

  const {addNote} = props
  const [text, setText] = useState();
  const [date, setDate] = useState();

  
  const handleClick = (e) => {
    e.preventDefault()
    setText("")
    setDate("")
    addNote({text, date})
    document.querySelector(".no-task").innerText = ""
    
    
  }

  return (
  
    <div>
    <div className="add-task-bar">
      <form action="" onSubmit={handleClick}>
            <label htmlFor="task-add">Task</label>
            <input type="text" name='task-add' id='task-add' placeholder='add task..' value={text} onChange={e=> setText(e.target.value)} required/>
            <label htmlFor="date-time">Date & Time</label>
            <input type="date" name="date-time" id="date-time" placeholder='add day..' value={date} onChange={e=> setDate(e.target.value)} required/>
            <button type="submit" className="saveButton" role="button">Save Task</button>
      </form>
    </div>
    </div>
  )
}

export default AddTask