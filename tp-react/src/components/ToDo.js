import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const ToDo = ({task, completeTask, deleteTodo,editTodo}) => {
  return (
    <div className='ToDo'>
        <p 
        className={`${task.completed ? 'completed':""}`}>
            {task.task}</p>
        <div>
            <FontAwesomeIcon onClick =  {() => completeTask(task.id)}  icon = {faCheck}/>
            <FontAwesomeIcon onClick = {() => editTodo(task.id)} icon = {faPenToSquare}/>
            <FontAwesomeIcon onClick = {() => deleteTodo(task.id)} icon = {faTrash}/>
        </div>
    </div>
  )
}
