'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { useEffect } from 'react';

const logos = [
  "arte.webp",
  "casadeco.webp",
  "zr.webp",
  "casamance.webp",
  "caselio.webp",
  "coleandson.webp",
  "romo.webp",
  "vadain.webp",
];

export default function BrandsSlider() {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 4,
      spacing: 20,
    },
  });

  // Automatyczne przesuwanie
  useEffect(() => {
    if (!slider) return;

    const interval = setInterval(() => {
      slider.current?.next();
    }, 3000); // co 3 sekundy

    return () => clearInterval(interval);
  }, [slider]);

  return (
    <section id="marki" className="py-24 px-4 bg-neutral-50">
      <h2 className="text-4xl font-bold text-center mb-12">
        Współpracujemy z topowymi markami
      </h2>

      <div ref={sliderRef} className="keen-slider max-w-6xl mx-auto">
        {logos.map((logo, index) => (
          <div
            className="keen-slider__slide flex items-center justify-center border border-gray-300 rounded-lg p-4 bg-white shadow-sm"
            key={index}
          >
            <Image
              src={`/logos/${logo}`}
              alt={`Logo ${logo}`}
              width={200}
              height={150}
              className="object-contain max-h-16"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
