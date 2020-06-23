import React from 'react';
// Hooks
import { makeStyles } from '@material-ui/core/styles';
// Components
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    width: '400px',
  },
});

const DataSetTile = ({ data }) => {
  const classes = useStyles();
  const rows = Object.entries(data).map(([key, value]) => (
    <TableRow key={key}>
      <TableCell align="left">{key}</TableCell>
      <TableCell align="right">{value}</TableCell>
    </TableRow>
  ));
  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Key</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataSetTile;
