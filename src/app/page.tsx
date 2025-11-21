"use client";

import { motion } from "framer-motion";
import Hero from "./components/premium/Hero";
import Section from "./components/premium/Section";
import Heading from "./components/premium/Heading";
import Button from "./components/premium/Button";
import OfertaSection from "./components/premium/OfertaSection";
import RealizacjeSection from "./components/premium/RealizacjeSection";
import OpinieSection from "./components/premium/OpinieSection";
import KontaktSection from "./components/premium/KontaktSection";
import oferta from "@/data/oferta";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section id="oferta">
        <Heading
          title="Nasza oferta"
          description="Kompleksowe dekoracje okienne: od pomiaru, przez projekt, szycie, aż po montaż."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {oferta.map((item, index) => (
            <motion.div
              key={item.title}
              className="rounded-xl border p-6 shadow-sm bg-white hover:shadow-md transition hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.15 }}
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <RealizacjeSection />
      <OpinieSection />
      <KontaktSection />
    </>
  );
}
