import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      filename: "remoteEntry.js",
      remotes: {
        admin: "http://localhost:3001/remoteEntry.js",
        staff: "http://localhost:3002/remoteEntry.js",
        user: "http://localhost:3003/remoteEntry.js",
      },
      exposes: {
        "./store": "./src/store.js",
      },
      shared: ["react", "react-dom", "react-router-dom", "zustand", "zustand/middleware"],
    }),
  ],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  build: {
    target: "esnext",
    assetsDir: ""
  },
});

