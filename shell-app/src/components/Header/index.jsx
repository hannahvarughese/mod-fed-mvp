import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store";
import "./Header.css";

export default function Header({ availableLinks, switchApp }) {
  const { user, logout, theme, toggleTheme } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  }

  return (
    <header className="header">
      <h1 className="header-title">My App Suite</h1>
      {user && (
        <div className="header-right">
          {user.role == "admin" &&
            <nav className="nav-links">
              {availableLinks.map((app) => {
                const isFavorite = user.favorites?.includes(app);
                return (
                  <button key={app} onClick={() => switchApp(app)}>
                    {app.charAt(0).toUpperCase() + app.slice(1)}
                    {user.role === "admin" && (
                      <span
                        className="favorite-icon"
                      >
                        {isFavorite ? "❤️" : "🤍"}
                      </span>
                    )}
                  </button>
                )
              })}
            </nav>
          }
          <button onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
          <div className="user-info">
            <span className="username">Welcome, {user.username}</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      )}
    </header>
  );
}
