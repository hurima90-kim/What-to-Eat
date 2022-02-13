import { Typography } from '@mui/material';
import React from 'react';
import WeatherForm from './WeatherForm';
import useForecast from '../../hooks/useForecast';
import WeatherError from './WeatherError';
import Loader from './Loader';
import Forecast from './Forecast';

function Weather() {
  const { isError, isLoading, forecast, submitRequest } = useForecast();

  const onSubmit = (value) => {
    submitRequest(value);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" sx={{ marginBottom: '20px' }}>
        Weather Forecast
      </Typography>
      {!forecast && (
        <div>
          {!isLoading && <WeatherForm submitSearch={onSubmit} />}
          {isError && <WeatherError message={isError} />}
          {isLoading && <Loader />}
        </div>
      )}
      {forecast && <Forecast forecast={forecast} />}
    </React.Fragment>
  );
}

export default Weather;
