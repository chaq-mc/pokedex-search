import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { Pokemon } from "../utils/types"
import { RootState } from '../store'

export const fetchPokemonByName = createAsyncThunk<Pokemon, string>(
    'pokemon/fetchPokemonByName',
    async (pokemonName, { rejectWithValue }) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();
        if (response.status < 200 || response.status >= 300) {
          return rejectWithValue(data);
        }
        console.log(data);
        return data;
      }
);

type RequestState = "pending" | "fulfilled" | "rejected";

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        name: '',
        dataByName: {} as Record<string, Pokemon | undefined>,
        statusByName: {} as Record<string, RequestState | undefined>
    },
    reducers: {
        updatePokemon: (state, action: PayloadAction<Pokemon, string>) => {
            state.dataByName[action.payload.name] = action.payload;
            state.name = action.payload.name
        }
    },
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
          state.name = action.payload.name;
        });
        // When our request is rejected:
        // - store the 'rejected' state as the status for the corresponding pokemon name
        builder.addCase(fetchPokemonByName.rejected, (state, action) => {
          state.statusByName[action.meta.arg] = "rejected";
        });
      }
});

export const {updatePokemon} = pokemonSlice.actions;

export const selectStatusByName = (state: RootState, name: string) =>
  state.pokemon.statusByName[name];
export const selectDataByName = (state: RootState, name: string) =>
  state.pokemon.dataByName[name];
