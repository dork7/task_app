import React from 'react';
import useAuth from '../hooks/useAuth';
import { Outlet, useLocation, Navigate } from 'react-router-dom';

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth.accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
};

export default RequireAuth;
