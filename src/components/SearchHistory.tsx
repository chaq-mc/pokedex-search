import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const SearchHistory = () => {
    const pokemonName = useSelector((state: RootState) => state.pokemon.name);

    const [searchHistoryList, setSearchHistoryList] = useState<string[]>([]);

    useEffect(() => {
        if (pokemonName.length !== 0 && !searchHistoryList.includes(pokemonName))
        setSearchHistoryList([...searchHistoryList, pokemonName]);
    }, [pokemonName])

    return (
        <div>
            <ul>
                {searchHistoryList.map((item, index) => {
                    return(
                    <li key={index}>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}