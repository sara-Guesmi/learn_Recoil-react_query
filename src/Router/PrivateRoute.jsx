import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../store/auth";

const PrivateRoute = () => {
  const auth = useRecoilValue(authState);

  if (!auth.isAuth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.

    return <Navigate to="/signin" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
