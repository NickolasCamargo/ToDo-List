// src/components/FormTodo.js
import React, { useState } from 'react';

// Componente funcional FormTodo que recibe la función onAddTask como propiedad
const FormTodo = ({ onAddTask }) => {
  // Estado local para almacenar el valor del input
  const [task, setTask] = useState('');

  // Función que maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario
    // Verifica que el valor del input no esté vacío o contenga solo espacios en blanco
    if (task.trim() !== '') {
      onAddTask(task); // Llama a la función onAddTask con el valor del input
      setTask(''); // Limpia el valor del input después de agregar la tarea
    }
  };

  // Devuelve un formulario con un input y un botón
  return (
    <form onSubmit={handleSubmit}>
      {/* Input para escribir la nueva tarea */}
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)} // Actualiza el estado con el valor del input
      />
      {/* Botón para enviar el formulario y agregar la tarea */}
      <button type="submit">Add</button>
    </form>
  );
};

// Exporta el componente FormTodo para que pueda ser utilizado en otros archivos
export default FormTodo;
