import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';

import {View, Text, StyleSheet, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {incrementIndex} from '../../Redux/Reducers/Pokemon.reducer';
import Pokemon from '../Pokemon';

const Home = () => {
  const nav = useNavigation<StackNavigationProp<any>>();
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(incrementIndex());
  };

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Button
        title="Go To Next"
        onPress={() => {
          // nav.push(Pokemon.routeName);
          increment();
        }}
      />
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
