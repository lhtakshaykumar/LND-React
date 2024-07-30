import React from 'react';
import withAuth from './utility/withAuth';
import { Container, Typography } from '@mui/material';

const ProtectedPage = () => {
  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4">Protected Page</Typography>
      <Typography>This page is only accessible to authenticated users.</Typography>
    </Container>
  );
};

export default withAuth(ProtectedPage);
