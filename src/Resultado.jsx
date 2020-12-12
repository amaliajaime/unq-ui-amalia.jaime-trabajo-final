import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header.jsx';
import './App.css';

const Resultado = (props) => {

    const reiniciarJuego = () => {
        props.reiniciarJuego()
    }

    return (
        <div className='result'>
            <div> {props.ganador} </div>
            <div>
                Victorias {props.nameOne}:  {props.victoriesOne}
            </div>
            <div>
                Elección {props.nameOne}: {props.selectOne}
            </div>
            <div>
                Victorias {props.nameTwo}: {props.victoriesTwo}
            </div>
            <div>
                Elección {props.nameTwo}: {props.selectTwo}
            </div>
            <div className="reiniciar-partida">
                <button className='button-style' onClick={reiniciarJuego}>Reiniciar</button>
            </div>
        </div>
    );
}

export default Resultado;