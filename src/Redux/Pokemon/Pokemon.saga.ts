import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeEvery} from 'redux-saga/effects';
import {Pokemon} from '../../Models/Pokemon';
import {fetchPokemon, fetchPokemonComplete} from './Pokemon.reducer';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export function* fetchPokemonSaga(action: PayloadAction<number>): any {
  const index = action.payload;
  const requestUrl = `${BASE_URL}/${index}`;
  console.log('requestUrl: ', requestUrl);
  const response = yield call(fetch, requestUrl);
  const json = yield response.json();
  const pokemon: Pokemon = {
    name: json.name,
    uri: json.sprites.front_default,
  };
  yield put(fetchPokemonComplete(pokemon));
}

export function* rootPokemonSaga() {
  yield takeEvery(fetchPokemon.type, fetchPokemonSaga);
}
