"use client";

import { useState, type FormEvent } from "react";
import { contactTopics, siteConfig } from "@/lib/site-config";

type Status = "idle" | "submitting" | "sent" | "error";

type Errors = Partial<Record<"name" | "email" | "message" | "consent" | "honeypot", string>>;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const topic = String(data.get("topic") ?? contactTopics[0]);
    const message = String(data.get("message") ?? "").trim();
    const consent = data.get("consent") === "on";
    const honeypot = String(data.get("contact-company-website") ?? "").trim();

    const nextErrors: Errors = {};
    if (honeypot) nextErrors.honeypot = "Submission blocked.";
    if (!name) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!message) nextErrors.message = "Please enter a message.";
    if (!consent) nextErrors.consent = "Please confirm you'd like us to reply.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      window.requestAnimationFrame(() => {
        form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      });
      return;
    }

    setErrors({});
    setSubmitError(null);
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          topic,
          message,
          consent,
          "contact-company-website": honeypot,
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        if (payload?.error === "validation" && payload.fields) {
          setErrors(payload.fields as Errors);
          setStatus("error");
          return;
        }
        setSubmitError(
          response.status === 429
            ? "Too many messages from this connection. Please try again in a few minutes."
            : `Something went wrong sending your message. Please try again, or email us directly at ${siteConfig.email}.`,
        );
        setStatus("error");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setSubmitError(
        `Something went wrong sending your message. Please check your connection and try again, or email us directly at ${siteConfig.email}.`,
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="glass-panel rounded-2xl px-6 py-8 text-center"
      >
        <h2 className="font-display text-lg font-semibold text-midnight-slate">
          Message sent.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-cool-graphite">
          Thanks for reaching out — we&apos;ve sent your message to Cyvexly Studio and emailed
          you a confirmation. We respond within two business days.
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
      {/* Honeypot: spam protection without a visual puzzle. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-company-website">Leave this field blank</label>
        <input
          id="contact-company-website"
          name="contact-company-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mb-6 rounded-xl border border-warning-coral/40 bg-warning-coral/10 px-4 py-3 text-sm text-warning-coral"
        >
          {submitError ?? "Please fix the highlighted fields below."}
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

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-midnight-slate">
            Phone <span className="font-normal text-cool-graphite">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-2 w-full rounded-lg border border-smoke-glass bg-frosted-glass px-4 py-2.5 text-sm text-midnight-slate outline-none focus-visible:border-cyber-blue"
          />
        </div>

        <div>
          <label htmlFor="company" className="text-sm font-medium text-midnight-slate">
            Company <span className="font-normal text-cool-graphite">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className="mt-2 w-full rounded-lg border border-smoke-glass bg-frosted-glass px-4 py-2.5 text-sm text-midnight-slate outline-none focus-visible:border-cyber-blue"
          />
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
        disabled={status === "submitting"}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyber-blue px-6 py-3 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(15,102,224,0.55)] transition-colors duration-200 hover:bg-[#0b4fb0] focus-visible:bg-[#0b4fb0] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
