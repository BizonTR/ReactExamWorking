import React, { useContext } from 'react'
import AppContext from '../../contexts/AppContext'

export default function FilterByPrice() {

    const { _games, setGames } = useContext(AppContext)

    const handleOnFilterByPrice = (e) => {
        e.preventDefault();
        setGames([..._games.filter(g => g.price < parseInt(e.target.price.value))])
        //setGames(_games.filter(g => g.price < parseInt(e.target.price.value))) bu da aynı şeyi yapar.
    }

    const refreshPage = () => {
        window.location.reload(false);
      }

    return (
        <div>
            <h2>Filter By Price</h2>
            <form onSubmit={handleOnFilterByPrice}>
                <input id='price' name='price' type="text" placeholder='Enter Maximum Price' /><br></br>
                <button type='submit'>Filter</button>
                <button type='submit' onClick={() => refreshPage()}>Return To First List</button>
            </form>
        </div>
    )
}