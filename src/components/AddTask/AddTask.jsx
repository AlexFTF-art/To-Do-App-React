import "./AddTask.css";

const AddTask = ({ newTask, setNewTask, addTask }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="task-container">
      <div className="add-inner">
        <input
          type="text"
          className="input-task"
          placeholder="Escribe una tarea..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="btn-add"
          onClick={addTask}
          disabled={!newTask.trim()}
        >
          <span className="btn-add-icon">＋</span>
          <span>Agregar tarea</span>
        </button>
      </div>
    </div>
  );
};

export default AddTask;