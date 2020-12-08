import React from 'react';

const Jugar = (props) => {

    return(
        <div>
            <h1>Un Jugador</h1>
            <a>Hola {props.user} </a>
        </div>
    )
}

export default Jugar;