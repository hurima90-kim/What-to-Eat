import { Container } from '@mui/material';
import React from 'react';
import Content from './Content';
import WeekTable from './WeekTable';

function index() {
  return (
    <Container maxWidth="xl" sx={{ p: '20px' }}>
      <Content />
      <WeekTable />
    </Container>
  );
}

export default index;
