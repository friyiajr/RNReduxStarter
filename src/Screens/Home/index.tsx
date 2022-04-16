import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';

import {View, Text, StyleSheet, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrementIndex,
  incrementIndex,
} from '../../Redux/Pokemon/Pokemon.reducer';
import Pokemon from '../Pokemon';
import homeSelector from './selector/Home.selector';

const Home = () => {
  const nav = useNavigation<StackNavigationProp<any>>();
  const dispatch = useDispatch();

  const {index} = useSelector(homeSelector);

  const increment = () => {
    dispatch(incrementIndex());
  };

  const decrement = () => {
    dispatch(decrementIndex());
  };

  const goToPokemon = () => {
    nav.push(Pokemon.routeName, {pokemonIndex: index});
  };

  return (
    <View style={styles.container}>
      <Text>Your Current Pokemon is: {index}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
      <Button title="See Your Pokemon" onPress={goToPokemon} />
    </View>
  );
};

Home.routeName = 'Home';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
