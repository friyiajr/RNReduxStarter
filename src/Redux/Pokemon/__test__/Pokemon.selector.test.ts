import {RootState} from '../../../Store';
import {INITIAL_STATE} from '../Pokemon.reducer';
import {selectPokemonIndex} from '../Pokemon.selector';

describe('Pokemon Selector', () => {
  describe('selectPokemonIndex', () => {
    it('should grab the pokemon index from the state', () => {
      const state: RootState = {
        pokemon: {
          ...INITIAL_STATE,
          index: 1,
        },
      };

      const expected = 1;
      const actualResult = selectPokemonIndex(state);

      expect(actualResult).toEqual(expected);
    });
  });
});
