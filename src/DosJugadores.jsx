import React, { useEffect, useState } from 'react';

const DosJugadores = (props) => {

    const [state, setState] = useState('');

    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');

    useEffect(() => {
        setState(props.state)
    }, [state]);

    const changeName = (event) => {
        setPlayer1(event.target.value)
        console.log(event.target.value)
    }

    const changeName2 = (event) => {
        setPlayer2(event.target.value)
        console.log(event.target.value)
    }

    return(
        <div>
            <input value={player1} onChange={changeName} className="form-control mb-2" placeholder="Nombre jugador 1" />
            <input value={player2} disabled={state} onChange={changeName2} className="form-control mb-2" placeholder="Nombre jugador 2" />
        </div>
    );
}

export default DosJugadores;
