const categories = [
  {
    name: "Firany i zasłony",
    slug: "firany-zaslony",
    description:
      "Profesjonalne doradztwo w zakresie doboru tkanin. Szyte na miarę, dodają wnętrzu elegancji i przytulności.",
  },
  {
    name: "Rolety i plisy",
    slug: "rolety-plisy",
    description:
      "Popularne osłony okienne – estetyczne, funkcjonalne, pasujące do każdego wnętrza. Plisy również do okien o nietypowych kształtach.",
  },
  {
    name: "Żaluzje",
    slug: "zaluzje",
    description:
      "Żaluzje drewniane, aluminiowe, faux-wood. Różne szerokości lameli i bogaty wybór kolorów.",
  },
  {
    name: "Karnisze",
    slug: "karnisze",
    description:
      "Karnisze klasyczne, szyny manualne i elektryczne – styl i funkcjonalność dopasowana do Twojego wnętrza.",
  },
  {
    name: "Tapety",
    slug: "tapety",
    description:
      "Ekskluzywne marki: Arte, Casadeco, Caselio, Cole&Son, Casamance, Romo.",
  },
];

export default function ProduktyPage() {
  return (
    <div className="space-y-10 py-6">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          Oferta
        </p>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Produkty i systemy dekoracji okiennych
        </h1>
        <p className="max-w-2xl text-sm text-neutral-600">
          Dobieramy tkaniny, systemy zawieszania i wykończenia do charakteru wnętrza. Poniżej znajdziesz główne grupy produktów, z którymi pracujemy na co dzień.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {categories.map((cat) => (
          <a
            key={cat.slug}
            href={`/produkty/${cat.slug}`}
            className="card-hover flex flex-col border border-soft p-5 text-left"
          >
            <h2 className="text-lg font-semibold text-primary">{cat.name}</h2>
            <p className="mt-2 text-sm text-neutral-600">{cat.description}</p>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Zobacz więcej →
            </p>
          </a>
        ))}
      </section>

      {/* Hasło o współpracy */}
      <div className="pt-10 text-center">
        <p className="text-sm uppercase tracking-wide text-neutral-600">
          Współpracujemy z topowymi markami
        </p>
        {/* tutaj możesz później wrzucić komponent z logo marek */}
      </div>
    </div>
  );
}
