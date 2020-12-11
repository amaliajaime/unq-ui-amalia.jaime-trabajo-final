import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header.jsx';
import './App.css';

const Home = () => {
    const history = useHistory();
    const [playMachine, setPlayMachine] = useState('');

    const [namePlayerOne, setNamePlayerOne] = useState('');
    const [namePlayerTwo, setNamePlayerTwo] = useState('');

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
        setNamePlayerTwo('Machine');
        setPlayMachine(true);
        localStorage.setItem('playAgainstMachine', true)
    }

    const handleClickPlayers = (event) => {
        event.preventDefault();
        setPlayMachine(false);
        localStorage.setItem('playAgainstMachine', false)
    }

    const playGame = () => {
        localStorage.setItem('playAgainstMachine', playMachine)
        localStorage.setItem('playerOne', JSON.stringify({ name: namePlayerOne, victories: '' }))
        localStorage.setItem('playerTwo', JSON.stringify({ name: namePlayerTwo, victories: '' }))
        history.push(`/jugar`);
    }

    return (
        <div>
            <Header />
            <form className='form-center'>
                <div class="card-body">
                    <div className='container wrapper'>
                        <div className='row'>
                            <div>
                                <button type="button" className="btn btn-dark" onClick={handleClickPlayer} type="button">
                                    <img src="/player1.jpg" className="player" />
                                </button>
                                <button type="button" className="btn btn-dark" onClick={handleClickPlayers} type="button">
                                    <img src="/player2.jpg" className="player" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='container wrapper'>
                        <div className='row'>
                            <input value={namePlayerOne} onChange={changeNameOne} className="input-options" placeholder="Ingrese su nombre" />
                            <input value={namePlayerTwo} disabled={playMachine} onChange={changeNameTwo} className="input-options" placeholder="Ingrese su nombre" />
                            <button className='button-style' type="button" onClick={playGame}>Jugar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Home;