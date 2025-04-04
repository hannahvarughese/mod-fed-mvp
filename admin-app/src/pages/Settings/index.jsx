import React from "react";
import { useAuthStore } from "shell/store";
import "./Settings.css";

export default function Settings() {
  const {theme} = useAuthStore();
  return (
    <div className={`settings-container ${theme}`}>
      <h2>Admin Settings</h2>
      <div className={`settings-section ${theme}`}>
        <h3>General Settings</h3>
        <p>Manage system-wide settings including authentication, permissions, and app configurations.</p>
      </div>
      <div className={`settings-section ${theme}`}>
        <h3>Users & Roles</h3>
        <p>Control user access, assign roles, and manage permissions.</p>
      </div>
      <div className={`settings-section ${theme}`}>
        <h3>System Logs</h3>
        <p>View audit logs to monitor activities across the platform.</p>
      </div>
    </div>
  );
}
