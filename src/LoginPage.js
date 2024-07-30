import React, { useState } from 'react';
import { useAuth } from './utility/AuthContext';
import useForm from './components/AuthForm';
import { Container, TextField, Button, Typography, Alert } from '@mui/material';

const LoginPage = () => {
  const { login } = useAuth();
  const [formValues, handleChange] = useForm({ email: '', otp: '' });
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (login(formValues.email, formValues.otp)) {
      setError('');
     
    } else {
      setError('Invalid email or OTP');
    }
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4">Login Page</Typography>
      <TextField
        label="Email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="OTP"
        name="otp"
        value={formValues.otp}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
      {error && <Alert severity="error">{error}</Alert>}
    </Container>
  );
};

export default LoginPage;