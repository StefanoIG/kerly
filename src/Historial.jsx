import React, { useState, useEffect } from 'react';

const Historial = () => {
  const [historial, setHistorial] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const datosHistorial = JSON.parse(localStorage.getItem('solicitudesBecas')) || [];
    const datosUsuarios = JSON.parse(localStorage.getItem('misDatos'))?.usuarios || [];
    setHistorial(datosHistorial);
    setUsuarios(datosUsuarios);
  }, []);

  const obtenerUsuario = (userId) => {
    return usuarios.find(user => user.id === userId);
  };

  return (
    <div>
      <h2>Historial de Solicitudes de Becas</h2>
      {historial.length > 0 ? (
        <table className="table-historial">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Edad</th>
              <th>Carrera</th>
            </tr>
          </thead>
          <tbody>
            {historial.map((item, index) => {
              const usuario = obtenerUsuario(item.userId);
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{usuario?.nombre || 'No disponible'}</td>
                  <td>{usuario?.email || 'No disponible'}</td>
                  <td>{item.edad}</td>
                  <td>{item.carrera}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No hay datos en el historial.</p>
      )}
    </div>
  );
  
};

export default Historial;
