import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
  // @ts-ignore - auth does exists on useAuth...
  //   const { auth } = useAuth();
  const location = useLocation();

  const user = localStorage.getItem("user");

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
