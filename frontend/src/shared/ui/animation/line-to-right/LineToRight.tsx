"use client";

import { motion } from "framer-motion";

export const LineToRight = () => (<motion.span
    className="absolute left-0 -bottom-2 h-0.5 bg-indigo-400 shadow-[0_0_5px_0.5px_rgba(99,102,241,0.9)]"
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{ duration: 2, ease: "easeOut" }}
/>)