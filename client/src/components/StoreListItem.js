import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import React from 'react';

function StoreListItem() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          일산일품버섯집
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="GrayText.secondary" gutterBottom>
          버섯육개장, 뚝배기불고기
        </Typography>
        <Typography variant="body2">
          버섯이 다양하고 깔끔하니 맛있어요
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More</Button>
      </CardActions>
    </Card>
  );
}

export default StoreListItem;
