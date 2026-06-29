"use client";

import { motion } from "framer-motion";
import { useDict } from "@/shared/lib";
import { ContactItem } from "@/entities/contact";
import { useInitAnimation } from "../model/useInitAnimation";
import { CONTACT_STATIC } from "../model/data";
import { OrderAnimation } from "@/shared/ui/animation";
import { slideInRight } from "../model/animations";
import { DefaultButton } from "@/shared/ui/button";

export const Contacts = () => {
  const data = useDict("contacts");

  const { isActive } = useInitAnimation();

  return (
    <div id="contact" className="min-h-screen max-w-7xl mx-auto w-full px-6 py-16 flex justify-center items-center">
      <OrderAnimation isActive={isActive}>
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[700px] h-[700px] rounded-full bg-indigo-500/10 blur-[160px]" />
        </div>
        <motion.div
          variants={slideInRight}
          className="relative z-10 w-full max-w-5xl rounded-3xl bg-neutral-900/60 backdrop-blur-xl border border-neutral-800 shadow-[0_30px_80px_rgba(0,0,0,0.6)] p-10 text-white"
        >
          <motion.div variants={slideInRight} className="mb-10">
            <h2 className="text-4xl font-semibold tracking-tight">
              {data.title}
            </h2>
            <p className="mt-3 text-sm text-neutral-400 max-w-xl">
              {data.subtitle}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={slideInRight} className="space-y-6 text-neutral-300">
              <ContactItem
                label="Email"
                value={CONTACT_STATIC.email}
                href={`mailto:${CONTACT_STATIC.email}`}
              />
              <ContactItem
                label="GitHub"
                value={CONTACT_STATIC.github}
                href={CONTACT_STATIC.github}
              />
              <ContactItem
                label="Telegram"
                value={CONTACT_STATIC.telegram}
                href={CONTACT_STATIC.telegram}
              />
            </motion.div>
            <motion.div variants={slideInRight}>
              <h3 className="text-xl font-medium mb-4">
                {data.messageTitle}
              </h3>
              <form className="flex flex-col gap-4">
                <textarea
                  placeholder={data.messagePlaceholder}
                  className="w-full h-32 rounded-xl bg-neutral-950/60 border border-neutral-800 p-4 text-sm text-white focus:outline-none focus:border-indigo-500/60 transition resize-none"
                />
                <DefaultButton title={data.cta} />
              </form>
            </motion.div>
          </div>
        </motion.div>
      </OrderAnimation>
    </div>
  );
};
