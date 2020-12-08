import React, { useState } from 'react';

const Opciones = (props) => {
    const piedra = {vence:['lagarto', 'tijera']}
    const papel =  {vence: ['piedra', 'spock']}
    const tijera =  {vence:['papel', 'lagarto']}
    const lagarto =  {vence:['spock', 'papel']}
    const spock =  {vence:['piedra', 'tijera']}

    const [opciones, setOpciones] = 
    useState ([piedra, papel, tijera, lagarto, spock])

    return (
        <div className="alineacion"> 
            <button value='piedra' className="jugada margin-top-md alineacion">
                <img className= 'img-size' src="/piedra.png"/>
            </button>
            <button value='papel' className="jugada margin-top-md alineacion">
                <img className= 'img-size' src="/papel.jpg"/>
            </button>
            <button value='tijera' className="jugada margin-top-md alineacion">
                <img className= 'img-size' src="/tijera.jpg"/>
            </button>
            <button value='lagarto' className="jugada margin-top-md alineacion">
                <img className= 'img-size' src="/lagarto.jpg"/>
            </button>
            <button value='spock' className="jugada margin-top-md alineacion">
                <img className= 'img-size' src="/spock.jpg"/>
            </button>
        </div>
    );
}

export default Opciones;