import React, { useState } from 'react';

const UnJugador = () => {

    const [player1, setPlayer1] = useState('');
    
    const changeName = (event) => {
        setPlayer1(event.target.value)
        console.log(event.target.value)
    }

    return(
        <div>
            <input value={player1} onChange={changeName} className="form-control mb-2" placeholder="Player 1" />
        </div>
    )
}

export default UnJugador;
