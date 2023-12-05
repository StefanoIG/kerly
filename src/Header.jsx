import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Css/header.css';

const Header = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  
  const handleLogout = () => {
    setIsLoggedIn(false); 

    navigate('/login'); // Redirect to login after logout
  };

  return (
    <header className='header'>
      <nav>
        <ul>
          <li><Link to='/'>Inicio</Link></li>
          <li><Link to='/contacto'>Contacto</Link></li>
          {isLoggedIn ? (
            <>
              <li><Link to='/solicitud'>Solicitar  Becas</Link></li>
              <li><Link to='/historial'>Historial de Becas</Link></li>
              <li><button onClick={handleLogout}>Cerrar Sesión</button></li>
            </>
          ) : (
            <>
              <li><Link to='/register'>Registro</Link></li>
              <li><Link to='/login'>Login</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
