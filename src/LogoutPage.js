import React from 'react';
import { useAuth } from './utility/AuthContext';
import { Container, Button, Typography } from '@mui/material';

const LogoutPage = () => {
  const { logout } = useAuth();

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4">Logout Page</Typography>
      <Button variant="contained" color="secondary" onClick={logout}>
        Logout
      </Button>
    </Container>
  );
};

export default LogoutPage;
