import {takeEvery} from 'redux-saga/effects';
import {incrementIndex} from './Pokemon.reducer';

export function* fetchPokemonSaga() {
  console.log('Hello you are here');
}

export function* rootPokemonSaga() {
  yield takeEvery(incrementIndex.type, fetchPokemonSaga);
}
