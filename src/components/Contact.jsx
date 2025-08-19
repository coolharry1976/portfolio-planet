import React, { useState } from "react";

export default function Contact({ isPaper = true }) {
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const OUTER = isPaper ? "py-20 px-6 bg-zinc-100 text-zinc-900" : "py-20 px-6 bg-zinc-900 text-white";
  const CARD  = isPaper ? "bg-white rounded-2xl shadow-xl ring-1 ring-zinc-200 p-8 md:p-10" : "bg-zinc-900/60 rounded-2xl shadow-lg ring-1 ring-white/10 p-8 md:p-10";
  const INPUT = isPaper ? "w-full bg-white border border-zinc-300 rounded-lg p-3 text-zinc-900" : "w-full bg-zinc-900/70 border border-zinc-800 rounded-lg p-3 text-white";

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/REPLACE_WITH_YOURS", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: state.name,
          email: state.email,
          message: state.message,
        }),
      });
      if (res.ok) setStatus("sent");
      else throw new Error("Failed");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className={OUTER}>
      <div className="max-w-3xl mx-auto">
        <div className={CARD}>
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

          <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
            <input className={INPUT} placeholder="Your name" name="name" value={state.name} onChange={(e)=>setState({...state, name:e.target.value})} required />
            <input className={INPUT} placeholder="Your email" type="email" name="email" value={state.email} onChange={(e)=>setState({...state, email:e.target.value})} required />
            <textarea className={INPUT} placeholder="Your message" rows="5" name="message" value={state.message} onChange={(e)=>setState({...state, message:e.target.value})} required />
            <div className="flex flex-wrap gap-3 items-center">
              <button disabled={status==="sending" || status==="sent"}
                className={isPaper ? "px-4 py-2 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 disabled:opacity-60" : "px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white disabled:opacity-60"}>
                {status==="sending" ? "Sending…" : status==="sent" ? "Sent ✅" : "Send Message"}
              </button>
              {status==="error" && <span className="text-red-500 text-sm">Something went wrong. Try again.</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
