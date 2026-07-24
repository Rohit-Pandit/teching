import {
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";

import { useContext } from "react";

import AuthContext from "../context/authContext/authContext.js";

export default function ProtectedRoute() {
  const {
    isAuthenticated,
    loading,
  } = useContext(AuthContext);

  const location =
    useLocation();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/admin/login"
        replace
        state={{
          from: location,
        }}
      />
    );
  }

  return <Outlet />;
}