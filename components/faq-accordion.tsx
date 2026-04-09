"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/site-config";

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = index === activeIndex;

        return (
          <div key={item.question}>
            <article className="rounded-xl border border-white/15 bg-zinc-900/60 shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
                onClick={() => setActiveIndex(isOpen ? -1 : index)}
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
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-3 py-3 sm:px-4 lg:min-h-[120px]">
                  <p className="text-[15px] leading-8 text-slate-200">{item.answer}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
