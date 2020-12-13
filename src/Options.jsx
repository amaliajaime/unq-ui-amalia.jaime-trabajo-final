import React, { useEffect, useState } from 'react';
import Option from './Option.jsx'
import Player from './Player.jsx'
import Result from './Result.jsx'
import './App.css';

const Options = () => {

    const [playAgainstMachine, setPlayAgainstMachine] = useState('');

    const options = [
        { select: 'Piedra', win: ['Lagarto', 'Tijera'], image: '/piedra.png' },
        { select: 'Papel', win: ['Piedra', 'Spock'], image: '/papel.jpg' },
        { select: 'Tijera', win: ['Papel', 'Lagarto'], image: '/tijera.jpg' },
        { select: 'Lagarto', win: ['Spock', 'Papel'], image: '/lagarto.jpg' },
        { select: 'Spock', win: ['Piedra', 'Tijera'], image: '/spock.jpg' }
    ];

    const playerOne = localStorage.getItem('playerOne');
    const nameOne = JSON.parse(playerOne).name;
    const [victoriesOne, setVictoriesOne] = useState(0);
    const [selectOne, setSelectOne] = useState('');

    const playerTwo = localStorage.getItem('playerTwo');
    const nameTwo = JSON.parse(playerTwo).name;
    const [victoriesTwo, setVictoriesTwo] = useState(0);
    const [selectTwo, setSelectTwo] = useState('');

    const [notification, setNotification] = useState('');

    const [optionPlayerOne, setOptionPlayerOne] = useState('');
    const [optionPlayerTwo, setOptionPlayerTwo] = useState('');
    const [winner, setWinner] = useState('');

    const handleClickPlayerMachine = (election) => {
        setWinner('')
        setOptionPlayerOne(election)
        handleClickMachine()
    }

    const handleClickMachine = () => {
        const random = Math.round(Math.random() * 4);
        const select = options[random];
        setOptionPlayerTwo(select)
    }

    const handleClickPlayerOne = (election) => {
        setWinner('')
        setOptionPlayerOne(election)
    }

    const handleClickPlayerTwo = (election) => {
        setOptionPlayerTwo(election)
    }

    const playNotify = () => {
        if (optionPlayerOne.select) {
            setNotification('Turno del jugador ' + nameTwo)
        } else {
            setNotification('Seleccione su jugada')
        }
    }

    const play = () => {
        setNotification('')
        if (optionPlayerOne.select && optionPlayerTwo.select) {
            if (optionPlayerOne.select === optionPlayerTwo.select) {
                setWinner('GANADOR : EMPATE')
            } else {
                if (optionPlayerOne.win.includes(optionPlayerTwo.select)) {
                    setWinner('GANADOR: ' + nameOne)
                    setVictoriesOne(victoriesOne + 1);
                    localStorage.setItem('playerOne', JSON.stringify({ name: nameOne, victories: victoriesOne }));

                } else {
                    setWinner('GANADOR: ' + nameTwo)
                    setVictoriesTwo(victoriesTwo + 1);
                    localStorage.setItem('playerTwo', JSON.stringify({ name: nameTwo, victories: victoriesTwo }));
                }
            }
            setSelectOne(optionPlayerOne.select)
            setSelectTwo(optionPlayerTwo.select)
            setOptionPlayerOne('')
            setOptionPlayerTwo('')
        } else {
            setNotification('Seleccione su jugada')
        }
    }

    const restartGame = () => {
        setVictoriesOne(0)
        setVictoriesTwo(0)
        setWinner('')
        setSelectOne('')
        setSelectTwo('')
    }

    return (
       
        <div className='container center'>
            <div> {!localStorage.getItem('playAgainstMachine') ?
                <div>
                    <Player options={options} handleClickPlayer={handleClickPlayerMachine} play={play} />
                    <div className='error'>{notification}</div>
                </div>
                :
                <div>
                    <Player options={options} handleClickPlayer={handleClickPlayerOne} play={playNotify} />
                    <div className='error'>{notification}</div>
                    <Player options={options} handleClickPlayer={handleClickPlayerTwo} play={play} />
                </div>}
            </div>
            <Result restartGame={restartGame} winner={winner} nameOne={nameOne} nameTwo={nameTwo}
                selectOne={selectOne} selectTwo={selectTwo} victoriesOne={victoriesOne} victoriesTwo={victoriesTwo} />
        </div>
    );

}

export default Options;