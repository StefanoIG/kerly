import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
// Importa tus componentes de Login y Registro
import Login from './Login'
import Registro from './Register';
import Header from './Header';
import Home from './Home';
import Solicitud from './Solicitud';
import Historial from './Historial';
import Contacto from './Contacto';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Esta función ahora recibe un valor booleano
  const handleLoginState = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); 

  };
  return (
      <BrowserRouter>
            <Header isLoggedIn={isLoggedIn} onLogout={() => handleLoginState(false)} />
            <Routes>
              <Route path="/login" element={<Login onLoginSuccess={() => handleLoginState(true)} />} />
              <Route path="/register" element={<Registro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/solicitud" element={<Solicitud />} />
               <Route path="/historial" element={<Historial />} /> 
               <Route path="/contacto" element={<Contacto />} /> 

            </Routes>
          </BrowserRouter>
  );
}

export default App;
