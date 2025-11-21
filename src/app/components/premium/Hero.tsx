"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden h-[85vh] bg-black text-white flex items-center justify-center">
      {/* Tło obrazkowe */}
      <Image
        src="/hero.jpg" // ← Twój obrazek w folderze /public
        alt="Dekoracje okienne"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
        quality={85}
        className="z-0"
      />

      {/* Nakładka (ciemne przyciemnienie) */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Treść */}
      <div className="relative z-20 text-center px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Studio 66 Gdynia
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Firany, zasłony, rolety oraz dekoracje okienne szyte na miarę – z pasją, estetyką i doświadczeniem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/kontakt"
            className="inline-block bg-white text-black text-sm font-semibold py-3 px-6 rounded-md hover:bg-neutral-100 transition"
          >
            Skontaktuj się z nami
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
