import { useState } from 'react'
import './App.css'
import TaskItem from './components/TaskItem/TaskItem';
import AddTask from './components/AddTask/AddTask';
import SearchTask from './components/Filter/SearchTask';
import DeleteCompBtn from './components/DeleteBtn/DeleteCompBtn';

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

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(t => t.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  const deleteCompleteTasks = () => {
    const updatedTasks = tasks.filter(t => !t.complete);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  const changeColor = (id, color) => {
    const updatedTasks = tasks.map(t => 
      t.id === id ? {...t, color: color } : t);
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
        <AddTask
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />

        {/* Filter */}
        <SearchTask
          filter={filter}
          setFilter={setFilter}
        />

        <DeleteCompBtn 
          deleteCompleteTasks={deleteCompleteTasks}
        />

        {/* Contenedor agregar map y classname*/}
        <div>
          {filterTasks.map((task) => (
           <TaskItem 
            key={task.id} 
            task={task} 
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            changeColor={changeColor}
           />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
