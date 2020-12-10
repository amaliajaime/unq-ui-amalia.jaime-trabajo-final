import React, { useState, useEffect } from 'react';

const Opcion = (props) => {

    const handleClick = (eleccion) => {
        props.handleClickJugador(eleccion)
        console.log(eleccion)
    }

    return(
        <button onClick={()=> handleClick(props.seleccionado)} className="jugada margin-top-md alineacion">
            <img className= 'img-size' src={props.imagen}/>
        </button>
    )
}

export default Opcion;