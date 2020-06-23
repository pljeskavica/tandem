import React from 'react';
// Cointainers
import DataSetContainer from 'containers/DataSetContainer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    placeItems: 'center',
    backgroundColor: '#282c34',
    height: '100vh',
  },
});
const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <DataSetContainer />
    </div>
  );
};

export default Dashboard;
