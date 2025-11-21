const categories = [
  {
    name: "Firany",
    slug: "firany",
    description: "Lekkie, zwiewne tkaniny, które zmiękczają światło i nadają wnętrzu lekkości.",
  },
  {
    name: "Zasłony",
    slug: "zaslony",
    description: "Tkaniny dekoracyjne i zaciemniające – od gładkich po strukturalne, szyte na wymiar.",
  },
  {
    name: "Rolety i plisy",
    slug: "rolety-plisy",
    description:
      "Funkcjonalne osłony okienne – rolety rzymskie, dzień-noc, plisy, rolety materiałowe.",
  },
  {
    name: "Żaluzje",
    slug: "zaluzje",
    description:
      "Żaluzje drewniane, aluminiowe i poziome, dopasowane do wymiarów i stylu wnętrza.",
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
          Dobieramy tkaniny, systemy zawieszania i wykończenia do charakteru
          wnętrza. Poniżej znajdziesz główne grupy produktów, z którymi
          pracujemy na co dzień.
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
    </div>
  );
}
