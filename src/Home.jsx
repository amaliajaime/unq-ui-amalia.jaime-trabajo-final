import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Jugar from './Jugar.jsx';
import DosJugadores from './DosJugadores.jsx';
import './App.css';

const Home = () => {
    const history = useHistory();
    
    const [state, setState] = useState('');

    const [player, setPlayer] = useState('');

    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');

    const changeName = (event) => {
        setPlayer1(event.target.value)
        console.log(event.target.value)
    }

    const changeName2 = (event) => {
        setPlayer2(event.target.value)
        console.log(event.target.value)
    }

    const handleClickPlayer = (event) => {
        event.preventDefault();
        setPlayer('1');
        setState(true);
        console.log(player);
    }

    const handleClickPlayers = (event) => {
        event.preventDefault();
        setPlayer('2')
        setState(false);
        console.log(player);
    }

    const playGame = () => {
        history.push(`/jugar`);
    }

    return(
    <div>
        <h1>Piedra, Papel, Tijera, Lagarto o Spock</h1>
        <form>
        <div>
            <button onClick={handleClickPlayer} className="image-button margin-top-md">
                <img src="/player1.jpg" className="player"/>
            </button>

            <button onClick={handleClickPlayers} className="image-button margin-top-md">
                <img src="/player2.jpg" className="player"/>
            </button>
            <a> Se seleccionó {player} jugador/es </a>
        </div>
        <div>
            <input value={player1} onChange={changeName} className="form-control mb-2" placeholder="Nombre jugador 1" />
            <input value={player2} disabled={state} onChange={changeName2} className="form-control mb-2" placeholder="Nombre jugador 2" />
        </div>
            <button type="button" onClick={playGame}>Jugar</button>
        </form>
    </div>

      );
};

export default Home;