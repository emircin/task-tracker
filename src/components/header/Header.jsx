import React, { useState } from 'react'
import Button from './Button'
import "./header.scss"

const Header = () => {

  const [isActive, setActive] = useState("false");
  
  const showTaskBar = (e) => {
    
    if (isActive && e.target.tagName === "BUTTON") {
      e.target.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.style.display = "block"
      e.target.innerText = "Close Add Task Bar"
      
    
    } else {

       e.target.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.style.display = "none"
       e.target.innerText = "Show Add Task Bar"
      
    }
    setActive(isActive => !isActive);
     
  }

  return (
    <div>
        <div className='container' onClick={showTaskBar}>
            <h1>Tasks List</h1>
            <Button/>
            <p className='no-task'>No Tasks to Show</p>
        </div>
    </div>
  )
}

export default Header