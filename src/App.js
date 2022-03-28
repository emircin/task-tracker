import { useState } from 'react';
import './App.scss';
import AddTask from './components/add-task/AddTask';
import Header from './components/header/Header';
import Tasks from './components/tasks/Tasks';

function App() {

  const [task, setTask] = useState([

  // {id:1,
  // text:"odev",
  // date:"pazartesi"
  // }
  ])

  const addTask = (newTask) =>{

    const id = Math.floor(Math.random()*100 +1)
    const addNewTask = {id, ...newTask}
    setTask([...task, addNewTask])
  }

  return (
    <div className="App">
      <Header/>
      <AddTask addNote={addTask}/>
      <Tasks notes={task}/>
    </div>
  );
}

export default App;
