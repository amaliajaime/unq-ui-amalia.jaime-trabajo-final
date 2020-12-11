import React, { useState } from 'react';
import Opcion from './Opcion.jsx'
import './App.css';

const UnJugador = (props) => {

    const handleClickJugador = (eleccion) => {
        props.handleClickJugador(eleccion)
        console.log(eleccion)
    } 

    const jugar=() => {
        props.jugar()
    }

    return (
        <div>
            <div className="alineacion">
                {props.opciones.map((opcion) => <Opcion key={opcion.eleccion} imagen={opcion.imagen} seleccionado={opcion} handleClickJugador={handleClickJugador} />)}
            </div>
            <div className="alineacion">
                <button className='button-style' onClick={jugar}>Jugar</button>
            </div>
        </div>
    )
}

export default UnJugador;
