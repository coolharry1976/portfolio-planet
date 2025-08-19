import React from "react";
import Earth from "./components/Earth";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

export default function App() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-screen min-h-screen bg-black relative text-white">
      {/* HERO: full-screen 3D Earth */}
      <div className="h-screen relative">
        <Earth />

        {/* Minimal top nav (no name here to avoid duplication) */}
        <header className="absolute top-0 left-0 w-full p-4 flex items-center justify-center">
          <nav className="flex gap-6 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <button onClick={() => scrollTo("#about")} className="text-white/85 hover:text-white">About</button>
            <button onClick={() => scrollTo("#projects")} className="text-white/85 hover:text-white">Projects</button>
            <button onClick={() => scrollTo("#contact")} className="text-white/85 hover:text-white">Contact</button>
          </nav>
        </header>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white/80 text-sm">
          Drag to orbit • Zoom disabled for clarity
        </div>
      </div>

      {/* CONTENT SECTIONS */}
      <main>
        <section id="about"><AboutMe /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}
