import React,{useState} from 'react'

export const EditToDoForm = ({editTodo,task}) => {
    const [value,setValue] = useState(task.task)
    const handleSubmit = e =>{
        e.preventDefault();
        editTodo(value,task.id);
        setValue("");
    }
  return (
    <form className= 'ToDoForm' onSubmit={handleSubmit}> 
        <input type='text' className='todo-input' value={value}
        placeholder='Modificación de tarea'
        onChange={(e)=>setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>
             Modificar tarea 
         </button>
    </form>
  )
}