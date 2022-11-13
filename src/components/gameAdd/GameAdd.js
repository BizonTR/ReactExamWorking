import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import AppContext from '../../contexts/AppContext';

export default function GameAdd() {

    const {_games, setGames} = useContext(AppContext)

    const navigate = useNavigate();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const newGame = {
            id: _games.length + 1,
            gameName: e.target.gameName.value,
            price: e.target.price.value,
            type: e.target.type.value,
            image: e.target.image.value
        }
        setGames([..._games, newGame])
        navigate("/games")
    }
    return (
        <div>
            <h2>Game Add</h2>
            <form onSubmit={handleOnSubmit}>
                <input id='gameName' name='gameName' type="text" placeholder='Game Name' /><br></br>
                <input id='price' name='price' type="text" placeholder='Price' /><br></br>
                <input id='type' name='type' type="text" placeholder='Type' /><br></br>
                <input id='image' name='image' type="text" placeholder='Image URL' /><br></br>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}