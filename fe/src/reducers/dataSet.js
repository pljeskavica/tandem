import {
  REQUEST_DATA_SET,
  RECEIVE_DATA_SET,
  INJECT_NEW_DATA,
  RECORD_COMPUTATION,
} from 'actions/dataSet';

const initialState = {
  loading: false,
  error: false,
  data: [],
  mean: null,
  median: null,
  standardDeviation: null,
  mode: null,
};

const dataSetReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case REQUEST_DATA_SET:
      return {
        ...state,
        loading: true,
      };
    case RECEIVE_DATA_SET:
      const { mean, median, standardDeviation, mode, data } = action;
      return {
        ...state,
        loading: false,
        data,
        mean,
        median,
        standardDeviation,
        mode,
      };
    case INJECT_NEW_DATA:
      return {
        data: [...state.data, action.number],
        mean: null,
        median: null,
        standardDeviation: null,
        mode: null,
      };

    default:
      return state;
  }
};

export default dataSetReducer;
