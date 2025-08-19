import React, { useState } from "react";

/** Simple placeholder (SVG) used if a screenshot file is missing */
const PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
  <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675' viewBox='0 0 1200 675'>
    <defs>
      <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
        <stop offset='0%' stop-color='#0f172a'/>
        <stop offset='100%' stop-color='#111827'/>
      </linearGradient>
    </defs>
    <rect width='1200' height='675' fill='url(#g)'/>
    <g fill='none' stroke='#334155' stroke-width='2' opacity='0.5'>
      <path d='M0 600 C 300 500, 900 700, 1200 600'/>
      <path d='M0 500 C 300 400, 900 600, 1200 500'/>
      <path d='M0 400 C 300 300, 900 500, 1200 400'/>
    </g>
    <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
      font-family='Arial, sans-serif' font-size='34' fill='#e5e7eb'>Screenshot coming soon</text>
  </svg>`);

/** Card with light/dark screenshot toggle */
function ProjectCard({ title, desc, tech, github, lightShot, darkShot }) {
  const [mode, setMode] = useState("light");
  const currentSrc = (mode === "light" ? lightShot : darkShot) || PLACEHOLDER;

  return (
    <div className="bg-zinc-900/60 rounded-2xl shadow-lg p-4 border border-zinc-800 hover:border-zinc-600 transition">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <div className="flex items-center gap-2 text-xs">
          <span className={`px-2 py-1 rounded ${mode==='light'?'bg-zinc-700 text-white':'bg-zinc-800 text-zinc-300'}`}>Light</span>
          <button
            className="px-2 py-1 rounded bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            aria-label="Toggle screenshot mode"
            title="Toggle screenshot mode"
          >
            Toggle
          </button>
          <span className={`px-2 py-1 rounded ${mode==='dark'?'bg-zinc-700 text-white':'bg-zinc-800 text-zinc-300'}`}>Dark</span>
        </div>
      </div>

      <div className="aspect-video w-full overflow-hidden rounded-xl ring-1 ring-zinc-800 bg-black">
        <img
          src={currentSrc}
          alt={`${title} ${mode} screenshot`}
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.src = PLACEHOLDER; }}
        />
      </div>

      <p className="text-zinc-300 mt-3 text-sm leading-relaxed">{desc}</p>

      <div className="mt-2 text-zinc-400 text-xs">{tech}</div>

      <div className="mt-4 flex gap-3">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  // 👉 Update only the screenshot paths below after you add files to /public/screenshots/
  const items = [
    {
      title: "Pokémon Search App",
      desc: "Java + HTML/CSS app with API integration for searching Pokémon with clean UI and fast lookup.",
      tech: "Java • REST API • HTML/CSS",
      github: "https://github.com/coolharry1976/pokemon-search",
      lightShot: "/screenshots/pokemon-light.png",
      darkShot: "/screenshots/pokemon-dark.png",
    },
    {
      title: "Weather Dashboard",
      desc: "Node/Express backend with SQLite and Chart.js for trend visualization; dark/light modes supported.",
      tech: "Node.js • Express • SQLite • Chart.js",
      github: "https://github.com/coolharry1976/weather-dashboard",
      lightShot: "/screenshots/weather-light.png",
      darkShot: "/screenshots/weather-dark.png",
    },
    {
      title: "Smart Productivity Assistant",
      desc: "Serverless task manager built on AWS (Lambda, API Gateway, DynamoDB, S3). Auth + CRUD tasks.",
      tech: "AWS Lambda • API Gateway • DynamoDB • S3",
      github: "https://github.com/coolharry1976/smart-productivity-assistant",
      lightShot: "/screenshots/spa-light.png",  // add later
      darkShot: "/screenshots/spa-dark.png",    // add later
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Projects</h2>
      <p className="text-zinc-300 mb-8">
        A selection of work that shows my range across frontend, backend, cloud, and data.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
