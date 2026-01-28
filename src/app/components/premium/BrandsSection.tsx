"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "arte.webp",
  "casadeco.webp",
  "caselio.webp",
  "coleandson.webp",
  "casamance.webp",
  "romo.webp",
  "vadain.webp",
  "zr.webp",
  "sunshade.webp",
  "forest.webp",
];

export default function BrandsSection() {
  return (
    <section id="marki" className="py-24 px-4 bg-neutral-50">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Współpracujemy z topowymi markami
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center opacity-80 hover:opacity-100 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={`/logos/${logo}`}
              alt={`Logo ${logo}`}
              width={120}
              height={60}
              className="object-contain max-h-16"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
