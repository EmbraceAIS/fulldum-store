import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CONTACT_EMAIL } from "@/config/buyLinks";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => pageHead({ title: "Contact — FullDum", description: "Write to FullDum about an order, a misprint, or a launch. One email, a real reply.", path: "/contact" }),
  component: Contact,
});

function Contact() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  function send(e: FormEvent) {
    e.preventDefault();
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject || "Hello FullDum")}&body=${encodeURIComponent(message)}`;
  }
  const field = "mt-2 w-full rounded-md border border-input bg-card px-4 py-3 outline-none focus:border-charcoal";
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 pt-14 md:grid-cols-2">
      <div>
        <p className="kicker text-muted-foreground">Pull up a chair</p>
        <h1 className="mt-2 text-4xl font-bold md:text-5xl">Contact</h1>
        <div className="rule-turmeric mt-5" />
        <p className="mt-6 font-warm text-xl italic">Orders, misprints, launch questions. We read everything, usually with chai.</p>
        <a href={`mailto:${CONTACT_EMAIL}`} className="mt-6 inline-block break-all text-lg font-semibold underline decoration-turmeric decoration-2 underline-offset-4">{CONTACT_EMAIL}</a>
      </div>
      <form onSubmit={send} className="rounded-lg bg-card p-6 md:p-8">
        <label className="block text-sm font-medium">Subject<input className={field} value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="About my order" /></label>
        <label className="mt-5 block text-sm font-medium">Message<textarea className={field} rows={6} required value={message} onChange={(e) => setMessage(e.target.value)} /></label>
        <button type="submit" className="btn-ink mt-6 w-full">Open in your email</button>
      </form>
    </section>
  );
}

