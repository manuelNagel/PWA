import React,{useState} from 'react'

export const ToDoForm = ({addTodo}) => {
    const [value,setValue] = useState("")
    const handleSubmit = e =>{
        e.preventDefault();
        addTodo(value);
        setValue("")
    }
  return (
    <form className= 'ToDoForm' onSubmit={handleSubmit}> 
        <input type='text' className='todo-input' value={value}
        placeholder='¿Cuál es la tarea a agregar?'
        onChange={(e)=>setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'> Agregar tarea </button>
    </form>
  )
}
