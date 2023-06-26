import Navbar from "./Navbar";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const location = useLocation();

  const user = sessionStorage.getItem("user");

  return user ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
