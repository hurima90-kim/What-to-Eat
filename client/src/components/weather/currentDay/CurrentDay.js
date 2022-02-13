import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Container, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const CurrentDay = ({
  weekday,
  date,
  location,
  temperature,
  weatherIcon,
  weatherDescription,
}) => {
  return (
    <Container>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderRadius: '20px',
          padding: '20px',
          backgroundImage:
            "url('https://www.webuildvalue.com/wp-content/uploads/seoul-megacity-crescita-sostenibile.jpg)",
        }}
      >
        <CardContent
          sx={{ padding: 0, justifyContent: 'center', alignItems: 'center' }}
        >
          <Typography variant="h4">{weekday}</Typography>
          <Typography variant="body2">{date}</Typography>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <LocationOnIcon />
            <Typography variant="body1">{location}</Typography>
          </div>
        </CardContent>
        <CardContent sx={{ padding: 0 }}>
          <img width="45" src={weatherIcon} alt="weather icon" />
          <Typography variant="h6">{temperature}°C</Typography>
          <Typography variant="caption">{weatherDescription}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

CurrentDay.propTypes = {
  weekday: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  weatherDescription: PropTypes.string.isRequired,
};

export default CurrentDay;
