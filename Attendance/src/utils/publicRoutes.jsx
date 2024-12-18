import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PublicRoutes = () => {
  const isAuthenticated = Boolean(localStorage.getItem("accessToken")); 

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default PublicRoutes;




