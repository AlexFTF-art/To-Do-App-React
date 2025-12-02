

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div
      className={`task ${task.complete ? "completada" : ""}`}
      style={{ backgroundColor: "#000000"}}
    >
      <input 
        type="checkbox"
        checked={task.complete}
        onChange={() => toggleComplete(task.id)}
      />
      <span onClick={() => toggleComplete(task.id)}
        style={{cursor: "pointer"}}  
      >
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