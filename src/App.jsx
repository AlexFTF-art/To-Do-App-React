import { useState } from 'react'

import './App.css'

function App() {

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("");


  const addTask = () => {
    if(!newTask.trim()) return;

    const newT = {
      id: Date.now(),
      text: newTask,
      complete: false,
      color: "#ffffff"
    }

    const updated = [...tasks, newT];

    setTasks(updated);

    localStorage.setItem("tasks", JSON.stringify(updated));
    setNewTask("");

  }


  return (
    <>
      <div>

        <h1>To do List con React</h1>


        {/* NewTask */}
        <div>
          <input type="text" placeholder='Escribe una Tarea' value={newTask}
            onChange={(e) => setNewTask(e.target.value)}/>
          <button onClick={addTask}>Agregar</button>
        </div>

        {/* Filter */}
        <div>
          <input type="text" placeholder='Buscar Tareas' value={filter} 
            onChange={(e) => setFilter(e.target.value)}/>
        </div>

        <button>Eliminar Tareas Completadas</button>

        {/* Contenedor */}
        <div></div>

      </div>
    </>
  )
}

export default App
