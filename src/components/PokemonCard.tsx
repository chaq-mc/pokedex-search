
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { selectDataByName } from "../redux/pokemonSlice";

export const PokemonCard = () => {
    const pokemonData = useSelector((state: RootState) => selectDataByName(state, state.pokemon.name));
    
    return (
        <div>
            <h1>{pokemonData?.name}</h1>
        </div>
    )
}