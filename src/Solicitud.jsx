import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const SolicitudBecas = () => {
  const [formData, setFormData] = useState({
    edad: '',
    carrera: '',
    unidad: '',
    ingresos: '',
    motivacion: '',
  });
  const navigate = useNavigate(); // Instancia de useNavigate

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Actualizar formData
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  
    // Validación para edad
    if (name === 'edad') {
      const edadNum = Number(value);
      if (edadNum < 15 || edadNum > 90) {
        // Muestra una alerta si la edad está fuera del rango permitido
        Swal.fire({
          toast: true,
          position: 'top-start',
          icon: 'error',
          title: 'La edad debe estar entre 15 y 90 años.',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          }
        });
      } else {
        // Si la edad es válida, asegúrate de eliminar cualquier error de edad previamente establecido
        const newErrors = { ...errors };
        delete newErrors.edad;
        setErrors(newErrors);
      }
    }
  };
  

  const enviarFormulario = (e) => {
    e.preventDefault();
    
    // Verificar si alguno de los campos está vacío
    const camposVacios = Object.values(formData).some(x => x.trim() === '');
    const edadInvalida = formData.edad < 15 || formData.edad > 90;
  
    if (camposVacios || edadInvalida) {
      Swal.fire({
        toast: true,
        position: 'top-start',
        icon: 'error',
        title: 'Por favor, completa todos los campos correctamente.',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
      });

    }
  
    const datosGuardados = JSON.parse(localStorage.getItem('solicitudesBecas')) || [];
    datosGuardados.push(formData);
    localStorage.setItem('solicitudesBecas', JSON.stringify(datosGuardados));
    console.log(datosGuardados)

            // Mostrar un mensaje de éxito
    Swal.fire({
        toast: true,
        icon: 'success',
        title: 'Solicitud enviada con éxito',
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);}
      }).then(() => {
        navigate('/historial'); // Navega a la página de historial
      });
  
  
 
  

  };
  

  

  return (
    <>
    <div className="form-container">
    <form id="form-becas" onSubmit={enviarFormulario}>
        <h1>Solicitud de becas</h1>
        <br />

        <div className="form-group-row">
            
            <div className="form-group">
            <label htmlFor="edad">Edad:</label>
            <input type="number" id="edad" name="edad" required onChange={handleChange} />
            </div>

  
            <div className="form-group">
            <label htmlFor="carrera">Carrera</label>
            <input type="text" id="carrera" name="carrera" required onChange={handleChange} />
            </div>
        </div>

        <div className="form-group">
          <label htmlFor="unidad">Unidad de organización curricular</label>
          <input type="text" id="unidad" name="unidad" required onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="ingresos">Ingresos mensuales:</label>
          <input type="number" id="ingresos" name="ingresos" required onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="motivacion">Motivación:</label> <br />
          <textarea id="motivacion" name="motivacion" required onChange={handleChange}></textarea>
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
      
    </>
  );
};

export default SolicitudBecas;
