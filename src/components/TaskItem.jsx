

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div
      className={`task ${task.complete ? "completada" : ""}`}
      style={{ backgroundColor: task.color }}
      onClick={() => toggleComplete(task.id)}
    >
      <span>
        {task.text}
      </span>
      
      <button onClick={(e) => {
        e.stopPropagation();
        deleteTask(task.id);
      }}>X</button>

    </div>
  );
};

export default TaskItem;