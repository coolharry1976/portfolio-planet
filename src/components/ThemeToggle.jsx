import React from "react";

export default function ThemeToggle({ theme, setTheme }) {
  const next = theme === "space" ? "paper" : "space";
  return (
    <button
      onClick={() => setTheme(next)}
      className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm"
      title="Toggle theme"
    >
      {theme === "space" ? "☀️ Paper" : "🌑 Space"}
    </button>
  );
}
