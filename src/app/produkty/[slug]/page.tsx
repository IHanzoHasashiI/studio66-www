"use client";

import { use, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type CategoryInfo = {
  title: string;
  intro: string;
  bullets: string[];
};

const categoryContent: Record<string, CategoryInfo> = {
  "firany-zaslony": {
    title: "Firany i zasłony na wymiar",
    intro:
      "Profesjonalne doradztwo w zakresie doboru tkanin do Twojego wnętrza. Szyte na miarę pod indywidualne zamówienie z najwyższą starannością, dodając elegancji i przytulności. Bogaty wybór tkanin i systemów.",
    bullets: [
      "Dobór tkanin: od delikatnego woalu po welur i struktury",
      "Szycie na wymiar i doradztwo techniczne",
      "Możliwość połączenia z roletami rzymskimi i karniszami",
    ],
  },
  "rolety-plisy": {
    title: "Rolety i plisy",
    intro:
      "Rolety materiałowe to najpopularniejsze osłony okienne, łączące funkcjonalność z estetyką. Plisy idealnie sprawdzają się również w oknach o nietypowych kształtach.",
    bullets: [
      "Szeroki wybór tkanin i kolorów",
      "Regulacja światła i prywatności",
      "Plisy z opcjami sterowania i personalizacji",
    ],
  },
  zaluzje: {
    title: "Żaluzje drewniane i aluminiowe",
    intro:
      "Szeroka oferta żaluzji wykonanych z drewna basswood, abachi, bambusa oraz aluminium i faux-wood (PVC). Lamela w rozmiarach 25 mm, 35 mm, 50 mm, 65 mm. Największy wybór kolorów.",
    bullets: [
      "Drewno, aluminium, faux-wood (PVC)",
      "Różne szerokości lameli: 25–65 mm",
      "Dopasowanie do wnęki lub montaż na okno",
    ],
  },
  tapety: {
    title: "Tapety dekoracyjne",
    intro:
      "Ekskluzywne kolekcje tapet od światowych marek premium. Od klasycznych po nowoczesne wzory – idealne do salonów, sypialni, biur i hoteli.",
    bullets: [
      "Marki: Arte, Casadeco, Caselio, Cole&Son, Casamance, Romo",
      "Wysoka jakość druku i struktur",
      "Doradztwo przy wyborze oraz montaż",
    ],
  },
  karnisze: {
    title: "Karnisze i systemy szynowe",
    intro:
      "Karnisze klasyczne, szyny manualne i elektryczne – połączenie stylu, funkcjonalności i technologii. Idealne dopasowanie do każdego typu wnętrza.",
    bullets: [
      "Karnisze klasyczne i nowoczesne",
      "Szyny ręczne i automatyczne",
      "Montaż sufitowy i ścienny – wg potrzeb projektu",
    ],
  },
};

type GalleryItem = {
  title: string;
  image: string;
  description: string;
};

const galleryData: Record<string, GalleryItem[]> = {
  "firany-zaslony": [
    {
      title: "Salon Orłowo",
      image: "/images/firany-1.jpg",
      description: "Delikatne woalowe firany z zasłonami blackout.",
    },
  ],
  tapety: [
    {
      title: "Sypialnia z tapetą Arte",
      image: "/images/tapety-1.jpg",
      description: "Tapeta premium z geometrycznym wzorem od Arte.",
    },
  ],
  karnisze: [
    {
      title: "Szyny elektryczne Somfy",
      image: "/images/karnisze-1.jpg",
      description: "Nowoczesne rozwiązanie z pilotem lub smartfonem.",
    },
  ],
};

export default function ProductCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const data = categoryContent[slug];

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!data) {
    return (
      <div className="space-y-4 py-6">
        <h1 className="text-2xl font-semibold tracking-tight">
          Kategoria niedostępna
        </h1>
        <p className="text-sm text-neutral-600">
          Wygląda na to, że ta kategoria produktów nie istnieje. Wróć do{" "}
          <a href="/produkty" className="text-accent underline">
            listy produktów
          </a>
          .
        </p>
      </div>
    );
  }

  const slides =
    galleryData[slug]?.map((item) => ({
      src: item.image,
      title: item.title,
      description: item.description,
    })) ?? [];

  return (
    <div className="space-y-10 py-6">
      {/* nagłówek kategorii */}
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          Produkty
        </p>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {data.title}
        </h1>
        <p className="max-w-2xl text-sm text-neutral-600">{data.intro}</p>
      </header>

      {/* opis + bulletpointy */}
      <section className="grid gap-6 md:grid-cols-[2fr,3fr]">
        <div className="space-y-3 text-sm text-neutral-700">
          <h2 className="text-sm font-semibold text-primary">
            Jak pracujemy z tą kategorią?
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            {data.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card-hover flex flex-col justify-between border border-soft p-5">
          <div>
            <h3 className="text-sm font-semibold text-primary">
              Umów niezobowiązujące spotkanie
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Przygotujemy propozycje tkanin i systemów do Twojego wnętrza.
              Możemy spotkać się w Studio 66 lub na miejscu – w mieszkaniu,
              apartamencie albo biurze.
            </p>
          </div>
          <a href="/#kontakt" className="mt-4 self-start btn-gold">
            Skontaktuj się z nami
          </a>
        </div>
      </section>

      {/* Galeria */}
      {galleryData[slug] && galleryData[slug].length > 0 && (
        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-6">Nasze realizacje</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {galleryData[slug].map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  setCurrentIndex(i);
                  setOpen(true);
                }}
                className="cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="aspect-[4/3] bg-cover bg-center hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="p-4">
                  <h3 className="font-medium text-lg">{item.title}</h3>
                  <p className="text-sm text-neutral-600 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={currentIndex}
            slides={slides}
            animation={{ fade: 300 }}
            controller={{ closeOnBackdropClick: true }}
            styles={{
              container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
            }}
          />
        </section>
      )}
    </div>
  );
}
