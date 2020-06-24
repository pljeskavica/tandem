export const REQUEST_DATA_SET = 'REQUEST_DATA_SET';
export const RECEIVE_DATA_SET = 'RECEIVE_DATA_SET';
export const INJECT_NEW_DATA = 'INJECT_NEW_DATA';
export const RECORD_COMPUTATION = 'RECORD_COMPUTATION';

export const getDataSet = (index = 0) => ({
  type: REQUEST_DATA_SET,
  index,
});

export const receiveDataSet = ({ data, ...computations }) => ({
  type: RECEIVE_DATA_SET,
  data,
  ...computations,
});

export const addNewNumber = number => ({
  type: INJECT_NEW_DATA,
  number,
});

export const recordComputation = computations => ({
  type: RECORD_COMPUTATION,
  ...computations,
});
