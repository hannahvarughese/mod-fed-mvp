import { Route, Routes, Link, Navigate } from "react-router-dom";
import { useAuthStore } from "shell/store";
import StaffDashboard from "./pages/StaffDashboard";
import StaffTasks from "./pages/StaffTasks";
import StaffReports from "./pages/StaffReports";
import "./App.css";

function App() {
  const { user } = useAuthStore();
  const isAdmin = user?.role === "admin";

  return (
    <div className="app-container">
      <nav className="common-nav">
        {isAdmin && <Link to="/staff">Dashboard</Link>}
        <Link to="/staff/reports">Reports</Link>
        <Link to="/staff/tasks">Tasks</Link>
      </nav>
      <div className="content">
        <Routes>
          {isAdmin && <Route path="/" element={<StaffDashboard />} />}
          <Route path="/reports" element={<StaffReports />} />
          <Route path="/tasks" element={<StaffTasks />} />

          {!isAdmin && <Route path="/" element={<Navigate to="/staff/reports" replace />} />}
        </Routes>
      </div>
    </div>
  );
}

export default App;
