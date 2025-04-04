import { useAuthStore } from "shell/store";
import "./UserDashboard.css";

export default function UserDashboard() {
  const { user, theme, toggleFavorite } = useAuthStore();

  return (
    <div className={`dashboard-container ${theme}`}>
      <h2 className="dashboard-title">User Dashboard</h2>
      <button className="favorite-btn" onClick={() => toggleFavorite("user")}>
        {user.favorites.includes("user") ? "❤️ Remove Favorite" : "🤍 Add Favorite"}
      </button>
      <p className="dashboard-description">Welcome to the user dashboard. Here, you can manage your account and orders.</p>
      <div className="dashboard-widgets">
        <div className={`widget ${theme}`}>
          <h3>Order History</h3>
          <p>View your past and ongoing orders.</p>
        </div>
        <div className={`widget ${theme}`}>
          <h3>Profile Updates</h3>
          <p>Update your personal details and preferences.</p>
        </div>
        <div className={`widget ${theme}`}>
          <h3>Notifications</h3>
          <p>Check important updates and alerts.</p>
        </div>
      </div>
    </div>
  );
}
