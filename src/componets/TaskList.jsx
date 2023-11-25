// src/components/TaskList.js
import React from 'react';
import Checkbox from './Checkbox';

// Componente funcional TaskList que recibe las propiedades tasks, onToggleComplete y onDeleteTask
const TaskList = ({ tasks, onToggleComplete, onDeleteTask }) => {
    // Devuelve una lista no ordenada (ul) que contiene elementos de lista (li) para cada tarea
    return (
      <ul>
        {tasks.map((task, index) => (
          // Cada tarea se representa como un elemento de lista con un identificador único (key)
          <li key={index}>
            {/* Componente Checkbox que maneja el estado de completitud de la tarea */}
            <Checkbox
              isChecked={task.completed}
              onChange={() => onToggleComplete(index)}
            />
            {/* Muestra el texto de la tarea, y aplica la clase 'completed' si la tarea está completada */}
            <span className={task.completed ? 'completed' : ''}>{task.text}</span>
            {/* Botón para eliminar la tarea, llamando a la función onDeleteTask con el índice de la tarea */}
            <button onClick={() => onDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };
  
  // Exporta el componente checkbox
  export default Checkbox;
  
