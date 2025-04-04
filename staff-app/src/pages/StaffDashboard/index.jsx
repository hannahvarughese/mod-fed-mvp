import { useAuthStore } from "shell/store";
import "./StaffDashboard.css";

export default function StaffDashboard() {
  const { user, theme, toggleFavorite } = useAuthStore();

  return (
    <div className={`dashboard-container ${theme}`}>
      <h2 className="dashboard-title">Staff Dashboard</h2>
        <button className="favorite-btn" onClick={() => toggleFavorite("staff")}>
          {user.favorites.includes("staff") ? "❤️ Remove Favorite" : "🤍 Add Favorite"}
        </button>
      <p className="dashboard-description">This page provides an overview of staff-related information.</p>
      <div className="dashboard-widgets">
        <div className={`widget ${theme}`}>
          <h3>Task Summary</h3>
          <p>View pending and completed tasks at a glance.</p>
        </div>
        <div className={`widget ${theme}`}>
          <h3>Recent Reports</h3>
          <p>Check the latest reports submitted by the staff team.</p>
        </div>
        <div className={`widget ${theme}`}>
          <h3>Announcements</h3>
          <p>Stay updated with important staff notices.</p>
        </div>
      </div>
    </div>
  );
}
