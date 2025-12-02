

const TaskItem = ({ task, toggleComplete, deleteTask, changeColor }) => {
  return (
    <div
      className={`task ${task.complete ? "completada" : ""}`}
      style={{ backgroundColor: task.color}}
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

      <input 
        type="color"
        value={task.color}
        onChange={(e) => changeColor(task.id, e.target.value)}
      />
      
      <button onClick={(e) => {
        e.stopPropagation();
        deleteTask(task.id);
      }}>X</button>

    </div>
  );
};

export default TaskItem;