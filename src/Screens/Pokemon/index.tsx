import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPokemon} from '../../Redux/Pokemon/Pokemon.reducer';
import pokemonScreenSelector from './selector/PokemonScreen.selector';

const Pokemon = ({route}: any) => {
  const dispatch = useDispatch();

  const {pokemonIndex} = route.params;
  const {pokemon} = useSelector(pokemonScreenSelector);

  useEffect(() => {
    dispatch(fetchPokemon(pokemonIndex));
  }, [dispatch, pokemonIndex]);

  return (
    <View style={styles.container}>
      <Text>{pokemon?.name.toUpperCase() ?? ''}</Text>
      {pokemon?.uri && (
        <Image style={styles.image} source={{uri: pokemon.uri}} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
});

Pokemon.routeName = 'Pokemon';

export default Pokemon;
