import { useContext } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import GameAdd from './components/gameAdd/GameAdd';
import GameDetails from './components/gameDetails/GameDetails';
import GameList from './components/gameList/GameList';
import GameUpdate from './components/gameUpdate/GameUpdate';
import RaiseAnyPrice from './components/raiseAnyPrice/RaiseAnyPrice';
import AppContext from "./contexts/AppContext"

function App() {

  const { appName } = useContext(AppContext)

  return (
    <div>
      <h1>{appName}</h1>

      <ul>
        <li><Link to="/">HomePage</Link></li>
        <li><Link to="/games">Games</Link></li>
        <li><Link to="/game/add">Game Add</Link></li>
      </ul>

      <Routes>
        <Route path='/games' element={<GameList />}></Route>
        <Route path='/game/update/:id' element={<GameUpdate />}></Route>
        <Route path='/game/add' element={<GameAdd />}></Route>
        <Route path='/game/details/:id' element={<GameDetails />}></Route>
        <Route path='/game/raiseprice/:id' element={<RaiseAnyPrice />}></Route>
      </Routes>
    </div>
    //bir butonla bütün oyunların fiyatını 25% arttıran buton
  );
}

export default App;
