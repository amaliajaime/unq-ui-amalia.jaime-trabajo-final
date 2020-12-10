import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header.jsx';
import Jugar from './Jugar.jsx';
import DosJugadores from './DosJugadores.jsx';
import './App.css';

const Home = () => {
    const history = useHistory();

    const [isMachine, setIsMachine] = useState('');

    const [players, setPlayers] = useState('');

    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');

    const changeName = (event) => {
        setName1(event.target.value)
        console.log(event.target.value)
    }

    const changeName2 = (event) => {
        setName2(event.target.value)
        console.log(event.target.value)
    }

    const handleClickPlayer = (event) => {
        event.preventDefault();
        setPlayers('1');
        setIsMachine(true);
        console.log(players);
    }

    const handleClickPlayers = (event) => {
        event.preventDefault();
        setPlayers('2')
        setIsMachine(false);
        console.log(players);
    }

    const playGame = () => {
        if(players=='1'){
            localStorage.setItem('jugador1', JSON.stringify({nombre:name1, victorias:''}))
        } else {
            localStorage.setItem('jugador1', JSON.stringify({nombre:name1, victorias:''}))
            localStorage.setItem('jugador2', JSON.stringify({nombre:name2, victorias:''}))
        }
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
            <a> Se seleccionó {players} jugador/es </a>
        </div>
        <div>
            <input value={name1} onChange={changeName} className="form-control mb-2" placeholder="Ingrese su nombre" />
            <input value={name2} disabled={isMachine} onChange={changeName2} className="form-control mb-2" placeholder="Ingrese su nombre" />
        </div>
            <button type="button" onClick={playGame}>Jugar</button>
        </form>
    </div>

      );
};

export default Home;