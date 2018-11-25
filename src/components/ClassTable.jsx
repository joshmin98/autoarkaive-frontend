import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '80%',
    marginTop: theme.spacing.unit * 5,
    overflowX: 'auto',
    marginLeft: '10%'
  },
  table: {
    minWidth: 700,
  },
});

let ClassTable = props => {
  return (
    <Paper className={props.classes.root}>
      <Table className={props.classes.table}>
        <TableHead>
          <TableCell>Class</TableCell>
          <TableCell>Location</TableCell>
          <TableCell>Time</TableCell>
          <TableCell>Course Code</TableCell>
        </TableHead>
        <TableBody>
          {props.classList.map((row, idx) => {
            let time = row.time ? row.time : 'N/A';
            let location = row.location ? row.location : 'N/A';
            return (
              <TableRow key={idx}>
                <TableCell scope='row'>
                  {row.className}
                </TableCell>
                <TableCell scope='row'>
                  {location}
                </TableCell>
                <TableCell scope='row'>
                  {time}
                </TableCell>
                <TableCell scope='row'>
                  {row.courseCode}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default withStyles(styles)(ClassTable);
