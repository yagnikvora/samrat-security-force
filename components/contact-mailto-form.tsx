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
  const contactForm = siteConfig.contactForm;

  const mailBody = useMemo(() => {
    return [
      `Name: ${formState.name}`,
      `Email: ${formState.email}`,
      "",
      formState.message,
    ].join("\n");
  }, [formState]);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(formState.subject || contactForm.defaultSubject);
    const body = encodeURIComponent(mailBody);
    return `mailto:${siteConfig.brand.supportEmail}?subject=${subject}&body=${body}`;
  }, [formState.subject, mailBody, contactForm.defaultSubject]);

  const validate = () => {
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      return contactForm.errors.required;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      return contactForm.errors.invalidEmail;
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

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        placeholder={contactForm.placeholders.name}
        className="w-full rounded-md border border-white/10 bg-zinc-900/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-brand"
        value={formState.name}
        onChange={(event) => setFormState((old) => ({ ...old, name: event.target.value }))}
      />

      <input
        placeholder={contactForm.placeholders.email}
        className="w-full rounded-md border border-white/10 bg-zinc-900/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-brand"
        type="email"
        value={formState.email}
        onChange={(event) => setFormState((old) => ({ ...old, email: event.target.value }))}
      />

      <input
        placeholder={contactForm.placeholders.subject}
        className="w-full rounded-md border border-white/10 bg-zinc-900/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-brand"
        value={formState.subject}
        onChange={(event) => setFormState((old) => ({ ...old, subject: event.target.value }))}
      />

      <textarea
        placeholder={contactForm.placeholders.message}
        className="h-32 w-full resize-none rounded-md border border-white/10 bg-zinc-900/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-brand sm:h-40"
        value={formState.message}
        onChange={(event) => setFormState((old) => ({ ...old, message: event.target.value }))}
      />

      {formError ? <p className="text-sm text-red-400">{formError}</p> : null}

      <div className="pt-1">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition hover:brightness-110"
        >
          {contactForm.submitLabel}
        </button>
      </div>
    </form>
  );
}
