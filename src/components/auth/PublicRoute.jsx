import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../utils/auth';

const PublicRoute = ({ children }) => {
  const authenticated = isAuthenticated();

  if (authenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute; 