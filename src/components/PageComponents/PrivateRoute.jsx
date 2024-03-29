import React from 'react';
import { Route, Navigate } from 'react-router-dom';


function PrivateRoute({ element, isLoggedIn }) {
  return isLoggedIn ? (
    <Route element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
}

export default PrivateRoute;
