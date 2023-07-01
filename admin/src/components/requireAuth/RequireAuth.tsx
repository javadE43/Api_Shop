import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useLoginMutation } from "../../features/auth/apiSliceAuth";
//interface
interface RequireAuthProps {
  allowRoles: number[];
}

//component

const RequireAuth: React.FC<RequireAuthProps> = ({ allowRoles }) => {
  const location = useLocation();
  const handleRole = () => {
    if (
      allowRoles?.includes(
        Number(JSON.parse(`${sessionStorage.getItem("role")}`))
          ? Number(JSON.parse(`${sessionStorage.getItem("role")}`))
          : 0
      ) &&
      sessionStorage.getItem("token")
    ) {
      return (
        <div>
          <Outlet />
        </div>
      );
    } else if (
      Number(JSON.parse(`${sessionStorage.getItem("role")}`)) &&
      !!`${sessionStorage.getItem("token")}` === false
    ) {
      return <Navigate to="/unauthorized" state={{ from: location }} replace />;
    } else {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  };
  return <>{handleRole()}</>;
};

export default RequireAuth;
