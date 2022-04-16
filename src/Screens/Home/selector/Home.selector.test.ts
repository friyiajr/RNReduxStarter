import {INITIAL_STATE} from '../../../Redux/Pokemon/Pokemon.reducer';
import {RootState} from '../../../Store';
import homeSelector from './Home.selector';

describe('Home Selector', () => {
  describe('homeSelector', () => {
    it('should grab all required state to display the screen', () => {
      const state: RootState = {
        pokemon: {
          ...INITIAL_STATE,
          index: 1,
        },
      };

      const expectedResult = {
        index: 1,
      };

      const actualResult = homeSelector(state);

      expect(actualResult).toEqual(expectedResult);
    });
  });
});
