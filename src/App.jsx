import { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem/TaskItem";
import AddTask from "./components/AddTask/AddTask";
import SearchTask from "./components/Filter/SearchTask";
import DeleteCompBtn from "./components/DeleteBtn/DeleteCompBtn";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedT = localStorage.getItem("tasks");
    return savedT ? JSON.parse(savedT) : [];
  });

  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;

    const newT = {
      id: Date.now(),
      text: newTask,
      complete: false,
      color: "#ffffff",
    };

    const updated = [...tasks, newT];
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
    setNewTask("");
  };

  const toggleComplete = (id) => {
    const updated = tasks.map((t) => (t.id === id ? { ...t, complete: !t.complete } : t));
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const deleteTask = (id) => {
    const updated = tasks.filter((t) => t.id !== id);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const deleteCompleteTasks = () => {
    const updated = tasks.filter((t) => !t.complete);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const changeColor = (id, color) => {
    const updated = tasks.map((t) => (t.id === id ? { ...t, color } : t));
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const orderedTasks = [...tasks].sort((a, b) => a.complete - b.complete);
  const filterTasks = orderedTasks.filter((t) => t.text.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <div className="bg-particles">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="particle"
          ></div>
        ))}
      </div>

      <h1 className="main-tittle">Organiza tus tareas</h1>

      <AddTask
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />

      <SearchTask
        filter={filter}
        setFilter={setFilter}
      />

      <DeleteCompBtn deleteCompleteTasks={deleteCompleteTasks} />

      <div className="task-grid">
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
    </>
  );
}

export default App;