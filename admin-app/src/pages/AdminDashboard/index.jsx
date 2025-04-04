import { useAuthStore } from "shell/store";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const { user, theme, toggleFavorite } = useAuthStore();

  return (
    <div className={`dashboard-container ${theme}`}>
      <h2 className="dashboard-title">Admin Dashboard</h2>
      <button className="favorite-btn" onClick={() => toggleFavorite("admin")}>
        {user.favorites.includes("admin") ? "❤️ Remove Favorite" : "🤍 Add Favorite"}
      </button>
      <p className="dashboard-description">Welcome to the admin dashboard. Here, you can manage users, monitor reports, and oversee platform operations.</p>
      <div className="dashboard-widgets">
        <div className={`widget ${theme}`}>
          <h3>User Management</h3>
          <p>View, edit, and manage user roles and permissions.</p>
        </div>
        <div className={`widget ${theme}`}>
          <h3>System Analytics</h3>
          <p>Monitor key performance metrics and platform statistics.</p>
        </div>
        <div className={`widget ${theme}`}>
          <h3>Reports & Logs</h3>
          <p>Review system logs and analyze recent reports.</p>
        </div>
      </div>
    </div>
  );
}
