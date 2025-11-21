"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function Section({ children, className, id }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={clsx("w-full px-4 py-16 md:py-24", className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </motion.section>
  );
}
