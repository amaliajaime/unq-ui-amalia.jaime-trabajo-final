import React, { useEffect, useState } from 'react';
import Opcion from './Opcion.jsx'
import Jugador from './Jugador.jsx'
import Resultado from './Resultado.jsx'
import './App.css';

const Opciones = () => {

    const [playAgainstMachine, setPlayAgainstMachine] = useState('');

    const opciones = [
        { eleccion: 'Piedra', vence: ['lagarto', 'tijera'], imagen: '/piedra.png' },
        { eleccion: 'Papel', vence: ['piedra', 'spock'], imagen: '/papel.jpg' },
        { eleccion: 'Tijera', vence: ['papel', 'lagarto'], imagen: '/tijera.jpg' },
        { eleccion: 'Lagarto', vence: ['spock', 'papel'], imagen: '/lagarto.jpg' },
        { eleccion: 'Spock', vence: ['piedra', 'tijera'], imagen: '/spock.jpg' }
    ];

    const playerOne = localStorage.getItem('playerOne');
    const nameOne = JSON.parse(playerOne).name;
    const [victoriesOne, setVictoriesOne] = useState(0);
    const [selectOne, setSelectOne] = useState('');

    const playerTwo = localStorage.getItem('playerTwo');
    const nameTwo = JSON.parse(playerTwo).name;
    const [victoriesTwo, setVictoriesTwo] = useState(0);
    const [selectTwo, setSelectTwo] = useState('');

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
        const eleccion = opciones[aleatorio];
        setOpcionJugador2(eleccion)
    }

    const handleClickJugador = (eleccion) => {
        setGanador('')
        setOpcionJugador(eleccion)
    }

    const handleClickJugador2 = (eleccion) => {
        setOpcionJugador2(eleccion)
    }

    const jugarAviso = () => {
        if (opcionJugador.eleccion) {
            setAviso('Turno del jugador ' + nameTwo)
        } else {
            setAviso('Seleccione su jugada')
        }
    }

    const jugar = () => {
        setAviso('')
        if (opcionJugador.eleccion && opcionJugador2.eleccion) {
            if (opcionJugador.eleccion === opcionJugador2.eleccion) {
                setGanador('GANADOR : EMPATE')
            } else {
                if (opcionJugador.vence.includes(opcionJugador2.eleccion)) {
                    setGanador('GANADOR: ' + nameOne)
                    setVictoriesOne(victoriesOne + 1);
                    localStorage.setItem('playerOne', JSON.stringify({ name: nameOne, victories: victoriesOne }));

                } else {
                    setGanador('GANADOR: ' + nameTwo)
                    setVictoriesTwo(victoriesTwo + 1);
                    localStorage.setItem('playerTwo', JSON.stringify({ name: nameTwo, victories: victoriesTwo }));
                }
            }
            setSelectOne(opcionJugador.eleccion)
            setSelectTwo(opcionJugador2.eleccion)
            setOpcionJugador('')
            setOpcionJugador2('')
        } else {
                setAviso('Seleccione su jugada')
        }
    }

    const reiniciarJuego = () => {
        setVictoriesOne(0)
        setVictoriesTwo(0)
        setGanador('')

        setSelectOne('')
        setSelectTwo('')
    }

    return (
        <div className='container centrar'>
            <div> { !localStorage.getItem('playAwainstMachine') ?
                <div>
                    <Jugador opciones={opciones} handleClickJugador={handleClickJugadorYMaquina} jugar={jugar} />
                    <div className='error'>{aviso}</div>
                </div>
                :
                <div>
                    <Jugador opciones={opciones} handleClickJugador={handleClickJugador} jugar={jugarAviso} />
                    <div className='error'>{aviso}</div>
                    <Jugador opciones={opciones} handleClickJugador={handleClickJugador2} jugar={jugar} />
                </div>}
            </div>
            <Resultado reiniciarJuego={reiniciarJuego} ganador={ganador} nameOne={nameOne} nameTwo={nameTwo}
                selectOne={selectOne} selectTwo={selectTwo} victoriesOne={victoriesOne} victoriesTwo={victoriesTwo} />
        </div>
    );
}

export default Opciones;