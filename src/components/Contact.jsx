import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
    window.location.href = `mailto:harryadebowale@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="max-w-2xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact</h2>
      <p className="text-zinc-300 mb-6">Interested in working together or have a question? Send me a message.</p>

      <form onSubmit={onSubmit} className="space-y-4">
        <input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})}
          name="name" placeholder="Your name"
          className="w-full bg-zinc-900/70 border border-zinc-800 rounded-lg p-3 text-white" required />
        <input value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})}
          name="email" type="email" placeholder="Your email"
          className="w-full bg-zinc-900/70 border border-zinc-800 rounded-lg p-3 text-white" required />
        <textarea value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})}
          name="message" placeholder="Your message" rows="5"
          className="w-full bg-zinc-900/70 border border-zinc-800 rounded-lg p-3 text-white" required />
        <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white">Send</button>
      </form>

      <div className="mt-6 flex gap-3">
        <a href="https://www.linkedin.com/in/harry-adebowale" target="_blank" rel="noreferrer"
           className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white">LinkedIn</a>
        <a href="https://github.com/coolharry1976" target="_blank" rel="noreferrer"
           className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white">GitHub</a>
        <a href="mailto:harryadebowale@gmail.com"
           className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white">Email</a>
      </div>
    </section>
  );
}
