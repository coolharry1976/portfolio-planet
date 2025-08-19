import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact</h2>
      <p className="text-zinc-300 mb-6">
        Interested in working together or have a question? Reach out anytime.
      </p>

      <div className="flex gap-3">
        <a
          href="mailto:harryadebowale@gmail.com"
          className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/harry-adebowale"
          target="_blank" rel="noreferrer"
          className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/coolharry1976"
          target="_blank" rel="noreferrer"
          className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
