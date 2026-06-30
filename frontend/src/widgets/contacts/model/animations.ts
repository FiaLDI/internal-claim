import { Variants } from "framer-motion";

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 240 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.7, 1, 0.8, 1],
    },
  },
};
