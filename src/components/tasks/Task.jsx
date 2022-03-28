import React, { useState } from 'react'
import "./tasks.scss";
import icon from "./trash-solid.svg"

const Task = ({id, date, text}) => {

  const [isOff, setIsOff] = useState(true);

  const handlerClick = (e) => {

   e.target.parentElement.parentElement.remove()
   
   
  }


  const changeStyle = () => {

    if(isOff) {

      document.getElementById(id).style.textDecoration = "line-through";
      document.getElementById(id).style.borderLeft = "8px solid #F2C063"
    }
    else {
      document.getElementById(id).style.textDecoration = ""
      document.getElementById(id).style.borderLeft = ""

    }
    setIsOff(isOff => !isOff)
  }
  
  return (
    <div>

      <div key={id} className='task-container' id={id}>
        <div className='task' onClick={changeStyle}>
          <h2>{text}</h2>
          <p>{date}</p>
        </div>
        <div className='button'>
          <img src={icon} alt="" onClick={handlerClick}/>
            </div> 
      </div>
    </div>
  )
}

export default Task