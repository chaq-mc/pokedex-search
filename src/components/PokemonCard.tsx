
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { selectDataByName, selectStatusByName } from "../redux/pokemonSlice";
import { Moves } from "./Moves";
import { Sprites } from "./Sprites";
import './styles/PokemonCard.css'

export const PokemonCard = () => {
    const pokemonData = useSelector((state: RootState) => selectDataByName(state, state.pokemon.name));
    const status = useSelector((state: RootState) => selectStatusByName(state, state.pokemon.name));

    return (
        <div>
            {
            status === "rejected" ? (
              <>Please enter a valid Pokemon</>
            ) : status === "pending" ? (
              <>Loading...</>
            ) : pokemonData ? (
                <div className="card">
                    <div className="title">
                        <h1>{pokemonData?.name.toUpperCase()}</h1>
                        <img src={pokemonData?.sprites.other.dream_world.front_default}/>
                    </div>
                    <div className="abilityParent">
                        <div className="abilities">
                        <h2 className="abilityLabel">Abilities</h2>
                                {pokemonData?.abilities.map((ability, index) => {
                                    return(
                                        <div className="group" key={index}>
                                            <h2>{ability.ability.name}</h2>
                                        </div>
                                    );
                                })}
                        </div>
                        <div className="types">
                        <h2 className="typesLabel">Types</h2>
                                {pokemonData?.types.map((type, index) => {
                                    return(
                                        <div className="group" key={index}>
                                            <h2>{type.type.name}</h2>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                    <Moves/>
                    <Sprites/>
                </div>
            ) : null
          }
        </div>

    )
}