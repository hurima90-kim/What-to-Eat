import React from 'react';
import PropTypes from 'prop-types';
import UpcomingDaysItem from './UpcomingDaysItem';
import { List } from '@mui/material';

const UpcomingDays = ({ days }) => (
  <List
    sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: '0 20px',
    }}
  >
    {days.map((day) => (
      <UpcomingDaysItem {...day} key={day.weekday} />
    ))}
  </List>
);

UpcomingDays.propTypes = {
  days: PropTypes.array.isRequired,
};

export default UpcomingDays;
