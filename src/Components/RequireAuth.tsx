// user locatin check 

import React from 'react';
import { useAuth } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import HomeLayout from './HomeLayout';


const RequireAuth: React.FC = () => {
    const { session } = useAuth();
    const location = useLocation(); // react-router-dom 
  return session?.user ? (
    <HomeLayout />
  ) : (
   <Navigate to="/login" state={{ from: location }} replace /> // react-router-dom
  );
};

export default RequireAuth