import React from "react";
import { useAuthStore } from "shell/store";
import "./UserProfile.css";

export default function UserProfile() {
  const { theme } = useAuthStore();
  return (
    <div className={`profile-container ${theme}`}>
      <h2>User Profile</h2>
      <div className={`profile-section ${theme}`}>
        <h3>👤 Name: John Doe</h3>
        <h3>📧 Email: john.doe@example.com</h3>
        <h3>📅 Member Since: January 2023</h3>
      </div>
    </div>
  );
}
