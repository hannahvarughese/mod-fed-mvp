import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "staff",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.jsx",
      },
      remotes: {
        shell: "http://localhost:3000/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom", "zustand"], 
    }),
  ],
  server: {
    port: 3002,
  },
  preview: {
    port: 3002,
  },
  build: {
    target: "esnext",
    assetsDir: "", 
  },
});

