import React from 'react';
import './Css/home.css';
import logo from './imagenes/logo.png';
const Main = () => {

  return (
    <div className="home">
        <section className="pan">
            <div className="logo">
            <img src={logo} alt="Logo Uleam" />

            </div>
            <div className="columns">
                <div className="column">
                    <legend><h1>VISIÓN</h1></legend>
                    <p>
                    Transformar vidas a través de oportunidades de educación, 
                    creando un futuro brillante para aquellos que sueñan con superarse.
                    </p>
                </div>
            <div className="column">
                    <legend><h1>MISIÓN</h1></legend>
                    <p>
                    Transformar vidas a través de oportunidades de educación, creando un 
                    futuro brillante para aquellos que sueñan con superarse.
                    </p>
            </div>
        </div>
      </section>
    </div>
     

  );
};

export default Main;
