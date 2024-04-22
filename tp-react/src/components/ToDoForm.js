import React,{useState} from 'react'

export const ToDoForm = ({addTodo}) => {
    const [value,setValue] = useState("")
    const [mensaje,setMensaje] = useState("¿Cuál es la tarea a agregar");
    const handleSubmit = e =>{
        e.preventDefault();
        if (value.trim() !== "") {
            addTodo(value);
            setValue("");
            setMensaje ("¿Cuál es la tarea a agregar");
        } else {
            setMensaje("Ingrese un texto Por favor");
        }
    }
  return (
    <form className= 'ToDoForm' onSubmit={handleSubmit}> 
        <input type='text' className='todo-input' value={value}
        placeholder={mensaje}
        onChange={(e)=>setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'> Agregar tarea </button>
    </form>
  )
}
