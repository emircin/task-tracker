import "./tasks.scss";
import Task from "./Task";

const Tasks = ({notes}) => {

  return (
    <div className='tasks-container'>
      <div>
        {notes.map((note)=>

        <div key={note.id}> 
        <Task id={note.id} text={note.text} date={note.date}/>
        </div>
        )}
      </div>
    </div>
  )
  
}

export default Tasks