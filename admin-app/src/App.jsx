import { Routes, Route, Link } from "react-router-dom";
import { useAuthStore } from "shell/store";
import AdminDashboard from "./pages/AdminDashboard";
import Settings from "./pages/Settings";
import './App.css';

function App() {
  const { theme } = useAuthStore();
  console.log("theme =>", theme)
  return (
    <div className={`app-container ${theme}`}>
      <h1>Admin App</h1>
      <nav className="common-nav">
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/settings">Settings</Link>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;