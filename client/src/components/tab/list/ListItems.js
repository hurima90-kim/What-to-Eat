import { ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';

function ListItems() {
  return (
    <ListItem>
      <img
        src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA1MTVfMTI4%2FMDAxNTU3OTI3MDcxNzQ4.zgdV3afy81gRiD0jbIsUeJZVba07O2eMgtjpnFs8k-Ig.0n4AtYKBveb_IU1yzVwU6G5EM6yKyZBVd--R4xNgrg0g.JPEG.nanyoung81%2F1557926335878.jpg"
        alt=""
        style={{
          width: '150px',
          height: '100%',
          marginRight: '20px',
          borderRadius: '10px',
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div style={{ display: 'flex', width: '100%' }}>
          <ListItemText
            primary="뒤집기한판"
            secondary="경기 고양시 일선서구 호수로856번길 8-2"
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Typography
            variant="caption"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: '5px 10px',
              border: '1px solid blue',
              borderRadius: '20px',
            }}
          >
            생고기 김치찌개
          </Typography>
          <Typography
            variant="caption"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: '5px 10px',
              border: '1px solid blue',
              borderRadius: '20px',
              ml: '10px',
            }}
          >
            짜글이(작은거)
          </Typography>
        </div>
      </div>
    </ListItem>
  );
}

export default ListItems;
