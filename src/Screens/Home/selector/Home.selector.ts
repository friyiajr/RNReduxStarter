import {createStructuredSelector} from 'reselect';
import {selectPokemonIndex} from '../../../Redux/Pokemon/Pokemon.selector';

const homeSelector = createStructuredSelector({
  index: selectPokemonIndex,
});

export default homeSelector;
