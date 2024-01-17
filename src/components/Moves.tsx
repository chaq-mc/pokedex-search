import { useSelector } from "react-redux";
import { selectDataByName } from "../redux/pokemonSlice";
import { RootState } from "../store";
import './styles/Moves.css';

export const Moves = () => {

    const pokemonName = useSelector((state: RootState) => state.pokemon.name);
    const data = useSelector((state: RootState) => selectDataByName(state, pokemonName));

    return (
        <div className="movesContainer">
            <ul className="movesList">
                <li>
                    <input type="checkbox" id="list-item-2"></input>
                    <label className="movesLabel" htmlFor="list-item-2">Moves</label>
                    <ul className="movesItems">
                        {data?.moves.map((move, index) => {
                            return(
                            <li key={index} className="historyItem">{move.move.name}</li>
                            )
                        })}
                    </ul>
                </li>
            </ul>
        </div>
    )
}