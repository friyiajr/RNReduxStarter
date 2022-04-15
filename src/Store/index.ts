import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import logger from 'redux-logger';
import PokemonReducer from '../Redux/Reducers/Pokemon.reducer';

const reducers = combineReducers({
  pokemon: PokemonReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefault => {
    const defaultMiddleware = getDefault();
    return [...defaultMiddleware, logger];
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
