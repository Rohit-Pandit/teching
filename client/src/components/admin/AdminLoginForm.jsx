import { useContext, useState } from "react";

import AuthContext from "../../context/authContext/authContext.js";

export default function AdminLoginForm() {
  const { login, loading, error } = useContext(AuthContext);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await login(email, password);
    } catch (error) {
      // Error is handled
      // inside AuthContext
    }
  };

  return (
    <div className="w-full max-w-md">
      {/* Header */}

      <div className="mb-8">
        <div className="mb-6">
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            Tech
            <span className="text-blue-600">ning</span>
          </span>
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Welcome back
        </h2>

        <p className="mt-2 text-slate-500">
          Sign in to access the admin dashboard.
        </p>
      </div>

      {/* Form */}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="admin@techning.in"
            autoComplete="email"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* Password */}

        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            autoComplete="current-password"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* Error */}

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
            {error}
          </div>
        )}

        {/* Submit */}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>

      <p className="mt-8 text-center text-xs text-slate-400">
        Techning Admin Portal
      </p>
    </div>
  );
}
