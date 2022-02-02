import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';

function createData(day, menuOne, menuTwo) {
  return { day, menuOne, menuTwo };
}

const rows = [
  createData('Mon', '짜장면', '김치찌개'),
  createData('Tue', '짜장면', '김치찌개'),
  createData('Wed', '짜장면', '김치찌개'),
  createData('Thu', '짜장면', '김치찌개'),
  createData('Fri', '짜장면', '김치찌개'),
];

function SelectedMenu() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Day</TableCell>
            <TableCell align="right">Team 1</TableCell>
            <TableCell align="right">Team 2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.day}>
              <TableCell component="th" scope="row">
                {row.day}
              </TableCell>
              <TableCell align="right">{row.menuOne}</TableCell>
              <TableCell align="right">{row.menuTwo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SelectedMenu;
