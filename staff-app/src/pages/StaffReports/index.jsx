import React from "react";
import "./StaffReports.css";
import { useAuthStore } from "shell/store";

export default function StaffReports() {
  const {theme} = useAuthStore();
  return (
    <div className={`reports-container ${theme}`}>
      <h2>Reports</h2>
      <div className={`report-section ${theme}`}>
        <h3>Weekly Performance</h3>
        <p>Analyze key metrics and performance indicators for the past week.</p>
      </div>
      <div className={`report-section ${theme}`}>
        <h3>Incident Reports</h3>
        <p>Review incidents and ensure proper resolution and follow-up.</p>
      </div>
    </div>
  );
}
