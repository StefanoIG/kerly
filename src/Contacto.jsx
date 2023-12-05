import React, { useState } from 'react';
import Swal from 'sweetalert2';


const Contacto = () => {
  const [contactoData, setContactoData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactoData({
      ...contactoData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Verificar si los campos requeridos están llenos
    const { nombre, email, asunto, mensaje } = contactoData;
    if (!nombre.trim() || !email.trim() || !asunto.trim() || !mensaje.trim()) {
      // Mostrar alerta de campos vacíos
      Swal.fire({
        icon: 'error',
        title: 'Campos incompletos',
        text: 'Por favor, completa todos los campos.',
        toast: true,
        position: 'top-start',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
      });
      return;
    }
  
    // Aquí va tu lógica para manejar el envío del formulario
    console.log('Formulario enviado:', contactoData);
  
    // Mostrar alerta de envío exitoso
    Swal.fire({
      icon: 'success',
      title: 'Mensaje enviado',
      text: 'Tu mensaje ha sido enviado con éxito.',
      toast: true,
      position: 'top-start',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
  
    // Opcional: Resetear el formulario después del envío
    setContactoData({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    });
  };
  

  return (
    <div className="form-container">
      <div className="box-info">
        <header></header>
        <h1>CONTACTA CON NOSOTROS</h1>
        <div className="data">
          <p> +593 987491147</p>
          <p>becas@live.uleam.edu.ec</p>
          <p> Circunvalación – Vía San Mateo, Manta – Manabí – Ecuador</p>
        </div>
        <div className="links">
          <a href="https://www.facebook.com/UleamEc"></a>
          <a href="https://www.instagram.com/uleam_ecuador_oficial/"></a>
          <a href="https://twitter.com/UleamEcuador"></a>
          <a href="https://www.linkedin.com/school/universidad-laica-eloy-alfaro-de-manabi/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=ec"></a>
        </div>
      </div>
      <form onSubmit={handleSubmit} className='form-container'>
      
      <div className="form-group">
            <div className="input-box">
            <input type="text" placeholder="Nombre y apellido" name="nombre" required onChange={handleChange} />
            </div>
        </div>

        <div className="form-group">

            <div className="input-box">
            <input type="email" required placeholder="Correo electrónico" name="email" onChange={handleChange} />
            </div>
        </div>
    
        <div className="form-group">
            <div className="input-box">
            <input type="text" placeholder="Asunto" name="asunto" onChange={handleChange} />
            </div>
        </div>

        <div className="form-group">
            <div className="input-box">
            <textarea placeholder="Escribe tu mensaje..." name="mensaje" onChange={handleChange}></textarea>
            </div>
        </div>
        <button type="submit"><b>Enviar mensaje</b></button>
      </form>
    </div>
  );
};

export default Contacto;
