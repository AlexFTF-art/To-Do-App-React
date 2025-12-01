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

  const orderedTasks = [...tasks].sort((a, b) => a.complete - b.complete);
  const filterTasks = orderedTasks.filter(t => t.text.toLowerCase().includes(filter.toLowerCase()));

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

        {/* Contenedor agregar map y classname*/}
        <div>
          {filterTasks.map((t) => (
            <div key={t.id} className={`task ${t.complete ? "completada" : ""}`}
              style={{backgroundColor: t.color}}>
              {t.text}  
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
