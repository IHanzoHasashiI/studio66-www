"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import opinie from "@/data/opinie.json";

export default function OpinieSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % opinie.length);
    }, 5000); // 5 sekund

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="opinie" className="py-24 px-4 bg-neutral-50">
      <h2 className="text-5xl font-bold text-center mb-16">Opinie klientów</h2>

      <div className="max-w-2xl mx-auto h-80 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-white p-10 rounded-xl shadow-xl text-center flex flex-col justify-center"
          >
            <div className="flex justify-center mb-4 text-yellow-500">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400" />
              ))}
            </div>
            <p className="text-neutral-700 mb-6 text-2xl leading-relaxed">
              “{opinie[index].content}”
            </p>
            <p className="text-xl font-semibold text-neutral-900">{opinie[index].author}</p>
            <p className="text-lg text-neutral-500">{opinie[index].location}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
