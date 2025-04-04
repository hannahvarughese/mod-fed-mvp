import React, { Suspense } from "react";
import { useAuthStore } from "./store";
import { Routes, Route, useNavigate, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import "./App.css";

const AdminApp = React.lazy(() => import("admin/App"));
const StaffApp = React.lazy(() => import("staff/App"));
const UserApp = React.lazy(() => import("user/App"));

export default function App() {
  const { user, theme } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  if (!user) return <Login />;

  const currentApp = location.pathname.split("/")[1] || user.role;

  let availableLinks = [];
  if (user.role === "admin") {
    availableLinks = ["admin", "staff", "user"].filter(app => app !== currentApp);
  }
  console.log("availableLinks =>", availableLinks);
  return (
    <div className={`app-container ${theme}`}d>
      <Header availableLinks={availableLinks} switchApp={(app) => navigate(`/${app}`)} />
      <div className="app-content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {user.role === "admin" && (
              <>
                <Route path="/admin/*" element={<AdminApp />} />
                <Route path="/staff/*" element={<StaffApp />} />
                <Route path="/user/*" element={<UserApp />} />
              </>
            )}
            {user.role === "staff" && <Route path="/staff/*" element={<StaffApp />} />}
            {user.role === "user" && <Route path="/user/*" element={<UserApp />} />}
            
            <Route path="/*" element={<Navigate to={`/${user.role}`} replace />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}
