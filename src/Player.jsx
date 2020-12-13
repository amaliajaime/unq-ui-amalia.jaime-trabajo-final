import React from 'react';
import Option from './Option.jsx'
import './App.css';

const Player = (props) => {

    const handleClickPlayer = (election) => {
        props.handleClickPlayer(election)
    } 

    const play=() => {
        props.play()
    }

    return (
        <div>
            <div className="alineacion input-font">
                {props.options.map((option) => <Option key={option.select} image={option.image} select={option} handleClickPlayer={handleClickPlayer} />)}
            </div>
            <div className="alineacion centrar">
                <button className='button-style' onClick={play}>Jugar</button>
            </div>
        </div>
    )
}

export default Player;
