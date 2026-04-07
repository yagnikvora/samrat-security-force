"use client";

import Image from "next/image";
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
  const template = contactForm.emailTemplate;

  const mailBody = useMemo(() => {
    const subject = formState.subject.trim() || contactForm.defaultSubject;

    return [
      template.greeting,
      "",
      template.requestIntro,
      "",
      `${template.detailsHeading}:`,
      `- ${template.fullNameLabel}: ${formState.name}`,
      `- ${template.emailLabel}: ${formState.email}`,
      `- ${template.subjectLabel}: ${subject}`,
      "",
      `${template.messageHeading}:`,
      formState.message,
      "",
      template.signOff,
      "",
      `${template.closingNamePrefix},`,
      formState.name,
    ].join("\n");
  }, [formState, template, contactForm.defaultSubject]);

  const gmailComposeHref = useMemo(() => {
    const subject = formState.subject || contactForm.defaultSubject;
    const params = new URLSearchParams({
      to: siteConfig.brand.supportEmail,
      su: subject,
      body: mailBody,
    });

    return `${contactForm.gmailComposeBaseUrl}&${params.toString()}`;
  }, [formState.subject, mailBody, contactForm.defaultSubject, contactForm.gmailComposeBaseUrl]);

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
    window.open(gmailComposeHref, "_blank", "noopener,noreferrer");
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
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition hover:brightness-110"
        >
          {contactForm.submitLabel}
          <Image
            src="/svgs/common/Breadcrumbs_arrow.svg"
            alt="arrow"
            width={16}
            height={16}
            className="h-4 w-4 brightness-0 invert"
          />
        </button>
      </div>
    </form>
  );
}
