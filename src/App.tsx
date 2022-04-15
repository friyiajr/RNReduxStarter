import React from 'react';
import Home from './Screens/Home';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Pokemon from './Screens/Pokemon';
import {Provider} from 'react-redux';
import store from './Store';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={Home.routeName} component={Home} />
          <Stack.Screen name={Pokemon.routeName} component={Pokemon} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
