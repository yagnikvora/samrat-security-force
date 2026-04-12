import type { Transition, Variants, ViewportOptions } from "framer-motion";

export const motionViewport = {
  once: true,
  amount: 0.2,
} satisfies ViewportOptions;

export const revealEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const revealUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function revealUpTransition(delay = 0): Transition {
  return {
    duration: 0.7,
    ease: revealEase,
    delay,
  };
}
