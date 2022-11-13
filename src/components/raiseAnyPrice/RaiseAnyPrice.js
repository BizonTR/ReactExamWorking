import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import AppContext from '../../contexts/AppContext'

export default function RaiseAnyPrice() {

    const {selectedGame, setGames, _games,} = useContext(AppContext);

    const navigate = useNavigate()

    const handleRaiseAnyPrice = (e) =>{
        e.preventDefault();
        selectedGame.price = selectedGame.price+parseInt(e.target.raisePrice.value);
        setGames([..._games.filter(game => game.id !== selectedGame.id),selectedGame])
        navigate("/games")
    }

    return (
        <div>
            <h2>
                RaiseAnyPrice
            </h2>
            <form onSubmit={handleRaiseAnyPrice}>
                <input id='raisePrice' name='raisePrice' type="text" placeholder='Enter Amount' />
                <button type='submit'>Raise</button>
            </form>
        </div>
    )
}
