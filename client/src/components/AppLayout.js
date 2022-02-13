import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import { Grid } from '@mui/material';
import Copyright from './Copyright';
import UserProfile from './UserProfile';
import Company from './Company';

function AppLayout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <UserProfile />
        </Grid>
        <Grid item xs={12} md={6}>
          {children}
        </Grid>
        <Grid item xs={12} md={3}>
          <Company />
        </Grid>
        <Grid item xs={12} md={12}>
          <Copyright />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
