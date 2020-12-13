import React, { useState, useEffect } from 'react';

const Option = (props) => {

    const handleClick = (election) => {
        props.handleClickPlayer(election)
    }

    return(
        <button onClick={()=> handleClick(props.select)} className="jugada margin-options alineacion">
            <img className= 'img-size' src={props.image}/>
        </button>
    )
}

export default Option;