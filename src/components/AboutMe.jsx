import React from "react";
const BASE = import.meta.env.BASE_URL;

export default function AboutMe({ isPaper = true }) {
  return (
    <section className={isPaper ? "py-20 px-6 bg-zinc-100 text-zinc-900" : "py-20 px-6 bg-zinc-900 text-white"}>
      <div className="max-w-5xl mx-auto">
        <div className={isPaper
          ? "bg-white rounded-2xl shadow-xl ring-1 ring-zinc-200 p-8 md:p-10"
          : "bg-zinc-900/60 rounded-2xl shadow-lg ring-1 ring-white/10 p-8 md:p-10"}>
          <h2 className={isPaper ? "text-3xl md:text-4xl font-bold mb-5 text-zinc-900" : "text-3xl md:text-4xl font-bold mb-5 text-white"}>
            About Me
          </h2>

          <p className={isPaper ? "text-lg leading-relaxed text-zinc-700" : "text-lg leading-relaxed text-zinc-300"}>
            I’m <span className="font-semibold">Desmond Harry Adebowale</span>, a Computer Science graduate
            passionate about building applications that make life simpler and more efficient.
            I work with Java, Python, JavaScript,<span className={isPaper ? "font-medium text-zinc-900" : "font-medium text-white"}> React</span>, and SQL, and I’ve shipped
            cloud projects using AWS (Lambda, API Gateway, DynamoDB, S3).
          </p>

          <p className={isPaper ? "mt-4 text-zinc-700" : "mt-4 text-zinc-300"}>
            <span className={isPaper ? "font-semibold text-zinc-900" : "font-semibold text-white"}>Teamwork / Real-world impact:</span> during my
            internship at <span className={isPaper ? "font-medium text-zinc-900" : "font-medium text-white"}>Jenzabar @ NCTC</span> (Nov 2023–May 2025),
            I collaborated on IT support tickets and student data systems, learning SQL/Java/C++ workflows and
            strengthening communication and debugging with stakeholders.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`${BASE}resume/Desmond_Harry_Adebowale_Resume.pdf`}
              target="_blank"
              rel="noreferrer"
              className={isPaper
                ? "px-4 py-2 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition"
                : "px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"}
            >
              📄 Download Resume (PDF)
            </a>
            <a href="mailto:harryadebowale@gmail.com" className={isPaper ? "px-4 py-2 rounded-lg bg-zinc-100 text-zinc-900 ring-1 ring-zinc-300 hover:bg-zinc-200" : "px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20"}>Email</a>
            <a href="https://www.linkedin.com/in/harry-adebowale" target="_blank" rel="noreferrer" className={isPaper ? "px-4 py-2 rounded-lg bg-zinc-100 text-zinc-900 ring-1 ring-zinc-300 hover:bg-zinc-200" : "px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20"}>LinkedIn</a>
            <a href="https://github.com/coolharry1976" target="_blank" rel="noreferrer" className={isPaper ? "px-4 py-2 rounded-lg bg-zinc-100 text-zinc-900 ring-1 ring-zinc-300 hover:bg-zinc-200" : "px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20"}>GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
