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
        height: '100%',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h5" sx={{ mb: '40px' }}>
        My Profile
      </Typography>
      <IconButton disabled>
        <Avatar
          alt="공승연"
          src="http://cdnimage.dailian.co.kr/news/201706/news_1498383225_642283_m_1.jpg"
          sx={{ height: '250px', width: '250px', mb: '40px' }}
        />
      </IconButton>
      <Typography variant="h6">Vitor Niculici</Typography>
      <Typography variant="body1" sx={{ mb: '40px' }}>
        Front-end Developer
      </Typography>
      <Divider variant="middle" sx={{ width: '100%', mb: '40px' }} />
      <RecentPost />
    </Container>
  );
}

export default UserProfile;
