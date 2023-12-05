import React, { useState, useEffect } from 'react';

const Historial = () => {
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    const datosHistorial = JSON.parse(localStorage.getItem('solicitudesBecas')) || [];
    setHistorial(datosHistorial);
  }, []);

  return (
    <div>
      <h2>Historial de Solicitudes de Becas</h2>
      {historial.length > 0 ? (
        <table className="table-historial">

          <thead>
            <tr>
              <th>ID</th>
              <th>Edad</th>
              <th>Carrera</th>
              {/* Añade más columnas según los datos que quieras mostrar */}
            </tr>
          </thead>
          <tbody>
            {historial.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td> {/* ID basado en el índice del array */}
                <td>{item.edad}</td>
                <td>{item.carrera}</td>
                {/* Añade más celdas según los datos que quieras mostrar */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay datos en el historial.</p>
      )}
    </div>
  );
};

export default Historial;
