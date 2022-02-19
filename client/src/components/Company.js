import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import React from 'react';
import Weather from './weather/Weather';

function Company() {
  return (
    <Container
      maxWidth="md"
      sx={{
        width: '100%',
        height: '100%',
        padding: '20px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {/* <Typography variant="h5" sx={{ marginBottom: '60px' }}>
        Team History
      </Typography> */}
      <Card sx={{ mb: '60px' }}>
        <CardMedia
          component="img"
          image="https://image.rocketpunch.com/company/88124/ju-negsibil_logo_1636441582.png?s=400x400&t=inside"
          alt="nexivil logo"
          sx={{ width: '300px', margin: '0 auto' }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            Nexivil
          </Typography>
          <Typography variant="body2" color="text.secondary">
            넥시빌은 『디지털 트윈의 대중화』라는 비젼을 바탕으로 개발한 웹기반
            디지털 트윈 플랫폼 디자인 익스프레스(Design Express)를 통해 누구나
            손쉽게 접근할 수 있고 다양한 형태의 데이터를 유기적으로 연계∙확장
            가능한 프레임워크를 제공합니다.
          </Typography>
        </CardContent>
      </Card>
      <Weather />
    </Container>
  );
}

export default Company;
