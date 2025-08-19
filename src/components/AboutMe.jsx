import React from "react";

const BASE = import.meta.env.BASE_URL; // ensures correct path on GitHub Pages

export default function AboutMe() {
  return (
    <section className="py-20 px-6 bg-zinc-100 text-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl ring-1 ring-zinc-200 p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-zinc-900">
            About Me
          </h2>

          <p className="text-lg leading-relaxed text-zinc-700">
            I’m <span className="font-semibold text-zinc-900">Desmond Harry Adebowale</span>, a Computer Science graduate
            passionate about building applications that make life simpler and more efficient.
            I work with Java, Python, JavaScript, <span className="font-medium text-zinc-900">React</span>, and SQL, and I’ve shipped
            cloud projects using AWS (Lambda, API Gateway, DynamoDB, S3). I’m seeking an entry-level software
            or data role at a growth-focused company where I can keep learning and deliver real impact.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`${BASE}resume/Desmond_Harry_Adebowale_Resume.pdf`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition"
            >
              📄 Download Resume (PDF)
            </a>
            <a
              href="mailto:harryadebowale@gmail.com"
              className="px-4 py-2 rounded-lg bg-zinc-100 text-zinc-900 ring-1 ring-zinc-300 hover:bg-zinc-200 transition"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/harry-adebowale"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-zinc-100 text-zinc-900 ring-1 ring-zinc-300 hover:bg-zinc-200 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/coolharry1976"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-zinc-100 text-zinc-900 ring-1 ring-zinc-300 hover:bg-zinc-200 transition"
            >
              GitHub
            </a>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-zinc-900 mb-3">Resume Highlights</h3>
            <ul className="list-disc list-inside text-zinc-700 space-y-2">
              <li>
                <span className="text-zinc-900 font-medium">Education:</span> North Central Texas College —
                Associate of Computer Science (Honors Program)
              </li>
              <li>
                <span className="text-zinc-900 font-medium">Internship:</span> Jenzabar @ NCTC (Nov 2023 – May 2025) —
                IT ticket support, student data systems, exposure to SQL/Java/C++ workflows
              </li>
              <li>
                <span className="text-zinc-900 font-medium">Projects:</span> Pokémon Search, Weather Dashboard (Node/SQLite/Chart.js),
                Smart Productivity Assistant (AWS serverless)
              </li>
              <li>
                <span className="text-zinc-900 font-medium">Certificates:</span> FreeCodeCamp — Responsive Web Design;
                JavaScript Algorithms &amp; Data Structures
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
