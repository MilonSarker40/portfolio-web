import { create } from "zustand";

interface PortfolioState {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const usePortfolio = create<PortfolioState>((set) => ({
  theme: "light",
  toggleTheme: () => set((state) => ({
    theme: state.theme === "light" ? "dark" : "light"
  }))
}));
