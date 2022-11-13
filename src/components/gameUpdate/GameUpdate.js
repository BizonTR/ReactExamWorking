import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext from '../../contexts/AppContext'

export default function GameUpdate() {

    const { _games, setGames, selectedGame, setSelectedGame } = useContext(AppContext)

    const navigate = useNavigate();

    const handleChange = (e) => {
        setSelectedGame({
            ...selectedGame,
            [e.target.name]: e.target.value //selectedGame'nin 3 hanenisinin, formdaki 3 hanedeki değerlerin her birinine sürekli eşitlenmesini sağlar ve yazılan değişiklikler json formatında hemen görünür olur.
        })
    }

    const handleUpdateGame = (e) => {
        e.preventDefault();
        setGames([
            ..._games.filter(game => game.id !== selectedGame.id),
            selectedGame,
        ])
        navigate("/games")
    }

    return (
        <div>
            <h2>Game Update</h2>
            <p>
                {JSON.stringify(selectedGame)}
            </p>
            <form onSubmit={handleUpdateGame}>
                <input id='gameName' name='gameName' onChange={handleChange} value={selectedGame?.gameName} type="text" placeholder='Game Name' /><br></br>
                <input id='price' name='price' onChange={handleChange} value={selectedGame?.price} type="text" placeholder='Price' /><br></br>
                <input id='type' name='type' onChange={handleChange} value={selectedGame?.type} type="text" placeholder='Type' /><br></br>
                <input id='image' name='image' onChange={handleChange} value={selectedGame?.image} type="text" placeholder='Image URL' /><br></br>
                <button type='submit'>Update</button>
            </form>
        </div>
    )
}
