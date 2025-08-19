import React from "react";

export default function AboutMe() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed mb-8">
          I’m <span className="font-semibold">Desmond Harry Adebowale</span>, a driven
          Computer Science graduate with a strong background in programming,
          cloud computing, and data visualization. I’ve gained experience
          building and deploying applications using AWS, SQL, Python, and
          JavaScript. My past roles have strengthened my problem-solving,
          teamwork, and technical skills, and I’m eager to continue growing in
          an entry-level Software or Data role where I can make an impact.
        </p>

        {/* Resume Button */}
        <a
          href="/resume/Desmond_Harry_Adebowale_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  );
}
