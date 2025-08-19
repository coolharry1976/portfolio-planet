import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "space");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

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
