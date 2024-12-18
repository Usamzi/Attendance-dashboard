// import React from "react";
// import { Outlet, Navigate } from "react-router-dom";
// import { useAuth } from "./useAuth";
// import { useUser } from "./useUser";

// function PrivateRoutes() {
//   const token = useAuth();
//   const user = useUser();

//   if (!token || user?.role !== "superAdmin" || user?.role !== "school") {
//     return <Navigate to="/login" />;
//   }

//   return <Outlet />;
// }

// export default PrivateRoutes;

import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { useUser } from "./useUser";

function PrivateRoutes() {
  const token = useAuth();
  const user = useUser();

  // Check if the user is authenticated and has the correct role
  if (!token || (user?.role !== "superAdmin" && user?.role !== "school")) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default PrivateRoutes;
