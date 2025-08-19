import React from "react";
import Earth from "./components/Earth";
import Projects from "./components/Projects";

export default function App() {
  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-screen min-h-screen bg-black relative">
      {/* 3D hero */}
      <div className="h-screen">
        <Earth />
        {/* top nav */}
        <header className="absolute top-0 left-0 w-full p-4 flex items-center justify-between">
          <div className="text-white font-semibold">Desmond H. Adebowale</div>
          <nav className="flex gap-4">
            <button onClick={scrollToProjects} className="text-white/80 hover:text-white">
              Projects
            </button>
            <a href="https://www.linkedin.com/in/harry-adebowale" target="_blank" rel="noreferrer"
               className="text-white/80 hover:text-white">LinkedIn</a>
            <a href="mailto:harryadebowale@gmail.com" className="text-white/80 hover:text-white">Contact</a>
          </nav>
        </header>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white/80 text-sm">
          Drag to orbit • Zoom disabled for clarity
        </div>
      </div>

      {/* projects */}
      <Projects />
    </div>
  );
}
