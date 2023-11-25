// src/components/Checkbox.js
import React from 'react';

// Componente funcional Checkbox que recibe las propiedades isChecked y onChange
const Checkbox = ({ isChecked, onChange }) => {
    return (
      // Contenedor que envuelve el input checkbox y el marcador de verificación
      <div className="checkbox-container">
        {/* Input checkbox que representa el estado de verificación */}
        <input type="checkbox" checked={isChecked} onChange={onChange} />
        {/* Div que actúa como marcador de verificación */}
        <div className="checkmark"></div>
      </div>
    );
  };
  
  // Exporta el componente Checkbox para que pueda ser utilizado en otros archivos
  export default Checkbox;