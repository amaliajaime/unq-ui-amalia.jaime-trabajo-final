import React, { useEffect, useState } from 'react';
import Opcion from './Opcion.jsx'
import UnJugador from './UnJugador.jsx'
import './App.css';

const Opciones = () => {

    const [playAgainstMachine, setPlayAgainstMachine] = useState('');

    useEffect(() => {
        setPlayAgainstMachine(localStorage.getItem('playAgainstMachine'))
    }, [playAgainstMachine]);

    const opciones = [
        { eleccion: 'piedra', vence: ['lagarto', 'tijera'], imagen: '/piedra.png' },
        { eleccion: 'papel', vence: ['piedra', 'spock'], imagen: '/papel.jpg' },
        { eleccion: 'tijera', vence: ['papel', 'lagarto'], imagen: '/tijera.jpg' },
        { eleccion: 'lagarto', vence: ['spock', 'papel'], imagen: '/lagarto.jpg' },
        { eleccion: 'spock', vence: ['piedra', 'tijera'], imagen: '/spock.jpg' }
    ];

    const playerOne = localStorage.getItem('playerOne');
    const nameOne = JSON.parse(playerOne).name;
    const [victoriesOne, setVictoriesOne] = useState(0);

    const playerTwo = localStorage.getItem('playerTwo');
    const nameTwo = JSON.parse(playerTwo).name;
    const [victoriesTwo, setVictoriesTwo] = useState(0);

    const [aviso, setAviso] = useState('');

    const [opcionJugador, setOpcionJugador] = useState('');
    const [opcionJugador2, setOpcionJugador2] = useState('');
    const [ganador, setGanador] = useState('');

    const handleClickJugadorYMaquina = (eleccion) => {
        setGanador('')
        setOpcionJugador(eleccion)
        handleClickMaquina()
    }

    const handleClickMaquina = () => {
        const aleatorio = Math.round(Math.random() * 4);
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

    const jugarAviso = () => {
        setAviso('Turno del jugador ' + nameTwo)
    }

    const jugar = () => {
        setAviso('')

        if (opcionJugador.eleccion === opcionJugador2.eleccion) {
            setGanador('GANADOR : EMPATE')
        } else {
            if (opcionJugador.vence.includes(opcionJugador2.eleccion)) {
                setVictoriesOne(victoriesOne + 1);
                setGanador('GANADOR: ' + nameOne)
                localStorage.setItem('playerOne', JSON.stringify({ name: nameOne, victories: victoriesOne }));

            } else {
                setVictoriesTwo(victoriesTwo + 1);
                setGanador('GANADOR: ' + nameTwo)
                localStorage.setItem('playerTwo', JSON.stringify({ name: nameTwo, victories: victoriesTwo }));
            }
        }
        setOpcionJugador('')
        setOpcionJugador2('')
    }

    const reiniciarJuego = () => {
        setVictoriesOne(0)
        setVictoriesTwo(0)
        setGanador('')
    }

    return (
        <div>
            <div> {playAgainstMachine ?
                <UnJugador opciones={opciones} handleClickJugador={handleClickJugadorYMaquina} jugar={jugar} />
            :
                <div>
                    <UnJugador opciones={opciones} handleClickJugador={handleClickJugador} jugar={jugarAviso} />
                    <div>{aviso}</div>
                    <UnJugador opciones={opciones} handleClickJugador={handleClickJugador2} jugar={jugar} />
                </div> }
            </div>

            <div>
                {ganador}
            </div>
            <div>
                VICTORIAS {nameOne}:  {victoriesOne}
            </div>
            <div>
                VICTORIAS {nameTwo}: {victoriesTwo}
            </div>
            <div className="alineacion">
                <button className='button-style' onClick={reiniciarJuego}>Reiniciar</button>
            </div>
        </div>
    );
}

export default Opciones;