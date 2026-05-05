"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { X } from "lucide-react";

export default function RealizacjeSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 15 },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2, spacing: 15 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 24 } },
    },
  });

  const realizacje = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Realizacja ${i + 1}`,
    image: `/images/nasze realizacje/Realizacja${i + 1}.jpg`,
  }));

  const openLightbox = (image: string, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedTitle("");
    document.body.style.overflow = "visible";
  };

  return (
    <section id="realizacje" className="py-24 px-4 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Nasze realizacje
        </motion.h2>
        <p className="text-center text-xl text-neutral-600 mb-16">
          Kliknij w zdjęcie, aby powiększyć
        </p>

        <div ref={sliderRef} className="keen-slider">
          {realizacje.map((item) => (
            <div key={item.id} className="keen-slider__slide">
              <motion.div
                className="overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                onClick={() => openLightbox(item.image, item.title)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative h-80">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-4 text-white hover:text-neutral-300 transition-colors z-10"
            >
              <X size={36} />
            </button>

            <Image
              src={selectedImage}
              alt={selectedTitle}
              width={1200}
              height={800}
              className="max-h-[88vh] w-auto mx-auto rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}