import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header.jsx';
import './App.css';

const Home = () => {
    const history = useHistory();
    const [playMachine, setPlayMachine] = useState('');

    const [namePlayerOne, setNamePlayerOne] = useState('');
    const [namePlayerTwo, setNamePlayerTwo] = useState('');
    const [error, setError] = useState('');

    const changeNameOne = (event) => {
        setNamePlayerOne(event.target.value)
    }

    const changeNameTwo = (event) => {
        setNamePlayerTwo(event.target.value)
    }

    const handleClickPlayer = (event) => {
        event.preventDefault();
        setPlayMachine(true);
        localStorage.setItem('playAwainstMachine', true)
        setNamePlayerTwo('Machine');
    }

    const handleClickPlayers = (event) => {
        event.preventDefault();
        setPlayMachine(false);
        localStorage.setItem('playAwainstMachine', false)
        //localStorage.setItem('playAwainstMachine', false)
    }

    const playGame = () => {
        if (namePlayerOne.length > 0 && namePlayerTwo.length > 0) {
            console.log(playMachine)
            console.log(localStorage.getItem('playAwainstMachine'))
            localStorage.setItem('playerOne', JSON.stringify({ name: namePlayerOne, victories: '' }))
            localStorage.setItem('playerTwo', JSON.stringify({ name: namePlayerTwo, victories: '' }))
            history.push(`/jugar`);
        } else {
            setError('Ingresar nombres de jugadores')
        }
    }

    return (
        <div>
            <Header />
            <form className='form-center'>
                <div className="card-body">
                    <div className='container wrapper'>
                        <div className='row'>
                            <div>
                                <button type="button" className="btn btn-dark" onClick={handleClickPlayer}>
                                    <img src="/player1.jpg" className="player" />
                                </button>
                                <button type="button" className="btn btn-dark" onClick={handleClickPlayers}>
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
                    <div className='error'>{error}</div>
                </div>
            </form>
        </div>
    );
};

export default Home;