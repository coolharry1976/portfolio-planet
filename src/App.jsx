import React, { useEffect, useState, lazy, Suspense } from "react";
import Earth from "./components/Earth";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";

const Projects = lazy(() => import("./components/Projects"));

export default function App() {
  const [active, setActive] = useState("about");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "space");

  // Persist theme + reflect on <html>
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Scrollspy for nav highlighting
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navBtn = (id, label) => (
    <button
      onClick={() => scrollTo(`#${id}`)}
      className={`px-3 py-1 rounded-full transition ${
        active === id
          ? "bg-white text-black"
          : "text-white/85 hover:text-white bg-white/10 hover:bg-white/20"
      }`}
    >
      {label}
    </button>
  );

  const isPaper = theme === "paper";

  return (
    <div className="w-screen min-h-screen bg-black relative text-white">
      {/* HERO — Earth full screen, minimal UI */}
      <div className="relative h-screen">
        <Earth />

        {/* Top nav over hero */}
        <header className="absolute top-0 left-0 w-full p-4 flex items-center justify-center z-20">
          <nav className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full border border-white/10">
            {navBtn("about", "About")}
            {navBtn("projects", "Projects")}
            {navBtn("contact", "Contact")}
            <div className="mx-1 opacity-60">|</div>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </nav>
        </header>

        {/* Bigger, clearer scroll cue */}
        <button
          onClick={() => scrollTo("#about")}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20
                     flex items-center gap-2 px-4 py-2 rounded-full
                     bg-white/10 hover:bg-white/20 border border-white/20
                     text-white/90 hover:text-white text-base md:text-lg transition"
          aria-label="Scroll down"
        >
          <span>Scroll</span>
          <span className="animate-bounce text-2xl md:text-3xl leading-none">↓</span>
        </button>
      </div>

      {/* CONTENT */}
      <main>
        <section id="about">
          <AboutMe isPaper={isPaper} />
        </section>

        <section id="projects">
          <Suspense
            fallback={
              <div className="px-4 py-16 text-center text-white/70">
                Loading projects…
              </div>
            }
          >
            <Projects />
          </Suspense>
        </section>

        <section id="contact">
          <Contact isPaper={isPaper} />
        </section>
      </main>
    </div>
  );
}
