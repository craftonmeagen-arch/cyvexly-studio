"use client";

import { useState, type FormEvent } from "react";
import { contactTopics, siteConfig } from "@/lib/site-config";

type Status = "idle" | "sent" | "error";

type Errors = Partial<Record<"name" | "email" | "message" | "consent", string>>;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const topic = String(data.get("topic") ?? contactTopics[0]);
    const message = String(data.get("message") ?? "").trim();
    const consent = data.get("consent") === "on";

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!message) nextErrors.message = "Please enter a message.";
    if (!consent) nextErrors.consent = "Please confirm you'd like us to reply.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      return;
    }

    setErrors({});

    const subject = `[${topic}] Message from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("sent");
    form.reset();
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="glass-panel rounded-2xl px-6 py-8 text-center"
      >
        <h2 className="font-display text-lg font-semibold text-midnight-slate">
          Your email app should be open now.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-cool-graphite">
          We&apos;ve pre-filled a message to{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-cyber-blue">
            {siteConfig.email}
          </a>{" "}
          — just press send from there. If nothing opened, email us directly
          at that address.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-medium text-cyber-blue hover:text-[#0b4fb0]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="glass-panel rounded-2xl p-6 sm:p-8">
      {status === "error" && (
        <p
          role="alert"
          className="mb-6 rounded-xl border border-warning-coral/40 bg-warning-coral/10 px-4 py-3 text-sm text-warning-coral"
        >
          Please fix the highlighted fields below.
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-midnight-slate">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="mt-2 w-full rounded-lg border border-smoke-glass bg-frosted-glass px-4 py-2.5 text-sm text-midnight-slate outline-none focus-visible:border-cyber-blue"
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-warning-coral">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-midnight-slate">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="mt-2 w-full rounded-lg border border-smoke-glass bg-frosted-glass px-4 py-2.5 text-sm text-midnight-slate outline-none focus-visible:border-cyber-blue"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-warning-coral">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="topic" className="text-sm font-medium text-midnight-slate">
          Topic
        </label>
        <select
          id="topic"
          name="topic"
          defaultValue={contactTopics[0]}
          className="mt-2 w-full rounded-lg border border-smoke-glass bg-frosted-glass px-4 py-2.5 text-sm text-midnight-slate outline-none focus-visible:border-cyber-blue"
        >
          {contactTopics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-medium text-midnight-slate">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-2 w-full rounded-lg border border-smoke-glass bg-frosted-glass px-4 py-2.5 text-sm text-midnight-slate outline-none focus-visible:border-cyber-blue"
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-warning-coral">
            {errors.message}
          </p>
        )}
      </div>

      <div className="mt-5 flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? "consent-error" : undefined}
          className="mt-1 h-4 w-4 shrink-0 rounded border-smoke-glass text-cyber-blue focus-visible:outline-2 focus-visible:outline-cyber-blue"
        />
        <label htmlFor="consent" className="text-sm text-cool-graphite">
          I&apos;d like Cyvexly Studio to reply to this message.
        </label>
      </div>
      {errors.consent && (
        <p id="consent-error" className="mt-1.5 text-xs text-warning-coral">
          {errors.consent}
        </p>
      )}

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyber-blue px-6 py-3 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(15,102,224,0.55)] transition-colors duration-200 hover:bg-[#0b4fb0] focus-visible:bg-[#0b4fb0] sm:w-auto"
      >
        Send message
      </button>
    </form>
  );
}
