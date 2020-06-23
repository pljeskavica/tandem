import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataSet } from 'actions/dataSet';
import DataSetTile from 'components/DataSetTile';
import { calculationSelector } from 'selectors/dataSet';

const DataSetContainer = () => {
  const dispatch = useDispatch();
  const data = useSelector(calculationSelector);
  useEffect(() => {
    dispatch(getDataSet());
  }, [dispatch]);

  return <DataSetTile data={data} />;
};

export default DataSetContainer;
