import { all } from 'redux-saga/effects';
import dataSetSaga from './dataSet';

export default function* rootSaga() {
  yield all([dataSetSaga()]);
}
