import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header.jsx';
import Jugar from './Jugar.jsx';
import DosJugadores from './DosJugadores.jsx';
import './App.css';

const Home = () => {
    const history = useHistory();

    const [playMachine, setPlayMachine] = useState('');

    const [namePlayerOne, setNamePlayerOne] = useState('');
    const [namePlayerTwo, setNamePlayerTwo] = useState('Machine');

    const changeNameOne = (event) => {
        setNamePlayerOne(event.target.value)
        console.log(event.target.value)
    }

    const changeNameTwo = (event) => {
        setNamePlayerTwo(event.target.value)
        console.log(event.target.value)
    }

    const handleClickPlayer = (event) => {
        event.preventDefault();
        setPlayMachine(true);
        localStorage.setItem('playAgainstMachine', playplayMachine)
    }

    const handleClickPlayers = (event) => {
        event.preventDefault();
        setPlayMachine(false);
        localStorage.setItem('playAgainstMachine', playplayMachine)
    }

    const playGame = () => {
        localStorage.setItem('playerOne', JSON.stringify({name:namePlayerOne, victories:''}))
        localStorage.setItem('playerTwo', JSON.stringify({name:namePlayerTwo, victories:''}))
        history.push(`/jugar`);
    }

    return(
    <div>
        <Header/>
        <form>
        <div>
            <button onClick={handleClickPlayer} className="image-button margin-top-md">
                <img src="/player1.jpg" className="player"/>
            </button>

            <button onClick={handleClickPlayers} className="image-button margin-top-md">
                <img src="/player2.jpg" className="player"/>
            </button>
        </div>
        <div>
            <input value={namePlayerOne} onChange={changeNameOne} className="form-control mb-2" placeholder="Ingrese su nombre" />
            <input value={namePlayerTwo} disabled={playMachine} onChange={changeNameTwo} className="form-control mb-2" placeholder="Ingrese su nombre" />
        </div>
            <button type="button" onClick={playGame}>Jugar</button>
        </form>
    </div>

      );
};

export default Home;