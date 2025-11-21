"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const allProjects = [
  {
    id: 1,
    title: "Apartament Orłowo",
    category: "Firany",
    image: "/public/placeholder.png",
    description: "Delikatne firany z woalu w salonie z widokiem na morze.",
  },
  {
    id: 2,
    title: "Mieszkanie Śródmieście",
    category: "Firany",
    image: "/images/firany-2.jpg",
    description: "Firany szyte na wymiar z subtelną taśmą i wykończeniem flex.",
  },
  {
    id: 3,
    title: "Penthouse Gdynia",
    category: "Zasłony",
    image: "/images/zaslony-1.jpg",
    description: "Zasłony z weluru w odcieniach szarości — elegancja i przytulność.",
  },
  {
    id: 4,
    title: "Biuro Redłowo",
    category: "Zasłony",
    image: "/images/zaslony-2.jpg",
    description: "Nowoczesne zasłony z lekkim połyskiem, montowane na szynie sufitowej.",
  },
  {
    id: 5,
    title: "Dom Chwarzno",
    category: "Rolety i plisy",
    image: "/images/rolety-1.jpg",
    description: "Rolety rzymskie w kuchni — praktyczne i eleganckie.",
  },
  {
    id: 6,
    title: "Gabinet Oliwa",
    category: "Rolety i plisy",
    image: "/images/plisy-1.jpg",
    description: "Plisy w neutralnych barwach dopasowane do systemu okien uchylnych.",
  },
  {
    id: 7,
    title: "Loft Gdańsk",
    category: "Żaluzje",
    image: "/images/zaluzje-1.jpg",
    description: "Żaluzje drewniane o szerokości lameli 50 mm, kolor naturalny dąb.",
  },
  {
    id: 8,
    title: "Salon Reda",
    category: "Żaluzje",
    image: "/images/zaluzje-2.jpg",
    description: "Żaluzje aluminiowe w kolorze antracytowym, dopasowane do wystroju.",
  },
];

const filters = ["Wszystkie", "Firany", "Zasłony", "Rolety i plisy", "Żaluzje"];

export default function RealizacjePage() {
  const [selectedCategory, setSelectedCategory] = useState("Wszystkie");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects =
    selectedCategory === "Wszystkie"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  const slides = filteredProjects.map((p) => ({
    src: p.image,
    title: p.title,
    description: p.description,
  }));

  return (
    <div className="space-y-10 py-8">
      {/* Nagłówek */}
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          Realizacje
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Nasze realizacje
        </h1>
        <p className="max-w-2xl text-sm text-neutral-600">
          Poznaj wybrane projekty, które zrealizowaliśmy dla naszych klientów —
          od apartamentów i mieszkań po biura i przestrzenie usługowe.
        </p>
      </header>

      {/* Filtry */}
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setSelectedCategory(f)}
            className={`px-4 py-2 text-sm rounded-full border transition ${
              selectedCategory === f
                ? "bg-neutral-900 text-white"
                : "border-neutral-300 hover:bg-neutral-100"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Siatka realizacji */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((p, i) => (
          <div
            key={p.id}
            onClick={() => {
              setCurrentIndex(i);
              setLightboxOpen(true);
            }}
            className="cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div
              className="aspect-[4/3] bg-cover bg-center hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: `url(${p.image})` }}
            />
            <div className="p-4">
              <h3 className="font-medium text-lg">{p.title}</h3>
              <p className="text-sm text-neutral-600 mt-1">{p.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentIndex}
        slides={slides}
        animation={{ fade: 300 }}
        styles={{ container: { backgroundColor: "rgba(0,0,0,0.9)" } }}
      />
    </div>
  );
}
