import React, { useState } from 'react';
import { useAuth } from './utility/AuthContext';
import useForm from './components/AuthForm';
import { Container, TextField, Button, Typography, Alert } from '@mui/material';

const SignupPage = () => {
  const { signup, user } = useAuth();
  const [formValues, handleChange] = useForm({ email: '', otp: '' });
  const [stage, setStage] = useState('signup'); // 'signup' or 'verify'
  const [error, setError] = useState('');

  const handleSignup = () => {
    if (formValues.email) {
      signup(formValues.email);
      setStage('verify'); // Move to OTP verification stage
    }
  };

  const handleVerifyOtp = () => {
    if (formValues.otp === '123456') {
      setError('');
      window.location.href = 'https://www.netflix.com/in/';
    } else {
      setError('Invalid OTP');
    }
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      {user ? (
        <Typography variant="h4">Welcome, {user.email}!</Typography>
      ) : (
        <div>
          <Typography variant="h4">{stage === 'signup' ? 'Signup' : 'Verify OTP'}</Typography>
          <TextField
            label={stage === 'signup' ? "Enter your email" : "Enter OTP"}
            name={stage === 'signup' ? "email" : "otp"}
            value={formValues[stage === 'signup' ? 'email' : 'otp']}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={stage === 'signup' ? handleSignup : handleVerifyOtp}
          >
            {stage === 'signup' ? 'Sign Up' : 'Verify OTP'}
          </Button>
          {error && <Alert severity="error">{error}</Alert>}
        </div>
      )}
    </Container>
  );
};

export default SignupPage;