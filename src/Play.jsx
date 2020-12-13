import React from 'react';
import './App.css';
import Header from './Header.jsx';
import Options from './Options.jsx';

const Play = (props) => {

    const playerOne = localStorage.getItem('playerOne');
    const nameOne = JSON.parse(playerOne).name

    const playerTwo = localStorage.getItem('playerTwo');
    const nameTwo = JSON.parse(playerTwo).name

    return (
        <div>
            <Header />
            <div className='container'>
                <a className='main-title'> {nameOne} VS {nameTwo} </a>
                <Options playAgainstMachine={localStorage.getItem('playAgainstMachine')} />
            </div>
        </div>
    )
}

export default Play;
