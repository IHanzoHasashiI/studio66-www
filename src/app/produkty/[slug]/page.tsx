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
  firany: {
    title: "Firany na wymiar",
    intro:
      "Delikatne, półprzezroczyste tkaniny, które zmiękczają światło i dodają wnętrzu lekkości. Szyjemy firany na wymiar, dopasowując je do stylu Twojego wnętrza.",
    bullets: [
      "Dobór tkanin od woalu po bardziej strukturalne materiały",
      "Różne sposoby upięcia — na taśmie, przelotkach, flexach",
      "Możliwość łączenia z zasłonami i roletami rzymskimi",
    ],
  },
  zaslony: {
    title: "Zasłony dekoracyjne i zaciemniające",
    intro:
      "Zasłony pełnią zarówno funkcję dekoracyjną, jak i praktyczną — poprawiają akustykę, ocieplają wnętrze i pozwalają regulować dopływ światła.",
    bullets: [
      "Tkaniny gładkie, strukturalne, welury, lniane mieszanki",
      "Opcje zaciemnienia od lekkiego przyciemnienia po blackout",
      "Szycie na wymiar wraz z doborem karniszy i systemów sufitowych",
    ],
  },
  "rolety-plisy": {
    title: "Rolety i plisy",
    intro:
      "Rozwiązania idealne tam, gdzie zależy nam na funkcjonalności i estetyce: rolety rzymskie, dzień-noc, plisy oraz rolety materiałowe.",
    bullets: [
      "Pomiar i dobór systemu do danego typu okna",
      "Duży wybór tkanin i kolorów prowadnic",
      "Montaż bezinwazyjny lub stały — w zależności od potrzeb",
    ],
  },
  zaluzje: {
    title: "Żaluzje drewniane i aluminiowe",
    intro:
      "Klasyczne rozwiązanie, które pozwala precyzyjnie regulować ilość światła. Idealne do mieszkań, biur i przestrzeni usługowych.",
    bullets: [
      "Żaluzje drewniane, aluminiowe i poziome",
      "Różne szerokości lameli i kolory wykończeń",
      "Montaż dopasowany do konstrukcji okna i wnęki",
    ],
  },
};

type GalleryItem = {
  title: string;
  image: string;
  description: string;
};

const galleryData: Record<string, GalleryItem[]> = {
  firany: [
    {
      title: "Apartament Orłowo",
      image: "/images/firany-1.jpg",
      description: "Delikatne firany z woalu w salonie z widokiem na morze.",
    },
    {
      title: "Mieszkanie Śródmieście",
      image: "/images/firany-2.jpg",
      description:
        "Firany szyte na wymiar z subtelną taśmą i wykończeniem flex.",
    },
  ],
  zaslony: [
    {
      title: "Penthouse Gdynia",
      image: "/images/zaslony-1.jpg",
      description:
        "Zasłony zaciemniające z tkaniny welurowej w odcieniach szarości.",
    },
    {
      title: "Biuro Redłowo",
      image: "/images/zaslony-2.jpg",
      description:
        "Nowoczesne zasłony z lekkim połyskiem, montowane na szynie sufitowej.",
    },
  ],
  "rolety-plisy": [
    {
      title: "Dom Chwarzno",
      image: "/images/rolety-1.jpg",
      description: "Rolety rzymskie w kuchni — praktyczne i eleganckie.",
    },
    {
      title: "Gabinet Oliwa",
      image: "/images/plisy-1.jpg",
      description:
        "Plisy w neutralnych barwach dopasowane do systemu okien uchylnych.",
    },
  ],
  zaluzje: [
    {
      title: "Loft Gdańsk",
      image: "/images/zaluzje-1.jpg",
      description:
        "Żaluzje drewniane o szerokości lameli 50 mm, kolor naturalny dąb.",
    },
    {
      title: "Salon Reda",
      image: "/images/zaluzje-2.jpg",
      description:
        "Żaluzje aluminiowe w kolorze antracytowym, dopasowane do wystroju.",
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

      {/* Sekcja galerii realizacji */}
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
