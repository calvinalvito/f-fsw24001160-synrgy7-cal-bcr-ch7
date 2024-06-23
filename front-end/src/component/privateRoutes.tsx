import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

type PrivateRouteProps = {
  children: React.ReactNode;
  allowedRoles: string[];
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  allowedRoles,
}) => {
  const { isAuthenticated, user, checkAuthenticated } = useAuth();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initialize = async () => {
      try {
        await checkAuthenticated();
      } catch (error) {
        console.error("Authentication check failed:", error);
      } finally {
        setLoading(false);
      }
    };

    initialize();
  }, [checkAuthenticated]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
