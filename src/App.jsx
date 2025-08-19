import React, { useEffect, useState, lazy, Suspense } from "react";
import Earth from "./components/Earth";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

const Projects = lazy(() => import("./components/Projects"));

export default function App() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const obs = new IntersectionObserver((entries) => {
      const vis = entries.filter(e => e.isIntersecting).sort((a,b)=> b.intersectionRatio - a.intersectionRatio);
      if (vis[0]) setActive(vis[0].target.id);
    }, { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] });
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navBtn = (id, label) => (
    <button
      onClick={() => scrollTo(`#${id}`)}
      className={`px-3 py-1 rounded-full ${active===id ? "bg-white/20 text-white" : "text-white/85 hover:text-white"}`}
    >
      {label}
    </button>
  );

  return (
    <div className="w-screen min-h-screen bg-black relative text-white">
      {/* HERO */}
      <div className="h-screen relative">
        <Earth />
        <header className="absolute top-0 left-0 w-full p-4 flex items-center justify-center">
          <nav className="flex gap-2 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full border border-white/10">
            {navBtn("about","About")}
            {navBtn("projects","Projects")}
            {navBtn("contact","Contact")}
          </nav>
        </header>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white/80 text-sm">
          Drag to orbit • Zoom disabled for clarity
        </div>
      </div>

      {/* CONTENT */}
      <main>
        <section id="about"><AboutMe /></section>
        <section id="projects">
          <Suspense fallback={<div className="px-4 py-16 text-center text-white/70">Loading projects…</div>}>
            <Projects />
          </Suspense>
        </section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}
