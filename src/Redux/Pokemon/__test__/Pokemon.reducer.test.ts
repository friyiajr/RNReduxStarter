import {Pokemon} from '../../../Models/Pokemon';
import PokemonReducer, {
  decrementIndex,
  fetchPokemon,
  fetchPokemonComplete,
  incrementIndex,
  INITIAL_STATE,
  PokemonState,
} from '../Pokemon.reducer';

describe('Pokemon Slice', () => {
  describe('incrementIndex', () => {
    it('should increment the count', () => {
      const state = {
        ...INITIAL_STATE,
      };

      const expectedState: PokemonState = {
        ...INITIAL_STATE,
        index: 2,
      };

      const action = incrementIndex();

      const actualResult = PokemonReducer(state, action);

      expect(actualResult).toEqual(expectedState);
    });
  });

  describe('decrementIndex', () => {
    it('should decrement the count', () => {
      const state = {
        ...INITIAL_STATE,
      };

      const expectedState: PokemonState = {
        ...INITIAL_STATE,
        index: 0,
      };

      const action = decrementIndex();

      const actualResult = PokemonReducer(state, action);

      expect(actualResult).toEqual(expectedState);
    });
  });

  describe('fetchPokemon', () => {
    it('should set loading as true', () => {
      const state: PokemonState = {
        ...INITIAL_STATE,
        isLoading: false,
      };

      const expectedState: PokemonState = {
        ...INITIAL_STATE,
        isLoading: true,
      };

      const action = fetchPokemon(1);

      const actualResult = PokemonReducer(state, action);

      expect(actualResult).toEqual(expectedState);
    });
  });

  describe('fetchPokemonComplete', () => {
    it('should add the pokemon to the state', () => {
      const pokemon: Pokemon = {
        name: 'Charizard',
        uri: 'pokemon.com',
      };

      const state: PokemonState = {
        ...INITIAL_STATE,
        isLoading: true,
        pokemon: undefined,
      };

      const expectedState: PokemonState = {
        ...INITIAL_STATE,
        isLoading: false,
        pokemon: pokemon,
      };

      const action = fetchPokemonComplete(pokemon);

      const actualResult = PokemonReducer(state, action);

      expect(actualResult).toEqual(expectedState);
    });
  });
});
