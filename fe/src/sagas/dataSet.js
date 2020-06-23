import { takeEvery, put, call } from 'redux-saga/effects';
import {
  REQUEST_DATA_SET,
  RECEIVE_DATA_SET,
  INJECT_NEW_DATA,
  RECORD_COMPUTATION,
  receiveDataSet,
} from 'actions/dataSet';
import getMean from 'utilities/getMean';
import getMedian from 'utilities/getMedian';
import getMode from 'utilities/getMode';
import getStandardDeviation from 'utilities/getStandardDeviation';

import { getDataSet as APIGetDataSet } from 'providers/dataSet';

export function* getDataSet() {
  const {
    data: { data },
  } = yield APIGetDataSet();
  yield call(calculateDashboardData, data);
}

export function* calculateDashboardData(array) {
  const mean = getMean(array);
  const median = getMedian(array);
  const standardDeviation = getStandardDeviation(array);
  const mode = getMode(array);

  yield put(
    receiveDataSet({ data: array, mean, median, standardDeviation, mode })
  );
}

export default function* authenticationSaga(auth) {
  yield takeEvery(REQUEST_DATA_SET, getDataSet);
}
