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
          <article key={item.question} className="rounded-xl border border-white/10 bg-zinc-900/70">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setActiveIndex(isOpen ? -1 : index)}
            >
              <span className="text-sm font-medium text-white sm:text-base">{item.question}</span>
              <span className="text-brand">{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen ? <p className="border-t border-white/10 px-5 py-4 text-sm text-slate-300">{item.answer}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
