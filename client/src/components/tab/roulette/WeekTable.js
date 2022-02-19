import React from 'react';
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  TableCell,
  TableBody,
  IconButton,
  Typography,
  Tooltip,
} from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: 'white',
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  [`&:nth-of-type(odd)`]: {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  [`&:last-child td, &:last-child th`]: {
    border: 0,
  },
}));

function WeekTable() {
  return (
    <React.Fragment>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6">History Table</Typography>
        <Tooltip title="Reset">
          <IconButton aria-label="reset">
            <RestartAltIcon />
          </IconButton>
        </Tooltip>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="week table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Team</StyledTableCell>
              <StyledTableCell align="center">Mon</StyledTableCell>
              <StyledTableCell align="center">Tue</StyledTableCell>
              <StyledTableCell align="center">Wed</StyledTableCell>
              <StyledTableCell align="center">Thu</StyledTableCell>
              <StyledTableCell align="center">Fri</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <TableCell>Team1</TableCell>
              <TableCell align="center">떡볶이</TableCell>
              <TableCell align="center">파스타</TableCell>
              <TableCell align="center">짬뽕</TableCell>
              <TableCell align="center">추어탕</TableCell>
              <TableCell align="center">감자탕</TableCell>
            </StyledTableRow>
            <StyledTableRow>
              <TableCell>Team2</TableCell>
              <TableCell align="center">낚지볶음</TableCell>
              <TableCell align="center">구내식당</TableCell>
              <TableCell align="center">서브웨이</TableCell>
              <TableCell align="center">백반</TableCell>
              <TableCell align="center">피자</TableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}

export default WeekTable;
