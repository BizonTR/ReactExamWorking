import React, { useContext } from 'react'
import AppContext from '../../contexts/AppContext'

export default function GameDetails() {

    const { gameDetail } = useContext(AppContext);

    return (
        <div>
            <h2>Game Details</h2>
            {gameDetail.gameName} - <b>Price:</b> {gameDetail.price}TL - <b>Type:</b> {gameDetail.type} <br></br>
            <img src={gameDetail.image} width="500" height="300"></img>
        </div>
    )
}
