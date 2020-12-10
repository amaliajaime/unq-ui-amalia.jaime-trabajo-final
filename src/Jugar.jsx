import React from 'react';
import './App.css';
import Header from './Header.jsx';
import Opciones from './Opciones.jsx';


const Jugar = (props) => {
    
    const playerOne = localStorage.getItem('playerOne');
    const nameOne = JSON.parse(playerOne).name

    const playerTwo = localStorage.getItem('playerTwo');
    const nameTwo = JSON.parse(playerTwo).name

    return(
        <div>
            <Header/>
            <a> {nameOne} VS {nameTwo} </a>
            <h4>Elegí tu tiro </h4>
            <Opciones/>
        </div>
    )
}

export default Jugar;
