import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataSet } from 'actions/dataSet';
import DataSetTile from 'components/DataSetTile';
import { calculationSelector } from 'selectors/dataSet';
import DataSetInput from 'components/DataSetInput';
import GetNewDataSetButton from 'components/GetNewDataSetButton';

const DataSetContainer = () => {
  const dispatch = useDispatch();
  const data = useSelector(calculationSelector);
  useEffect(() => {
    dispatch(getDataSet());
  }, [dispatch]);

  return (
    <React.Fragment>
      <DataSetTile data={data} />
      <GetNewDataSetButton />
      <DataSetInput />
    </React.Fragment>
  );
};

export default DataSetContainer;
