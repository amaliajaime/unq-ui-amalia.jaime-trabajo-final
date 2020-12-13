import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header.jsx';
import './App.css';

const Result = (props) => {

    const restartGame = () => {
        props.restartGame()
    }

    return (
        <div className='result'>
            <div> {props.winner} </div>
            <div class='border-result'> 
                Victorias {props.nameOne}:  {props.victoriesOne}
            </div>
            <div>
                Elección {props.nameOne}: {props.selectOne}
            </div>
            <div class='border-result'>
                Victorias {props.nameTwo}: {props.victoriesTwo}
            </div>
            <div>
                Elección {props.nameTwo}: {props.selectTwo}
            </div>
            <div className="reiniciar-partida">
                <button className='button-style' onClick={restartGame}>Reiniciar</button>
            </div>
        </div>
    );    
}

export default Result;