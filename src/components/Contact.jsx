import React, { useState } from "react";

export default function Contact({ isPaper = true }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
    window.location.href = `mailto:harryadebowale@gmail.com?subject=${subject}&body=${body}`;
  };

  const outer = isPaper ? "py-20 px-6 bg-zinc-100 text-zinc-900" : "py-20 px-6 bg-zinc-900 text-white";
  const card  = isPaper ? "bg-white rounded-2xl shadow-xl ring-1 ring-zinc-200 p-8 md:p-10" : "bg-zinc-900/60 rounded-2xl shadow-lg ring-1 ring-white/10 p-8 md:p-10";
  const input = isPaper ? "w-full bg-white border border-zinc-300 rounded-lg p-3 text-zinc-900" : "w-full bg-zinc-900/70 border border-zinc-800 rounded-lg p-3 text-white";

  return (
    <section id="contact" className={outer}>
      <div className="max-w-3xl mx-auto">
        <div className={card}>
          <h2 className="text-3xl md:text-4xl font-bold mb-1">Contact</h2>
          <p className={isPaper ? "text-zinc-700" : "text-zinc-300"}>
            Let’s connect. I’m open to entry-level software or data roles — and quick chats.
          </p>

          {/* Clear CTA */}
          <div className="mt-4 mb-6">
            <a
              href="mailto:harryadebowale@gmail.com"
              className={isPaper
                ? "inline-block px-5 py-3 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800"
                : "inline-block px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white"}
            >
              📩 Email Me
            </a>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} name="name" placeholder="Your name" className={input} required />
            <input value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} name="email" type="email" placeholder="Your email" className={input} required />
            <textarea value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} name="message" placeholder="Your message" rows="5" className={input} required />
            <div className="flex flex-wrap gap-3">
              <button className={isPaper ? "px-4 py-2 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800" : "px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"}>
                Send Message
              </button>
              <a href="https://www.linkedin.com/in/harry-adebowale" target="_blank" rel="noreferrer" className={isPaper ? "px-4 py-2 rounded-lg bg-zinc-100 text-zinc-900 ring-1 ring-zinc-300 hover:bg-zinc-200" : "px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"}>LinkedIn</a>
              <a href="https://github.com/coolharry1976" target="_blank" rel="noreferrer" className={isPaper ? "px-4 py-2 rounded-lg bg-zinc-100 text-zinc-900 ring-1 ring-zinc-300 hover:bg-zinc-200" : "px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"}>GitHub</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
