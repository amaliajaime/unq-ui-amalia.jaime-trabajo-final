import React, { useState } from 'react';
import Opcion from './Opcion.jsx'

const Opciones = () => {

    const jugador1 = localStorage.getItem('jugador1');
    const nombre = JSON.parse(jugador1).nombre

    const [opcionJugador, setOpcionJugador] = useState(''); 
    const [opcionJugador2, setOpcionJugador2] = useState('');
    const [ganador, setGanador] = useState('');

    const opciones = [
        {eleccion: 'piedra', vence:['lagarto', 'tijera'], imagen:'/piedra.png'},
        {eleccion: 'papel', vence: ['piedra', 'spock'], imagen:'/papel.jpg'},
        {eleccion: 'tijera', vence: ['papel', 'lagarto'], imagen:'/tijera.jpg'},
        {eleccion: 'lagarto', vence: ['spock', 'papel'], imagen:'/lagarto.jpg'},
        {eleccion: 'spock', vence: ['piedra', 'tijera'], imagen:'/spock.jpg'}
    ];

    const handleClickJugador = (eleccion) => {
        setGanador('')
        console.log('eleccion jugador1', eleccion)
        setOpcionJugador(eleccion)
        console.log('jugador1', opcionJugador)
        handleClickJugador2()
    }

    const handleClickJugador2  = () => {
        const aleatorio = Math.round(Math.random()*4);
        const jugada2 = opciones[aleatorio];
        console.log('eleccion maquina', jugada2)
        setOpcionJugador2(jugada2)
        console.log('jugador maquina', opcionJugador2)
    }

    const jugar = () => {
        
        if(opcionJugador.eleccion === opcionJugador2.eleccion){
            setGanador('EMPATE')
        } else {
            if (opcionJugador.vence.includes(opcionJugador2.eleccion)){
                setGanador(nombre)
            } else {
                setGanador('MAQUINA')
            }
        }
        console.log(ganador)

        setOpcionJugador('')
        setOpcionJugador2('')
    }

    return (
        <div>
            <div className="alineacion">
                {opciones.map((opcion) => <Opcion key={opcion.eleccion} imagen={opcion.imagen} seleccionado={opcion} handleClickJugador={handleClickJugador} />)}
            </div>
            <div className="alineacion">
                <button onClick={jugar} className="">Jugar</button>
            </div>
            <div>
                {ganador}
            </div>
        </div>
    );
}

export default Opciones;