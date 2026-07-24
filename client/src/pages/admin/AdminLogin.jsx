import { Navigate } from "react-router-dom";

import { useContext } from "react";

import AuthContext from "../../context/authContext/authContext.js";

import AdminLoginForm from "../../components/admin/AdminLoginForm.jsx";

export default function AdminLogin() {
  const {
    isAuthenticated,
    loading,
    admin
  } = useContext(AuthContext);

   console.log(
    "ADMIN LOGIN STATE:",
    {
      isAuthenticated,
      loading,
      admin,
    }
  );

  // Don't redirect until authentication check is complete
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-blue-500" />
      </div>
    );
  }

  // If already logged in, go to dashboard
  if (isAuthenticated) {
    return (
      <Navigate
        to="/admin/dashboard"
        replace
      />
    );
  }

  // Not logged in → show login page
  return (
    <main className="flex min-h-screen bg-slate-950">
      {/* Left Section */}

      <div className="hidden flex-1 items-center justify-center p-12 lg:flex">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Techning Admin
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-white">
            Manage your digital presence from one place.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Manage services, partners, testimonials,
            enquiries, and website settings through
            the Techning administration panel.
          </p>
        </div>
      </div>

      {/* Right Login Section */}

      <div className="flex w-full items-center justify-center bg-slate-50 p-6 lg:max-w-xl">
        <AdminLoginForm />
      </div>
    </main>
  );
}