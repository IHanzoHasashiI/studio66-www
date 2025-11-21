"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import realizacje from "@/data/realizacje.json";

export default function RealizacjeSection() {
  const [loaded, setLoaded] = useState(false);
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section id="realizacje" className="py-24 px-4">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Nasze realizacje
      </motion.h2>

      <div ref={sliderRef} className="keen-slider">
        {realizacje.map((item, index) => (
          <motion.div
            key={index}
            className="keen-slider__slide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"
              />
              <p className="mt-3 text-center text-base font-medium text-neutral-800">
                {item.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
