import "./TaskItem.css";

const TaskItem = ({ task, toggleComplete, deleteTask, changeColor }) => {
  return (
    <div
      className={`task-item ${task.complete ? "task-completed" : ""}`}
      style={{ backgroundColor: task.color}}
    >
      <input 
        type="checkbox"
        checked={task.complete}
        onChange={() => toggleComplete(task.id)}
      />
      
      <span 
        className="task-text"  
        onClick={() => toggleComplete(task.id)}
      >
        {task.text}
      </span>

      <input 
        type="color"
        className="pick-color"
        value={task.color}
        onChange={(e) => changeColor(task.id, e.target.value)}
      />
      
      <button 
        className="btn-delete"
        onClick={(e) => {
        e.stopPropagation();
        deleteTask(task.id);
      }}>X</button>

    </div>
  );
};

export default TaskItem;