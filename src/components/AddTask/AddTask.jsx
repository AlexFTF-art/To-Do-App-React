import "./AddTask.css";

const AddTask = ({ newTask, setNewTask, addTask}) => {
  return (
    <div className="task-container">
      <input 
        type="text" 
        className="input-container"
        placeholder="Escribe una Tarea"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button onClick={addTask} className="btn-add">Agregar Tarea</button>
    </div>
  );
};

export default AddTask;