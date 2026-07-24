import {
  BarChart3,
  BriefcaseBusiness,
  FileText,
  MessageSquareQuote,
  Settings,
} from "lucide-react";

import { NavLink, Outlet } from "react-router-dom";

import { useContext } from "react";

import AuthContext from "../context/authContext/authContext.js";

const navigation = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: BarChart3,
  },
  {
    title: "Services",
    path: "/admin/services",
    icon: BriefcaseBusiness,
  },
  {
    title: "Partners",
    path: "/admin/partners",
    icon: BriefcaseBusiness,
  },
  {
    title: "Testimonials",
    path: "/admin/testimonials",
    icon: MessageSquareQuote,
  },
  {
    title: "Enquiries",
    path: "/admin/enquiries",
    icon: FileText,
  },
  {
    title: "Settings",
    path: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminLayout() {
  const { admin, logout } = useContext(AuthContext);

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}

      <aside className="hidden w-64 shrink-0 border-r border-slate-800 bg-slate-950 lg:block">
        <div className="flex h-full flex-col">
          {/* Logo */}

          <div className="border-b border-slate-800 px-6 py-6">
            <h1 className="text-xl font-bold text-white">
              Tech
              <span className="text-blue-500">ning</span>
            </h1>

            <p className="mt-1 text-xs text-slate-500">Admin Dashboard</p>
          </div>

          {/* Navigation */}

          <nav className="flex-1 space-y-1 p-4">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-400 hover:bg-slate-900 hover:text-white"
                    }`
                  }
                >
                  <Icon size={19} />

                  {item.title}
                </NavLink>
              );
            })}
          </nav>

          {/* Admin */}

          <div className="border-t border-slate-800 p-4">
            <div className="mb-4 px-3">
              <p className="truncate text-sm font-semibold text-white">
                {admin?.name}
              </p>

              <p className="truncate text-xs text-slate-500">{admin?.email}</p>
            </div>

            <button
              onClick={logout}
              className="w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-400 transition hover:bg-red-500/10 hover:text-red-400"
            >
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}

      <main className="min-w-0 flex-1">
        <Outlet />
      </main>
    </div>
  );
}
