

const TaskItem = ({ task, toggleComplete }) => {
  return (
    <div
      className={`task ${task.complete ? "completada" : ""}`}
      style={{ backgroundColor: task.color }}
      onClick={() => toggleComplete(task.id)}
    >
      {task.text}
    </div>
  );
};

export default TaskItem;