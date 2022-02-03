import React from 'react';
import HeaderContent from '../components/HeaderContent';
import Navbar from '../components/Navbar';
import { Grid } from '@mui/material';
import StoreListItem from '../components/StoreListItem';
import SelectedMenu from '../components/SelectedMenu';
import Write from '../components/Write';
import WeatherInfo from '../components/WeatherInfo';

function DashboardPage() {
  return (
    <React.Fragment>
      <Navbar />
      <HeaderContent />
      <Grid container rowSpacing={3} spacing={3} padding="0 80px">
        <Grid item xs={3}>
          <Write />
          <WeatherInfo />
        </Grid>
        <Grid item xs={6}>
          <StoreListItem />
          <StoreListItem />
        </Grid>
        <Grid item xs={3}>
          <SelectedMenu />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default DashboardPage;
