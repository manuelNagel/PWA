import React, { useState, useEffect } from "react";
import { ToDoForm } from "./ToDoForm";
import { ToDo } from "./ToDo";
import { Titulo } from "./Titulo";
import { v4 as uuidv4 } from "uuid";
import { EditToDoForm } from "./EditToDoForm";
uuidv4();

export const TodoWrapper = () => {
  const [toDos, setToDos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [completedCount, setCompletedCount] = useState(0);
  const [uncompletedCount, setUncompletedCount] = useState(0);

  useEffect(() => {
    // Calculate initial counts
    calculateTaskCounts();
  }, [toDos]);

  const calculateTaskCounts = () => {
    const completedTasks = toDos.filter((todo) => todo.completed).length;
    const uncompletedTasks = toDos.length - completedTasks;
    setCompletedCount(completedTasks);
    setUncompletedCount(uncompletedTasks);
  };

  const addTodo = (todo) => {
    setToDos([
      ...toDos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(toDos);
  };
  const completeTask = (id) => {
    setToDos(
      toDos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const editTodo = (id) => {
    setToDos(
      toDos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (task, id) => {
    setToDos(
      toDos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredToDos = toDos.filter((todo) =>
    todo.task.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="TodoWrapper">
      {/* Utilicen self-close cada vez que puedan --> /> */}
      <Titulo title="To-Do App"></Titulo>
      <div>
        <p className="count-p">Tareas Terminadas: {completedCount}</p>
        <p className="count-p">Tareas sin Terminar: {uncompletedCount}</p>
      </div>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-input" // Add className here
      />
      <ToDoForm addTodo={addTodo} />
      {filteredToDos.map((todo, index) =>
        todo.isEditing ? (
          <EditToDoForm task={todo} editTodo={editTask} key={todo.id} />
        ) : (
          <ToDo
            task={todo}
            key={todo.id}
            completeTask={completeTask}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
