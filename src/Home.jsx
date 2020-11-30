import React, { useState } from 'react';

const Home = () => {

    const [player, setPlayer] = useState('');
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');

    const options=[
        {label:'Select', value:'0'},
        {label:'1 PLayer', value:'1'},
        {label:'2 Players', value:'2'},
      ]
    
    const handleChange = (event) => {
        setPlayer(event.target.value)
    }

    const playGame = () => {

    }

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
        <h1>Piedra, Papel, Tijera, Lagarto o Spock</h1>
        <form>
            <select name={options}  options={options} onChange={handleChange}>
                {options.map(optionPLayer => <option key={optionPLayer.value} value={optionPLayer.value}>{optionPLayer.label}</option>)}
            </select>
            <button type="button" onClick={playGame}>Jugar</button>
        </form>
    </div>

      );
};

export default Home;