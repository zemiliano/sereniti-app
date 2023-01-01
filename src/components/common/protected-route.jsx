import React from "react";
import { Navigate } from "react-router";
import { useUser } from "../../commands/Authentication";

const ProtectedRoute = ({ children }) => {
  const user = useUser();
  if (Object.keys(user).length === 0) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
