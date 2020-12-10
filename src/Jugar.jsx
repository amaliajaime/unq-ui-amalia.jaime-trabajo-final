import React from 'react';
import './App.css';
import Header from './Header.jsx';
import Opciones from './Opciones.jsx';


const Jugar = (props) => {
    
    const jugador1 = localStorage.getItem('jugador1');
    const nombre = JSON.parse(jugador1).nombre

    return(
        <div>
            <Header/>
            <a> {nombre} VS Machine </a>
            <h4>Elegí tu tiro </h4>
            <Opciones/>
        </div>
    )
}

export default Jugar;
