"use client";

import { use, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

type CategoryInfo = {
  title: string;
  intro: string;
  bullets: string[];
  images: string[];
};

const categoryContent: Record<string, CategoryInfo> = {
  "firany-zaslony": {
    title: "Firany i zasłony na wymiar",
    intro: "Profesjonalne doradztwo w zakresie doboru tkanin do Twojego wnętrza. Szyte na miarę pod indywidualne zamówienie z najwyższą starannością, dodając elegancji i przytulności.",
    bullets: ["Dobór tkanin: od delikatnego woalu po welur i struktury", "Szycie na wymiar i doradztwo techniczne", "Możliwość połączenia z roletami rzymskimi i karniszami"],
    images: [
      "/images/Produkty/Firany i zasłony/1.jpg",
      "/images/Produkty/Firany i zasłony/2.jpg",
      "/images/Produkty/Firany i zasłony/3.jpg",
      "/images/Produkty/Firany i zasłony/4.jpg",
      "/images/Produkty/Firany i zasłony/5.jpg",
      "/images/Produkty/Firany i zasłony/6.jpg",
      "/images/Produkty/Firany i zasłony/7.jpg",
      // dodawaj tutaj kolejne jak masz
    ],
  },
  "rolety-plisy": {
    title: "Rolety i plisy",
    intro: "Popularne osłony okienne – estetyczne, funkcjonalne, pasujące do każdego wnętrza.",
    bullets: ["Rolety materiałowe i rzymskie", "Plisy do okien nietypowych", "Szeroki wybór kolorów i faktur"],
    images: [
      "/images/Produkty/Rolety i plisy/1.jpg",
      "/images/Produkty/Rolety i plisy/2.jpg",
      "/images/Produkty/Rolety i plisy/3.jpg",
      "/images/Produkty/Rolety i plisy/4.jpg",
      "/images/Produkty/Rolety i plisy/5.jpg",
    ],
  },
  zaluzje: {
    title: "Żaluzje",
    intro: "Żaluzje drewniane, aluminiowe, bambusowe i faux-wood.",
    bullets: ["Lamelle 25mm, 35mm, 50mm, 65mm", "Bogata paleta kolorów"],
    images: [
      "/images/Produkty/Żaluzje/1.jpg",
      "/images/Produkty/Żaluzje/2.jpg",
      "/images/Produkty/Żaluzje/3.jpg",
      "/images/Produkty/Żaluzje/4.jpg",
      "/images/Produkty/Żaluzje/5.jpg",
      "/images/Produkty/Żaluzje/6.jpg",
    ],
  },
  karnisze: {
    title: "Karnisze i systemy szynowe",
    intro: "Karnisze klasyczne, szyny manualne i elektryczne.",
    bullets: ["Karnisze drewniane i metalowe", "Szyny elektryczne"],
    images: [
      "/images/Produkty/Karnisze/1.png",
      "/images/Produkty/Karnisze/2.png",
      "/images/Produkty/Karnisze/3.png",
      "/images/Produkty/Karnisze/4.png",
      "/images/Produkty/Karnisze/5.png",
    ],
  },
  tapety: {
    title: "Tapety premium",
    intro: "Ekskluzywne kolekcje tapet od światowych marek.",
    bullets: ["ARTE, Casadeco, Cole&Son, Casamance, Romo"],
    images: [
      "/images/Produkty/Tapety/1.jpg",
      "/images/Produkty/Tapety/2.webp",
      "/images/Produkty/Tapety/3.webp",
      "/images/Produkty/Tapety/4.jpg",
      "/images/Produkty/Tapety/5.jpg",
      "/images/Produkty/Tapety/6.jpg",
    ],
  },
};

export default function ProductCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const data = categoryContent[slug];

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!data) {
    return <div className="py-12 text-center">Kategoria nie istnieje</div>;
  }

  const slides = data.images.map(src => ({ src }));

  return (
    <div className="space-y-12 py-6">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">PRODUKTY</p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{data.title}</h1>
        <p className="max-w-3xl text-neutral-600 leading-relaxed">{data.intro}</p>
      </header>

      <section className="grid gap-8 md:grid-cols-[2fr,1fr]">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Jak pracujemy z tą kategorią?</h2>
          <ul className="list-disc pl-5 space-y-2 text-neutral-700">
            {data.bullets.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>

        {/* Poprawiony przycisk */}
        <div className="border border-neutral-200 rounded-3xl p-8 flex flex-col">
          <div>
            <h3 className="font-semibold text-lg">Umów niezobowiązujące spotkanie</h3>
            <p className="mt-3 text-neutral-600">Przygotujemy propozycje dopasowane do Twojego wnętrza.</p>
          </div>
          <a 
            href="/#kontakt" 
            className="mt-8 self-start bg-amber-700 hover:bg-amber-800 text-white px-8 py-3.5 rounded-full text-sm font-medium transition"
          >
            Skontaktuj się z nami
          </a>
        </div>
      </section>

      {/* Galeria - tylko istniejące zdjęcia */}
      {data.images.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-8">Nasze realizacje</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.images.map((src, i) => (
              <div
                key={i}
                onClick={() => { setCurrentIndex(i); setOpen(true); }}
                className="group cursor-pointer overflow-hidden rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative aspect-[4/3] bg-neutral-100">
                  <Image
                    src={src}
                    alt={`Realizacja ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={slides}
        animation={{ fade: 300 }}
        styles={{ container: { backgroundColor: "rgba(0,0,0,0.95)" } }}
      />
    </div>
  );
}