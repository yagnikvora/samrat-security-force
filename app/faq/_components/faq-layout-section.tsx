"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export function FaqLayoutSection() {
  const leftItems = siteConfig.faqs.slice(0, 5);
  const rightItems = siteConfig.faqs.slice(5);

  const [leftActiveIndex, setLeftActiveIndex] = useState(0);
  const [rightActiveIndex, setRightActiveIndex] = useState(0);

  return (
    <section>
      <div className="mt-3 grid items-start gap-6 lg:grid-cols-2">
        <div className="space-y-3">
          {leftItems.map((item, index) => (
            <div key={item.question}>
              <article className="rounded-xl border border-white/15 bg-zinc-900/60 shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={leftActiveIndex === index}
                  onClick={() => setLeftActiveIndex(leftActiveIndex === index ? -1 : index)}
                >
                  <span className={`text-sm font-semibold sm:text-base ${leftActiveIndex === index ? "text-brand" : "text-white"}`}>
                    {item.question}
                  </span>
                  <span className={`shrink-0 transition-transform duration-300 ${leftActiveIndex === index ? "rotate-180 text-brand" : "text-white"}`}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              </article>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  leftActiveIndex === index ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-3 py-3 text-[15px] leading-8 text-slate-200 sm:px-4">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {rightItems.map((item, index) => (
            <div key={item.question}>
              <article className="rounded-xl border border-white/15 bg-zinc-900/60 shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={rightActiveIndex === index}
                  onClick={() => setRightActiveIndex(rightActiveIndex === index ? -1 : index)}
                >
                  <span className={`text-sm font-semibold sm:text-base ${rightActiveIndex === index ? "text-brand" : "text-white"}`}>
                    {item.question}
                  </span>
                  <span className={`shrink-0 transition-transform duration-300 ${rightActiveIndex === index ? "rotate-180 text-brand" : "text-white"}`}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              </article>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  rightActiveIndex === index ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-3 py-3 text-[15px] leading-8 text-slate-200 sm:px-4">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
