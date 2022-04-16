import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Pokemon} from '../../Models/Pokemon';

export type PokemonState = {
  index: number;
  isLoading: boolean;
  pokemon?: Pokemon;
};

export const INITIAL_STATE: PokemonState = {
  index: 1,
  isLoading: false,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: INITIAL_STATE,
  reducers: {
    incrementIndex: (state: PokemonState) => {
      state.index += 1;
    },
    decrementIndex: (state: PokemonState) => {
      state.index -= 1;
    },
    fetchPokemon: (state: PokemonState, _: PayloadAction<number>) => {
      state.isLoading = true;
    },
    fetchPokemonComplete: (
      state: PokemonState,
      action: PayloadAction<Pokemon>,
    ) => {
      state.isLoading = false;
      state.pokemon = action.payload;
    },
  },
});

export const {
  incrementIndex,
  decrementIndex,
  fetchPokemon,
  fetchPokemonComplete,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
