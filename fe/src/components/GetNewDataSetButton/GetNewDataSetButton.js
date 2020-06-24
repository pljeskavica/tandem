import React from 'react';

import Button from '@material-ui/core/Button';

import { useDispatch, useSelector } from 'react-redux';
import { getDataSet } from 'actions/dataSet';
import { dataIndexSelector } from 'selectors/dataSet';
import getNextDataIndex from 'utilities/getNextDataIndex';

const GetNewDataSetButton = () => {
  const dispatch = useDispatch();
  const dataIndex = useSelector(dataIndexSelector);
  console.log({ dataIndex });
  const onClick = () => dispatch(getDataSet(getNextDataIndex(dataIndex)));
  return <Button onClick={onClick}>Get New Data</Button>;
};

export default GetNewDataSetButton;
