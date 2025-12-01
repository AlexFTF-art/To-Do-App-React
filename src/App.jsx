import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <h1>To do List con React</h1>

        <div>
          <input type="text" placeholder='Escribe una Tarea'/>
          <button>Agregar</button>
        </div>

        <div>
          <input type="text" placeholder='Buscar Tareas'/>
        </div>

        <button>Eliminar Tareas Completadas</button>

        {/* Contenedor */}
        <div></div>

      </div>
    </>
  )
}

export default App
