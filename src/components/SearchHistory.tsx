import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useDispatch } from "react-redux";
import { updatePokemonByName} from "../redux/pokemonSlice";
import './styles/SearchHistory.css'

export const SearchHistory = () => {
    const dispatch = useDispatch();

    const pokemonName = useSelector((state: RootState) => state.pokemon.name);

    const [searchHistoryList, setSearchHistoryList] = useState<string[]>([]);

    useEffect(() => {
        if (pokemonName.length !== 0 && !searchHistoryList.includes(pokemonName))
        setSearchHistoryList([...searchHistoryList, pokemonName]);
    }, [pokemonName])

    const goToSelectedPokemon = (e: React.MouseEvent) => {
        dispatch(updatePokemonByName((e.target as HTMLUListElement).innerText));
    }

    return (
        <div className="searchHistoryContainer">
            <ul className="searchHistoryList">
                <li>
                    <input type="checkbox" id="list-item-1"></input>
                    <label className="searchHistoryLabel" htmlFor="list-item-1">Search History</label>
                    <ul className="searchHistoryItems">
                        {searchHistoryList.map((name, index) => {
                            return(
                            <li key={index} className="historyItem" onClick={(e) => goToSelectedPokemon(e)}>{name}</li>
                            )
                        })}
                    </ul>
                </li>
            </ul>
        </div>
    )
}