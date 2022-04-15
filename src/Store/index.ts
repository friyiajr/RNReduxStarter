import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';

import logger from 'redux-logger';
import {all, fork} from 'redux-saga/effects';
import PokemonReducer from '../Redux/Pokemon/Pokemon.reducer';
import {rootPokemonSaga} from '../Redux/Pokemon/Pokemon.saga';

const reducers = combineReducers({
  pokemon: PokemonReducer,
});

const rootSaga = function* rootSaga() {
  yield all([fork(rootPokemonSaga)]);
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: reducers,
  middleware: getDefault => {
    const defaultMiddleware = getDefault();
    return [...defaultMiddleware, logger, sagaMiddleware];
  },
});

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
