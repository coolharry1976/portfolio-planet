import React, { useEffect, useState, lazy, Suspense } from "react";
import Earth from "./components/Earth";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";

const Projects = lazy(() => import("./components/Projects"));

export default function App() {
  const [active, setActive] = useState("about");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "space");
  const [stuck, setStuck] = useState(false);

  // Persist theme + reflect on <html>
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Scrollspy
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const obs = new IntersectionObserver((entries) => {
      const vis = entries.filter(e => e.isIntersecting).sort((a,b)=> b.intersectionRatio - a.intersectionRatio);
      if (vis[0]) setActive(vis[0].target.id);
    }, { rootMargin: "-30% 0px -60% 0px", threshold: [0,0.25,0.5,0.75,1] });
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // Sticky header trigger
  useEffect(() => {
    const onScroll = () => {
      const threshold = Math.max(300, window.innerHeight * 0.6);
      setStuck(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navBtn = (id, labelSmall, labelLarge) => (
    <button
      onClick={() => scrollTo(`#${id}`)}
      className={`px-2.5 py-1.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm transition whitespace-nowrap ${
        active===id ? "bg-white text-black" : "text-white/85 hover:text-white bg-white/10 hover:bg-white/20"
      }`}
    >
      {/* show shorter label on small screens */}
      <span className="md:hidden">{labelSmall}</span>
      <span className="hidden md:inline">{labelLarge ?? labelSmall}</span>
    </button>
  );

  // ===== Brand & Nav (mobile-tuned) ===================================
  const BrandChip = () => (
    <a
      href="#about"
      className="group inline-flex items-center gap-2 md:gap-3 bg-black/35 backdrop-blur-sm border border-white/10 rounded-full pl-2.5 md:pl-3 pr-3 md:pr-4 py-1.5 md:py-2 min-w-0 max-w-[58vw] sm:max-w-none shrink"
      aria-label="Go to About section"
    >
      <span
        className="text-white leading-none text-xs sm:text-sm md:text-base truncate"
        style={{ fontFamily: "'Space Grotesk', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" }}
      >
        <span className="font-bold tracking-wide">Desmond Harry Adebowale</span>
        <span className="hidden sm:inline text-white/70"> · Software Engineer</span>
      </span>
      <span className="text-[9px] sm:text-[10px] md:text-xs px-2 py-[3px] rounded-full border border-white/15 text-white/90 bg-white/10 uppercase tracking-wider whitespace-nowrap">
        Portfolio
      </span>
    </a>
  );

  // Tiny icon theme toggle for mobile
  const MiniThemeToggle = () => (
    <button
      onClick={() => setTheme(theme === "space" ? "paper" : "space")}
      className="md:hidden px-2 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-base"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {theme === "space" ? "☀️" : "🌑"}
    </button>
  );

  const HeaderNav = () => (
    <nav className="flex items-center gap-1.5 md:gap-2 bg-black/30 backdrop-blur-sm px-2 md:px-3 py-1.5 md:py-2 rounded-full border border-white/10">
      {navBtn("about","About")}
      {navBtn("projects","Work","Projects")}
      {navBtn("contact","Contact")}
      {/* Mobile: tiny icon toggle; Desktop: full toggle with text */}
      <MiniThemeToggle />
      <div className="hidden md:block">
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
    </nav>
  );
  // ====================================================================

  const isPaper = theme === "paper";

  return (
    <div className="w-screen min-h-screen bg-black relative text-white">
      {/* HERO */}
      <div className="relative h-screen">
        <Earth />

        {/* Over-hero header */}
        <header className="absolute top-0 left-0 w-full z-20">
          <div className="max-w-6xl mx-auto px-3 md:px-4 py-2 md:py-3 flex items-center justify-between gap-2">
            <BrandChip />
            <HeaderNav />
          </div>
        </header>

        {/* Scroll cue (bigger tap target) */}
        <button
          onClick={() => scrollTo("#about")}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20
                     flex items-center gap-2 px-5 py-3 rounded-full
                     bg-white/10 hover:bg-white/20 border border-white/20
                     text-white/90 hover:text-white text-base md:text-lg transition"
          aria-label="Scroll down"
        >
          <span>Scroll</span>
          <span className="animate-bounce text-2xl md:text-3xl leading-none">↓</span>
        </button>
      </div>

      {/* Sticky header */}
      <div
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
          stuck ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        aria-hidden={!stuck}
      >
        <div className="max-w-6xl mx-auto px-3 md:px-4 py-2">
          <div className="flex items-center justify-between bg-black/55 backdrop-blur-md border border-white/10 rounded-full px-2 md:px-3 py-1.5 md:py-2 gap-2">
            <BrandChip />
            <HeaderNav />
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <main>
        <section id="about"><AboutMe isPaper={isPaper} /></section>
        <section id="projects">
          <Suspense fallback={<div className="px-4 py-16 text-center text-white/70">Loading projects…</div>}>
            <Projects />
          </Suspense>
        </section>
        <section id="contact"><Contact isPaper={isPaper} /></section>
      </main>
    </div>
  );
}
