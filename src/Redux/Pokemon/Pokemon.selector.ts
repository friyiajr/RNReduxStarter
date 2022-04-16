import {RootState} from '../../Store';

export const selectPokemonIndex = (state: RootState) => state.pokemon.index;
export const selectPokemon = (state: RootState) => state.pokemon.pokemon;
