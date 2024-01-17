import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import {
  fetchPokemonByName,
  selectStatusByName,
  selectDataByName,
  updatePokemon
} from "../redux/pokemonSlice";

export function useGetPokemonByName(name: string) {
  const dispatch = useDispatch<AppDispatch>();
  // select the current status from the store state for the provided name
  const status = useSelector((state: RootState) =>
    selectStatusByName(state, name)
  );
  // select the current data from the store state for the provided name
  const data = useSelector((state: RootState) => selectDataByName(state, name));

  useEffect(() => {
    // upon mount or name change, if status is uninitialized, send a request
    // for the pokemon name
    if (status === undefined && name.length !== 0) {
      dispatch(fetchPokemonByName(name));
    } else if (status === 'fulfilled' && data !== undefined) {
        dispatch(updatePokemon(data))
    }
  }, [status, name, dispatch]);

}