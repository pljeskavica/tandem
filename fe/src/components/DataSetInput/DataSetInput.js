import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { addNewNumber } from 'actions/dataSet';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'grid',
  },
});
const DataSetInput = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const classes = useStyles();
  const onSubmit = () => {
    const number = parseInt(value);
    if (isNaN(number)) {
      setError('Value is not a valid number');
      return;
    }
    dispatch(addNewNumber(number));
    setValue('');
    setError('');
  };
  return (
    <div className={classes.root}>
      <TextField
        onChange={({ target: { value } }) => setValue(value)}
        value={value}
        error={error}
        label={error ? error : 'Enter a number'}
      />
      <Button onClick={onSubmit}>Inject Number</Button>
    </div>
  );
};

export default DataSetInput;
