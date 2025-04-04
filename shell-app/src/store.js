import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  theme: localStorage.getItem("theme") || "light",

  login: async (username, password) => {
    const res = await fetch("http://localhost:4000/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const user = await res.json();
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      set({ user });
    }
  },

  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("theme")
    set({ user: null });
    set({theme: "light"});
  },

  toggleFavorite: async (app) => {
    const { user } = useAuthStore.getState();
    if (!user || user.role !== "admin") return; 

    try {
      const response = await fetch(`http://localhost:4000/users/${user.username}/favorites`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ app }),
      });

      if (!response.ok) throw new Error("Failed to update favorites");

      const data = await response.json();

      set((state) => ({
        user: { ...state.user, favorites: data.favorites },
      }));

      localStorage.setItem("user", JSON.stringify({ ...user, favorites: data.favorites }));
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
  },
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    }),

}));

