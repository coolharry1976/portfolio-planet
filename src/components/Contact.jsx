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
    <section id="contact" className="py-20 px-6 bg-zinc-100 text-zinc-900">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl ring-1 ring-zinc-200 p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Contact</h2>
          <p className="text-zinc-700 mb-6">
            Ready to chat about an opportunity or collaboration? Send a quick message or reach me on LinkedIn.
          </p>

          <form onSubmit={onSubmit} className="space-y-4">
            <input
              value={form.name}
              onChange={(e)=>setForm({...form, name:e.target.value})}
              name="name"
              placeholder="Your name"
              className="w-full bg-white border border-zinc-300 rounded-lg p-3 text-zinc-900"
              required
            />
            <input
              value={form.email}
              onChange={(e)=>setForm({...form, email:e.target.value})}
              name="email"
              type="email"
              placeholder="Your email"
              className="w-full bg-white border border-zinc-300 rounded-lg p-3 text-zinc-900"
              required
            />
            <textarea
              value={form.message}
              onChange={(e)=>setForm({...form, message:e.target.value})}
              name="message"
              placeholder="Your message"
              rows="5"
              className="w-full bg-white border border-zinc-300 rounded-lg p-3 text-zinc-900"
              required
            />
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800">
                Send Message
              </button>
              <a
                href="https://www.linkedin.com/in/harry-adebowale"
                target="_blank" rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-zinc-100 text-zinc-900 ring-1 ring-zinc-300 hover:bg-zinc-200"
              >
                LinkedIn
              </a>
              <a
                href="mailto:harryadebowale@gmail.com"
                className="px-4 py-2 rounded-lg bg-zinc-100 text-zinc-900 ring-1 ring-zinc-300 hover:bg-zinc-200"
              >
                Email
              </a>
              <a
                href="https://github.com/coolharry1976"
                target="_blank" rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-zinc-100 text-zinc-900 ring-1 ring-zinc-300 hover:bg-zinc-200"
              >
                GitHub
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
