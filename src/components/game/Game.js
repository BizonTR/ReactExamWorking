import React, { Children, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext from '../../contexts/AppContext'

export default function Game(props) {

  const { _games, setGames, setSelectedGame, setGameDetail, selectedGame } = useContext(AppContext)

  const navigate = useNavigate();

  const handleDeleteOne = (id) => {
    setGames(_games.filter(game => game.id !== id))
  }

  const handleSelectOne = (game) => {
    setSelectedGame(game)
    navigate(`/game/update/${game.id}`)
  }

  const handleRaisePrice = (game) => {
    setGames([..._games.filter(g => g.id !== game.id),
    { id: game.id, gameName: game.gameName, price: game.price + game.price / 4, type: game.type, image: game.image }])
  }

  const handleOnDetails = (game) => {
    setGameDetail(game)
    navigate(`/game/details/${game.id}`)
  }

  const handleRaiseAnyPriceScreen = (game) => {
    setSelectedGame(game);
    navigate(`/game/raiseprice/${game.id}`);
  }

  return (
    <div>
      {props.game.gameName} - <b>Price:</b> {props.game.price}TL - <b>Type:</b> {props.game.type}
      <button type="submit" onClick={() => handleDeleteOne(props.game.id)}>Delete</button>
      <button type="submit" onClick={() => handleSelectOne(props.game)}>Select</button>
      <button type="submit" onClick={() => handleRaisePrice(props.game)}>Raise Price +25%</button>
      <button type="submit" onClick={() => handleRaiseAnyPriceScreen(props.game)}>Raise Price</button>
      <button type="submit" onClick={() => handleOnDetails(props.game)}>Details</button>
    </div>
  )
}