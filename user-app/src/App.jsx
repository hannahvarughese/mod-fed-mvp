import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useAuthStore } from "shell/store";
import UserDashboard from "./pages/UserDashboard";
import UserProfile from "./pages/UserProfile";
import UserOrders from "./pages/UserOrders";
import "./App.css";

function App() {
  const { user } = useAuthStore();
  const isAdmin = user?.role === "admin";

  return (
    <div className="app-container">
      <nav className="common-nav">
        {isAdmin && <Link to="/user">Dashboard</Link>}
        <Link to="/user/profile">Profile</Link>
        <Link to="/user/orders">Orders</Link>
      </nav>
      <div className="content">
        <Routes>
          {isAdmin && <Route path="/" element={<UserDashboard />} />}
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/orders" element={<UserOrders />} />

          {!isAdmin && <Route path="/" element={<Navigate to="/user/orders" replace />} />}
        </Routes>
      </div>
    </div>
  );
}

export default App;
