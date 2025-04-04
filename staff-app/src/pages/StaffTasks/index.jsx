import React from "react";
import { useAuthStore } from "shell/store";
import "./StaffTasks.css";

export default function StaffTasks() {
  const {theme} = useAuthStore();
  return (
    <div className={`tasks-container ${theme}`}>
      <h2>Staff Tasks</h2>
      <ul className={`task-list ${theme}`}>
        <li>✅ Complete daily reports</li>
        <li>🕒 Follow up with pending support tickets</li>
        <li>📢 Coordinate with the admin team for updates</li>
      </ul>
    </div>
  );
}
