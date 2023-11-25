/// src/App.js
// Importa el hook `useState` desde React para manejar el estado en el componente funcional.
import React, { useState } from 'react';

// Importa algunos componentes de alguna librería o archivo externo (Container, FormTodo, TaskList).
import Container from './componets/Container';
import FormTodo from './componets/FormTodo';
import TaskList from './componets/TaskList';// Componente funcional principal App

// Componente funcional principal App
function App() {
  // Estado para almacenar las tareas
  const [tasks, setTasks] = useState([]);

  // Función para agregar una nueva tarea al estado
  const addTask = (text) => {
    // Crea una nueva tarea con un identificador único
    const newTask = { id: Date.now(), text, completed: false };
    // Actualiza el estado con la nueva tarea
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Función para eliminar una tarea del estado
  const deleteTask = (taskId) => {
    // Filtra las tareas, excluyendo la tarea con el identificador dado
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    // Actualiza el estado con las tareas filtradas
    setTasks(updatedTasks);
  };

  // Función para cambiar el estado de completitud de una tarea
  const toggleComplete = (taskId) => {
    // Mapea sobre las tareas y cambia el estado de la tarea con el identificador dado
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    // Actualiza el estado con las tareas modificadas
    setTasks(updatedTasks);
  };

  // Renderiza el componente principal
  return (
    <div>
      {/* Contenedor principal de la aplicación */}
      <Container>
        {/* Título principal de la aplicación */}
        <h1>To-Do List</h1>
        {/* Componente para agregar nuevas tareas */}
        <FormTodo onAddTask={addTask} />
        {/* Subtítulo para la lista de tareas */}
        <p>My tasks</p>
        {/* Lista de tareas */}
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              {/* Muestra el texto de la tarea y aplica la clase 'completed' si está completada */}
              <span>{task.text}</span>
              {/* Botón para cambiar el estado de completitud de la tarea */}
              <button onClick={() => toggleComplete(task.id)}>
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              {/* Botón para eliminar la tarea */}
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

// Exporta el componente funcional "App" para ser utilizado en otros archivos de la aplicación.
export default App;