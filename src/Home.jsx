import React, { useState } from 'react';
import Jugar from './Jugar.jsx';

const Home = () => {

    const [player, setPlayer] = useState('');
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');

    const options=[
        {label:'Select', value:'0'},
        {label:'1 PLayer', value:'1'},
        {label:'2 Players', value:'2'},
    ]
    
    const handleClickPlayer = (event) => {
        event.preventDefault();
        setPlayer('1');
        console.log(player);
    }

    const handleClickPlayers = (event) => {
        event.preventDefault();
        setPlayer('2')
        console.log(player);
    }

    const playGame = () => {
        return(
        <Jugar user={player} />
        );
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
        <div>
            <button onClick={handleClickPlayer} className="image-button margin-top-md">
                <img src="/player1.png" className=""/>
            </button>

            <button onClick={handleClickPlayers} className="image-button margin-top-md">
                <img src="/player2.png" className=""/>
            </button>
            <a> Se seleccionaron {player} jugador/es </a>
        </div>


        <div>
        </div>



            {player.value === 2 ?
               <div>
                    <input value={player1} onChange={changeName} className="form-control mb-2" placeholder="Player 1" />
                    <input value={player2} onChange={changeName2} className="form-control mb-2" placeholder="Player 2" />
                </div> :
                <div>
                    <input value={player1} onChange={changeName} className="form-control mb-2" placeholder="Player 1" />
                </div> }
            <button type="button" onClick={playGame}>Jugar</button>
        </form>
    </div>

      );
};

export default Home;