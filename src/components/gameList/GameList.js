import React, { useContext } from 'react'
import AppContext from "../../contexts/AppContext"
import FilterByPrice from '../filterByPrice/FilterByPrice';
import Game from '../game/Game';
import RaisePriceAll from '../raisePriceAll/RaisePriceAll';

export default function GameList() {

  const { _games } = useContext(AppContext);

  return (
    <div>
      <h2>Games({_games.length})</h2>
      {
        _games.map((game) => (<div><Game game={game} /></div>))
      }
      <RaisePriceAll />
      <FilterByPrice />
    </div>
  )
}