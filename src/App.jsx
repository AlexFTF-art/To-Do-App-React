import { useState } from 'react'

import './App.css'

function App() {

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("");


  return (
    <>
      <div>

        <h1>To do List con React</h1>


        {/* NewTask */}
        <div>
          <input type="text" placeholder='Escribe una Tarea' value={newTask}
            onChange={(e) => setNewTask(e.target.value)}/>
          <button>Agregar</button>
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
