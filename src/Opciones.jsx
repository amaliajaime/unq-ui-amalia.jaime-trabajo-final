import React, { useEffect, useState } from 'react';
import Opcion from './Opcion.jsx'

const Opciones = () => {

    const opciones = [
        {eleccion: 'piedra', vence:['lagarto', 'tijera'], imagen:'/piedra.png'},
        {eleccion: 'papel', vence: ['piedra', 'spock'], imagen:'/papel.jpg'},
        {eleccion: 'tijera', vence: ['papel', 'lagarto'], imagen:'/tijera.jpg'},
        {eleccion: 'lagarto', vence: ['spock', 'papel'], imagen:'/lagarto.jpg'},
        {eleccion: 'spock', vence: ['piedra', 'tijera'], imagen:'/spock.jpg'}
    ];

    const playerOne = localStorage.getItem('playerOne');
    const nameOne = JSON.parse(playerOne).name

    const playerTwo = localStorage.getItem('playerTwo');
    const nameTwo = JSON.parse(playerTwo).name

    const [advertencia, setAdvertencia] = useState(''); 

    const [opcionJugador, setOpcionJugador] = useState(''); 
    const [opcionJugador2, setOpcionJugador2] = useState('');
    const [ganador, setGanador] = useState('');

   /* useEffect(() => {
        
        
    }, [opcionJugador]);*/

    const handleClickJugadorYMaquina = (eleccion) => {
        setGanador('')
        setOpcionJugador(eleccion)

        handleClickMaquina()
    }

    const handleClickMaquina  = () => {
        const aleatorio = Math.round(Math.random()*4);
        const jugada2 = opciones[aleatorio];
        setOpcionJugador2(jugada2)
    }

    const handleClickJugador = (eleccion) => {
        setGanador('')
        setOpcionJugador(eleccion)
        
    }

    const handleClickJugador2 = (eleccion) => {
        setGanador('')
        setOpcionJugador2(eleccion) 
    }

    const jugar= () => {
    setAdvertencia('Turno del jugador 2')
    }

    const jugarMaquina = () => {
        console.log('1', opcionJugador)
        console.log('maquina', opcionJugador2)
       
        if(opcionJugador.eleccion === opcionJugador2.eleccion){
            setGanador('EMPATE')
        } else {
            if (opcionJugador.vence.includes(opcionJugador2.eleccion)){
                setGanador(nameOne)
            } else {
                setGanador(nameTwo)
            }
        }

        console.log(ganador)
        setOpcionJugador('')
        setOpcionJugador2('')
    }

    return (
        <div>
                {(localStorage.getItem('playAgainstMachine')) ? 
                <div>
                    <div className="alineacion">
                        {opciones.map((opcion) => <Opcion key={opcion.eleccion} imagen={opcion.imagen} seleccionado={opcion} handleClickJugador={handleClickJugadorYMaquina} />)}
                    </div>
                    <div className="alineacion">
                        <button onClick={jugarMaquina} className="">Jugar</button>
                    </div>
                </div>

                : 
                <div>
                    <div className="alineacion">
                        {opciones.map((opcion) => <Opcion key={opcion.eleccion} imagen={opcion.imagen} seleccionado={opcion} handleClickJugador={handleClickJugador} />)}
                    </div>
                    <div className="alineacion">
                        <button onClick={jugar} className="">Jugar</button>
                    </div>
                    <div>{advertencia}</div>
                    <div className="alineacion">
                        {opciones.map((opcion) => <Opcion key={opcion.eleccion} imagen={opcion.imagen} seleccionado={opcion} handleClickJugador={handleClickJugador2} />)}
                    </div>
                    <div className="alineacion">
                        <button onClick={jugarMaquina} className="">Jugar</button>
                    </div> 

                </div> }
                <div> 

                    {ganador}
                </div>
        </div>

    );
}

export default Opciones;