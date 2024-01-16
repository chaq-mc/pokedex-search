import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useDispatch } from "react-redux";
import { updatePokemonByName, selectDataByName } from "../redux/pokemonSlice";

export const SearchHistory = () => {
    const dispatch = useDispatch();

    const pokemonName = useSelector((state: RootState) => state.pokemon.name);
    const data = useSelector((state: RootState) => selectDataByName(state, pokemonName));

    const [searchHistoryList, setSearchHistoryList] = useState<string[]>([]);

    useEffect(() => {
        if (pokemonName.length !== 0 && !searchHistoryList.includes(pokemonName))
        setSearchHistoryList([...searchHistoryList, pokemonName]);
    }, [pokemonName])

    const goToSelectedPokemon = (e: React.MouseEvent) => {
        dispatch(updatePokemonByName((e.target as HTMLUListElement).innerText));
    }

    return (
        <div>
            <ul >
                {searchHistoryList.map((name, index) => {
                    return(
                    <li key={index} onClick={(e) => goToSelectedPokemon(e)}>{name}</li>
                    )
                })}
            </ul>
        </div>
    )
}