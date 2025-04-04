import React from "react";
import { useAuthStore } from "shell/store";
import "./UserOrders.css";

export default function UserOrders() {
  const {theme} = useAuthStore();
  return (
    <div className={`orders-container ${theme}`}>
      <h2>Order History</h2>
      <ul className={`order-list ${theme}`}>
        <li>📦 Order #12345 - Delivered</li>
        <li>🚚 Order #67890 - In Transit</li>
        <li>🛒 Order #11223 - Pending</li>
      </ul>
    </div>
  );
}
