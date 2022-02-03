import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Container } from '@mui/material';

const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '50vh',
  marginTop: '60px',
  padding: '40px 0 60px',
});

function HeaderContent() {
  return (
    <Container
      maxWidth="sm"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Content>
        <Box
          width="300px"
          height="300px"
          backgroundColor="red"
          borderRadius="50%"
          marginBottom="30px"
        />
        <Button variant="contained" size="large">
          Spin roulette
        </Button>
      </Content>
    </Container>
  );
}

export default HeaderContent;
