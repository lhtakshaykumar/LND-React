import React from 'react';
import { redirect  as Redirect} from 'react-router-dom';
import { useAuth } from './AuthContext';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { user } = useAuth();

    if (!user) {
      return <Redirect to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
