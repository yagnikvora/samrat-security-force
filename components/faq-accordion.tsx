"use client";

import type { FaqItem } from "@/lib/site-config";
import { useId, useState } from "react";

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const accordionId = useId().replace(/:/g, "");
  const [desktopActiveIndex, setDesktopActiveIndex] = useState(0);

  const toggleDesktopItem = (index: number) => {
    setDesktopActiveIndex((current) => (current === index ? -1 : index));
  };

  const closeOtherMobileItems = (openedIndex: number, target: EventTarget | null) => {
    if (!(target instanceof HTMLDetailsElement) || !target.open) {
      return;
    }

    const all = target.parentElement?.querySelectorAll("details.faq-item") ?? [];
    all.forEach((item, index) => {
      if (index !== openedIndex) {
        item.removeAttribute("open");
      }
    });
  };

  return (
    <>
      <div className="hidden space-y-3 lg:block">
        {items.map((item, index) => {
          const isOpen = index === desktopActiveIndex;
          const answerId = `faq-answer-desktop-${accordionId}-${index}`;
          const buttonId = `faq-button-desktop-${accordionId}-${index}`;

          return (
            <div key={item.question}>
              <article className="rounded-xl border border-white/15 bg-zinc-900/60 shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  id={buttonId}
                  onClick={() => toggleDesktopItem(index)}
                >
                  <span className={`text-sm font-semibold sm:text-base ${isOpen ? "text-brand" : "text-white"}`}>{item.question}</span>
                  <span className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand" : "text-white"}`}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              </article>

              <div
                id={answerId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-3 py-2 sm:px-4 sm:py-3">
                    <p className="text-[15px] leading-7 text-slate-200">{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="space-y-3 lg:hidden">
        {items.map((item, index) => {
          const answerId = `faq-answer-mobile-${accordionId}-${index}`;
          const buttonId = `faq-button-mobile-${accordionId}-${index}`;

          return (
            <details
              key={item.question}
              name={`faq-mobile-${accordionId}`}
              className="faq-item rounded-xl border border-white/15 bg-zinc-900/60 shadow-[0_6px_20px_rgba(0,0,0,0.25)]"
              onToggle={(event) => closeOtherMobileItems(index, event.currentTarget)}
            >
              <summary id={buttonId} className="faq-item__trigger flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                <span className="faq-item__question text-sm font-semibold sm:text-base">{item.question}</span>
                <span className="faq-item__chevron shrink-0 text-white">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </summary>

              <div id={answerId} role="region" aria-labelledby={buttonId} className="faq-item__content">
                <div className="overflow-hidden">
                  <div className="px-3 py-2 sm:px-4 sm:py-3">
                    <p className="text-[15px] leading-7 text-slate-200">{item.answer}</p>
                  </div>
                </div>
              </div>
            </details>
          );
        })}
      </div>
    </>
  );
}
