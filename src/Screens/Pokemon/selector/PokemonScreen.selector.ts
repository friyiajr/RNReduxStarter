import {createStructuredSelector} from 'reselect';
import {selectPokemon} from '../../../Redux/Pokemon/Pokemon.selector';

const pokemonScreenSelector = createStructuredSelector({
  pokemon: selectPokemon,
});

export default pokemonScreenSelector;
