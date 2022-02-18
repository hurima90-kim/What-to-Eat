import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

function RecentPost() {
  return (
    <React.Fragment>
      <Typography>Recent Posts</Typography>
      <List sx={{ width: '100%' }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="What do you want to eat for today?"
            secondary="2022.02.12"
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="What do you want to eat for today?"
            secondary="2022.02.12"
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="What do you want to eat for today?"
            secondary="2022.02.12"
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="What do you want to eat for today?"
            secondary="2022.02.12"
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="What do you want to eat for today?"
            secondary="2022.02.12"
          />
        </ListItem>
      </List>
    </React.Fragment>
  );
}

export default RecentPost;
