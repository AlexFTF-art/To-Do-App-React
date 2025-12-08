import "./DeleteCompBtn.css";

const DeleteCompBtn = ({ deleteCompleteTasks }) => {
  return (
    <div className="container-delete">
      <button
        className="btn-delete-complete"
        onClick={deleteCompleteTasks}
      >
        Eliminar tareas completadas
      </button>
    </div>
  );
};

export default DeleteCompBtn;