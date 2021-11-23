import React from 'react'
import {   Navigate, Outlet } from 'react-router-dom';
import useAuth from '../components/auth/useAuth';
import Profile from '../components/Profile/Profile';
import Home from '../pages/Home';

 function PrivateRoute() {
    
    const auth=useAuth()
    
    
    return auth.user  ? <Outlet/> : <Navigate to="/login"  />;
  }

export default PrivateRoute;
