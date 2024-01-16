import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"
import axios from 'axios'
import { Pokemon } from "../utils/types"
import { RootState } from '../store'

export const fetchPokemonByName = createAsyncThunk<Pokemon, string>(
    'pokemon/fetchPokemonByName',
    async(pokemonName: string) => {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            console.log(res.data);
            return res.data;
        } catch (err) {
            return isRejectedWithValue(err);
        }
    }
);

type RequestState = "pending" | "fulfilled" | "rejected";

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        dataByName: {} as Record<string, Pokemon | undefined>,
        statusByName: {} as Record<string, RequestState | undefined>
    },
    reducers: {},
    extraReducers: (builder) => {
        // When our request is pending:
        // - store the 'pending' state as the status for the corresponding pokemon name
        builder.addCase(fetchPokemonByName.pending, (state, action) => {
          state.statusByName[action.meta.arg] = "pending";
        });
        // When our request is fulfilled:
        // - store the 'fulfilled' state as the status for the corresponding pokemon name
        // - and store the received payload as the data for the corresponding pokemon name
        builder.addCase(fetchPokemonByName.fulfilled, (state, action) => {
          state.statusByName[action.meta.arg] = "fulfilled";
          state.dataByName[action.meta.arg] = action.payload;
        });
        // When our request is rejected:
        // - store the 'rejected' state as the status for the corresponding pokemon name
        builder.addCase(fetchPokemonByName.rejected, (state, action) => {
          state.statusByName[action.meta.arg] = "rejected";
        });
      }
});

export const selectStatusByName = (state: RootState, name: string) =>
  state.pokemon.statusByName[name];
export const selectDataByName = (state: RootState, name: string) =>
  state.pokemon.dataByName[name];
