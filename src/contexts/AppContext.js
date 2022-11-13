import React, { createContext, useContext, useState } from 'react'
import {games} from "../data/Games"

const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [_games,setGames] = useState(games)
    const [selectedGame, setSelectedGame] = useState({ id: 0, gameName: "", price: "", type: "", image: "" });
    const [gameDetail, setGameDetail] = useState({ id: 0, gameName: "", price: "", type: "", image: "" })

    const values = {
        appName : "GameApp",
        _games,
        setGames,
        selectedGame,
        setSelectedGame,
        gameDetail,
        setGameDetail
    }

  return (
    <AppContext.Provider value={values}>{children}</AppContext.Provider>
  )
}

export default AppContext;
