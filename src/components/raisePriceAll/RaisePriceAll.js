import React, { useContext } from 'react'
import AppContext from '../../contexts/AppContext'

export default function RaisePriceAll() {

    const {setGames, _games} = useContext(AppContext);

    const handleOnRaisePriceAll = () => {
        _games.forEach(g => {
            g["price"] = g["price"]+g["price"]*1/4
        });
        setGames([..._games])
    }

  return (
    <div>
        <button type="submit" onClick={() => handleOnRaisePriceAll()}>Raise Price All +25%</button>
    </div>
  )
}
