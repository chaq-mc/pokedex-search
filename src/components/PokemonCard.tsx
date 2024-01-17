
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { selectDataByName, selectStatusByName } from "../redux/pokemonSlice";
import { Moves } from "./Moves";
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
                    <div className="abilities">
                            {pokemonData?.abilities.map((ability, index) => {
                                return(
                                    <div className="group" key={index}>
                                        <h2>{ability.ability.name}</h2>
                                    </div>
                                );
                            })}
                    </div>
                    <Moves/>
                    <div>
                        <span className="rowLabel">Sprites:</span>
                    </div>
                </div>
            ) : null
          }
        </div>

    )
}