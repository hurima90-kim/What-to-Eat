import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../_actions/user_action';
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Typography,
  Avatar,
  Box,
  Container,
} from '@mui/material';
import Copyright from '../components/Copyright';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert('비밀번호가 일치하지 않습니다.');
    }

    let body = {
      email: Email,
      name: Name,
      password: Password,
    };

    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        navigate('/login');
      } else {
        alert('Failed to sigh up!');
      }
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={onSubmitHandler}
          sx={{ mt: 1 }}
        >
          <Grid container rowSpacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                name="Name"
                required
                fullWidth
                autoFocus
                autoComplete="given-name"
                onChange={onNameHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="Email"
                required
                fullWidth
                autoComplete="email"
                onChange={onEmailHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                name="Password"
                type="password"
                required
                fullWidth
                autoComplete="new-password"
                onChange={onPasswordHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Confirm Password"
                name="Password"
                type="password"
                required
                fullWidth
                onChange={onConfirmPasswordHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email"
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign In
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
