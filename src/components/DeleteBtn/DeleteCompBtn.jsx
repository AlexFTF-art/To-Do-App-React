import "./DeleteCompBtn.css";

const DeleteCompBtn = ({deleteCompleteTasks}) => {
  return (
    <div className="container-delete">
      <button onClick={deleteCompleteTasks} className="btn-delete-complete">
        Eliminar Tareas Completadas
      </button>
    </div>
    
  )
}

export default DeleteCompBtn;