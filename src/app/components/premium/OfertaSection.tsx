"use client";

import oferta from "@/data/oferta";
import { motion } from "framer-motion";

export default function OfertaSection() {
  return (
    <section id="oferta" className="py-24 px-4">
      <motion.h2
        className="text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Nasza oferta
      </motion.h2>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {oferta.map((item, index) => (
          <motion.div
            key={index}
            className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">{item.title}</h3>
            <p className="text-base text-neutral-600 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
