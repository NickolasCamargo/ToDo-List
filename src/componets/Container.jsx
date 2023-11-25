/// src/components/Container.js
import React from 'react';

// Define el componente funcional llamado "Container".
// Recibe una prop "children", que representa los elementos hijos que se renderizarán dentro del contenedor.
const Container = ({ children }) => {
    // Devuelve un contenedor con la clase CSS "container" que envuelve los elementos hijos.
    return (
        <div className="container">
            {/* Renderiza los elementos hijos proporcionados dentro del contenedor. */}
            {children
        }</div>
    );
};

// Exporta el componente "Container" para que pueda ser utilizado en otros archivos.
export default Container;
