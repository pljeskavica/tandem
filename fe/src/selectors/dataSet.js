import { createSelector } from 'reselect';

const dataSet = ({ dataSet }) => dataSet;

export const calculationSelector = createSelector(
  dataSet,
  ({ mean, mode, standardDeviation, median }) => ({
    mean,
    mode,
    standardDeviation,
    median,
  })
);

export const dataIndexSelector = createSelector(
  dataSet,
  ({ dataIndex }) => dataIndex
);
