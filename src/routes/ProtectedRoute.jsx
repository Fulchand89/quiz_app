import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// --- DEV BYPASS: auth imports commented out for local dev access ---
// import Cookies from 'js-cookie';
// import { useAuth } from '../hooks/useAuth';
// import { ROUTES } from '../constants/routes';

const ProtectedRoute = ({ children }) => {
  // --- DEV BYPASS: authentication check disabled for local dev access ---
  // To re-enable protection, uncomment the block below and remove the passthrough return.
  //
  // const { isAuthenticated } = useAuth();
  // const token = Cookies.get('token');
  // if (!isAuthenticated && !token) {
  //   return <Navigate to={ROUTES.ADMIN.LOGIN} replace />;
  // }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
