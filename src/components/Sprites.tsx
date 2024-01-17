import { useSelector } from "react-redux";
import { RootState } from "../store";
import { selectDataByName} from "../redux/pokemonSlice";

export const Sprites = () => {
    const pokemonData = useSelector((state: RootState) => selectDataByName(state, state.pokemon.name));

    return(
        <>
            <h2 className="spriteLabel">Sprites</h2>
            <div className="sprites">
                {pokemonData?.sprites.back_default ? (
                    <img src={pokemonData.sprites.back_default}/>
                ) : null}
                {pokemonData?.sprites.back_female ? (
                    <img src={pokemonData.sprites.back_female}/>
                ) : null}
                {pokemonData?.sprites.back_shiny ? (
                    <img src={pokemonData.sprites.back_shiny}/>
                ) : null}
                {pokemonData?.sprites.back_shiny_female ? (
                    <img src={pokemonData.sprites.back_shiny_female}/>
                ) : null}
                {pokemonData?.sprites.front_default ? (
                    <img src={pokemonData.sprites.front_default}/>
                ) : null}
                {pokemonData?.sprites.front_female ? (
                    <img src={pokemonData.sprites.front_female}/>
                ) : null}
                {pokemonData?.sprites.front_shiny ? (
                    <img src={pokemonData.sprites.front_shiny}/>
                ) : null}
                {pokemonData?.sprites.front_shiny_female? (
                    <img src={pokemonData.sprites.front_shiny_female}/>
                ) : null}
            </div>
        </>
    )
}