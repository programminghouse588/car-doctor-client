import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Firebase/Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  // Loader and user
  const { user, loading } = useContext(AuthContext);

  // Go to clicked route after login
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
