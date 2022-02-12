import {
  Avatar,
  Container,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import RecentPost from './RecentPost';

function UserProfile() {
  return (
    <Container
      maxWidth="md"
      sx={{
        width: '100%',
        height: '90vh',
        padding: '20px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: '60px' }}>
        My Profile
      </Typography>
      <IconButton disabled>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/2.jpg"
          sx={{ height: '250px', width: '250px', marginBottom: '40px' }}
        />
      </IconButton>
      <Typography variant="h6">Vitor Niculici</Typography>
      <Typography variant="body1" sx={{ marginBottom: '40px' }}>
        Front-end Developer
      </Typography>
      <Divider variant="middle" sx={{ width: '100%', marginBottom: '40px' }} />
      <RecentPost />
    </Container>
  );
}

export default UserProfile;
