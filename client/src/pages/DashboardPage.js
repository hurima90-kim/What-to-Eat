import React from 'react';
import HeaderContent from '../components/HeaderContent';
import Navbar from '../components/Navbar';
import { Container, Grid } from '@mui/material';
import StoreListItem from '../components/StoreListItem';
import SelectedMenu from '../components/SelectedMenu';

function DashboardPage() {
  return (
    <React.Fragment>
      <Navbar />
      <HeaderContent />
      <Grid container rowSpacing={3} spacing={3}>
        <Grid item xs={3}>
          좌측
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
