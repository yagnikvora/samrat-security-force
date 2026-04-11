"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export function FaqLayoutSection() {
  const leftItems = siteConfig.faqs.slice(0, 5);
  const rightItems = siteConfig.faqs.slice(5);
  const rowCount = Math.max(leftItems.length, rightItems.length);

  const [leftActiveIndex, setLeftActiveIndex] = useState(0);
  const [rightActiveIndex, setRightActiveIndex] = useState(0);

  return (
    <section>
      <div className="mt-3 space-y-3">
        {Array.from({ length: rowCount }).map((_, rowIndex) => {
          const leftItem = leftItems[rowIndex];
          const rightItem = rightItems[rowIndex];

          return (
            <div key={`faq-row-${rowIndex}`} className="grid gap-6 lg:grid-cols-2">
              <div>
                {leftItem ? (
                  <>
                    <article className="rounded-xl border border-white/15 bg-zinc-900/60 shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                        aria-expanded={leftActiveIndex === rowIndex}
                        onClick={() => setLeftActiveIndex(leftActiveIndex === rowIndex ? -1 : rowIndex)}
                      >
                        <span className={`text-sm font-semibold sm:text-base ${leftActiveIndex === rowIndex ? "text-brand" : "text-white"}`}>
                          {leftItem.question}
                        </span>
                        <span
                          className={`shrink-0 transition-transform duration-300 ${leftActiveIndex === rowIndex ? "rotate-180 text-brand" : "text-white"}`}
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </button>
                    </article>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        leftActiveIndex === rowIndex ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-3 py-3 text-[15px] leading-8 text-slate-200 sm:px-4">{leftItem.answer}</p>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>

              <div>
                {rightItem ? (
                  <>
                    <article className="rounded-xl border border-white/15 bg-zinc-900/60 shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                        aria-expanded={rightActiveIndex === rowIndex}
                        onClick={() => setRightActiveIndex(rightActiveIndex === rowIndex ? -1 : rowIndex)}
                      >
                        <span className={`text-sm font-semibold sm:text-base ${rightActiveIndex === rowIndex ? "text-brand" : "text-white"}`}>
                          {rightItem.question}
                        </span>
                        <span
                          className={`shrink-0 transition-transform duration-300 ${rightActiveIndex === rowIndex ? "rotate-180 text-brand" : "text-white"}`}
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </button>
                    </article>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        rightActiveIndex === rowIndex ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-3 py-3 text-[15px] leading-8 text-slate-200 sm:px-4">{rightItem.answer}</p>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
