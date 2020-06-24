import { takeEvery, put, call, select } from 'redux-saga/effects';
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

export function* getDataSet({ index }) {
  const {
    data: { data },
  } = yield APIGetDataSet(index);
  yield call(calculateDashboardData, data, index);
}

export function* updateDataSet({ number }) {
  const {
    dataSet: { data, dataIndex },
  } = yield select();
  const newData = [...data, number];
  console.log(JSON.stringify(newData));
  yield call(calculateDashboardData, newData, dataIndex);
}

export function* calculateDashboardData(array, dataIndex) {
  const mean = getMean([...array]);
  const median = getMedian([...array]);
  const standardDeviation = getStandardDeviation([...array]);
  const mode = getMode([...array]);

  yield put(
    receiveDataSet({
      data: array,
      mean,
      median,
      standardDeviation,
      mode,
      dataIndex,
    })
  );
}

export default function* authenticationSaga(auth) {
  yield takeEvery(REQUEST_DATA_SET, getDataSet);
  yield takeEvery(INJECT_NEW_DATA, updateDataSet);
}
