import {createSlice} from '@reduxjs/toolkit';

type PokemonState = {
  index: number;
};

const INITIAL_STATE: PokemonState = {
  index: 1,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: INITIAL_STATE,
  reducers: {
    incrementIndex: (state: PokemonState) => {
      state.index += 1;
    },
  },
});

export const {incrementIndex} = pokemonSlice.actions;

export default pokemonSlice.reducer;
