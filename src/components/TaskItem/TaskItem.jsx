import "./TaskItem.css";

const TaskItem = ({ task, toggleComplete, deleteTask, changeColor }) => {
  const colorInputId = `color-${task.id}`;

  const handleToggle = () => {
    toggleComplete(task.id);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteTask(task.id);
  };

  const handleColorChange = (e) => {
    e.stopPropagation();
    changeColor(task.id, e.target.value);
  };

  const handleColorClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`task-item ${task.complete ? "task-completed" : ""}`}
      style={{ "--task-color": task.color }}
    >
      <div className="task-accent-bar" />

      <input
        type="checkbox"
        className="task-checkbox"
        checked={task.complete}
        onChange={handleToggle}
      />

      <div
        className="task-content"
        onClick={handleToggle}
      >
        <span className="task-text">{task.text}</span>
        <span className={`task-status ${task.complete ? "status-done" : "status-pending"}`}>{task.complete ? "Completada" : "Pendiente"}</span>
      </div>

      <div className="task-actions">
        <input
          type="color"
          className="pick-color-hidden"
          id={colorInputId}
          value={task.color}
          onChange={handleColorChange}
        />
        <label
          htmlFor={colorInputId}
          className="color-icon"
          onClick={handleColorClick}
          title="Cambiar color"
        >
          🎨
        </label>

        <button
          className="btn-delete"
          onClick={handleDelete}
          aria-label="Eliminar tarea"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default TaskItem;