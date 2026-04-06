"use client";

import { FormEvent, useMemo, useState } from "react";
import { siteConfig } from "@/lib/site-config";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactMailtoForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [formError, setFormError] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const mailBody = useMemo(() => {
    return [
      `Name: ${formState.name}`,
      `Email: ${formState.email}`,
      "",
      formState.message,
    ].join("\n");
  }, [formState]);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(formState.subject || "Security Service Inquiry");
    const body = encodeURIComponent(mailBody);
    return `mailto:${siteConfig.brand.supportEmail}?subject=${subject}&body=${body}`;
  }, [formState.subject, mailBody]);

  const validate = () => {
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      return "Please fill in your name, email, and message.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      return "Please enter a valid email address.";
    }

    return "";
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const error = validate();

    if (error) {
      setFormError(error);
      return;
    }

    setFormError("");
    window.location.href = mailtoHref;
  };

  const copyFallback = async () => {
    await navigator.clipboard.writeText(
      `To: ${siteConfig.brand.supportEmail}\nSubject: ${formState.subject || "Security Service Inquiry"}\n\n${mailBody}`,
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-400">Your Name</span>
          <input
            className="w-full rounded-lg border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition focus:border-brand"
            value={formState.name}
            onChange={(event) => setFormState((old) => ({ ...old, name: event.target.value }))}
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-400">Email</span>
          <input
            className="w-full rounded-lg border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition focus:border-brand"
            type="email"
            value={formState.email}
            onChange={(event) => setFormState((old) => ({ ...old, email: event.target.value }))}
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-400">Subject</span>
        <input
          className="w-full rounded-lg border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition focus:border-brand"
          value={formState.subject}
          onChange={(event) => setFormState((old) => ({ ...old, subject: event.target.value }))}
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-400">Message</span>
        <textarea
          className="h-40 w-full resize-none rounded-lg border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition focus:border-brand"
          value={formState.message}
          onChange={(event) => setFormState((old) => ({ ...old, message: event.target.value }))}
        />
      </label>

      {formError ? <p className="text-sm text-red-400">{formError}</p> : null}

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="rounded-full bg-brand px-7 py-3 text-sm font-semibold text-black transition hover:brightness-110"
        >
          Open Mailbox
        </button>
        <button
          type="button"
          onClick={copyFallback}
          className="rounded-full border border-white/20 px-6 py-3 text-sm text-white transition hover:border-brand"
        >
          {copied ? "Copied" : "Copy Fallback Template"}
        </button>
      </div>
    </form>
  );
}
