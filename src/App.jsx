import { useState } from 'react'
import './App.css'
import TaskItem from './components/TaskItem';

function App() {

  const [tasks, setTasks] = useState(() => {
    const savedT = localStorage.getItem("tasks");
    return savedT ? JSON.parse(savedT) : [];
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

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((t) => t.id === id ? {...t, complete: !t.complete} : t);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
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
          {filterTasks.map((task) => (
           <TaskItem key={task.id} task={task} toggleComplete={toggleComplete}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
