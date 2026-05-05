"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

export default function RealizacjePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const realizacje = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    image: `/images/nasze realizacje/Realizacja${i + 1}.jpg`,
  }));

  const openLightbox = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "visible";
  };

  return (
    <div className="pt-8 pb-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4">Nasze realizacje</h1>
        <p className="text-center text-xl text-neutral-600 mb-16">
          Kliknij w zdjęcie, aby powiększyć
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {realizacje.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl shadow-sm hover:shadow-xl cursor-pointer aspect-[4/3]"
              onClick={() => openLightbox(item.image)}
            >
              <Image
                src={item.image}
                alt={`Realizacja ${item.id}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-8 right-8 text-white"
          >
            <X size={40} />
          </button>
          <Image
            src={selectedImage}
            alt="Realizacja"
            width={1200}
            height={800}
            className="max-h-[90vh] w-auto rounded-2xl"
          />
        </div>
      )}
    </div>
  );
}