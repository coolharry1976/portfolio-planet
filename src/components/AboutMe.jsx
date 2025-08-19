import React from "react";
const BASE = import.meta.env.BASE_URL;

export default function AboutMe() {
  return (
    <section className="py-20 px-6 bg-zinc-100 text-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl ring-1 ring-zinc-200 p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-zinc-900">About Me</h2>

          <p className="text-lg leading-relaxed text-zinc-700">
            I’m <span className="font-semibold text-zinc-900">Desmond Harry Adebowale</span>, a Computer Science graduate
            passionate about building applications that make life simpler and more efficient.
            I work with Java, Python, JavaScript, <span className="font-medium text-zinc-900">React</span>, and SQL, and I’ve shipped
            cloud projects using AWS (Lambda, API Gateway, DynamoDB, S3).
          </p>

          <p className="mt-4 text-zinc-700">
            <span className="font-semibold text-zinc-900">Teamwork / Real-world impact:</span> during my
            internship at <span className="font-medium text-zinc-900">Jenzabar @ NCTC</span> (Nov 2023–May 2025),
            I collaborated on IT support tickets and student data systems, learning SQL/Java/C++ workflows and
            strengthening communication and debugging with stakeholders.
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
            <a href="mailto:harryadebowale@gmail.com" className="px-4 py-2 rounded-lg bg-zinc-100 text-zinc-900 ring-1 ring-zinc-300 hover:bg-zinc-200 transition">Email</a>
            <a href="https://www.linkedin.com/in/harry-adebowale" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-zinc-100 text-zinc-900 ring-1 ring-zinc-300 hover:bg-zinc-200 transition">LinkedIn</a>
            <a href="https://github.com/coolharry1976" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-zinc-100 text-zinc-900 ring-1 ring-zinc-300 hover:bg-zinc-200 transition">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
