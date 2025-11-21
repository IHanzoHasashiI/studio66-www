// src/app/blog/page.tsx
import Link from "next/link";

export default function BlogPage() {
  return (
    <section className="py-24 px-6 bg-neutral-50">
      <h1 className="text-4xl font-bold mb-12 text-center">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <Link href="/blog/jak-dobrac-firany-do-salonu-5-praktycznych-wskazowek">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer">
            <p className="text-sm text-neutral-500 mb-2">10.11.2025</p>
            <h2 className="text-xl font-bold mb-2">Jak dobrać firany do salonu – 5 praktycznych wskazówek</h2>
            <p className="text-neutral-600 text-sm">Firany w salonie to nie tylko dekoracja, ale też sposób na kontrolę światła i budowanie atmosfery.</p>
          </div>
        </Link>

        <Link href="/blog/rolety-rzymskie-czy-zaslony-co-wybrac-do-swojego-wnetrza">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer">
            <p className="text-sm text-neutral-500 mb-2">05.11.2025</p>
            <h2 className="text-xl font-bold mb-2">Rolety rzymskie czy zasłony? Co wybrać do swojego wnętrza</h2>
            <p className="text-neutral-600 text-sm">Rolety rzymskie świetnie sprawdzają się tam, gdzie potrzebujemy funkcjonalności i minimalizmu, a zasłony ocieplają wnętrze.</p>
          </div>
        </Link>

        <Link href="/blog/nowosci-w-ofercie-studio-66-jesien-2025">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer">
            <p className="text-sm text-neutral-500 mb-2">20.10.2025</p>
            <h2 className="text-xl font-bold mb-2">Nowości w ofercie Studio 66 – jesień 2025</h2>
            <p className="text-neutral-600 text-sm">Wprowadzamy do oferty nowe kolekcje tkanin zaciemniających oraz lekkich mieszanek idealnych do salonów i sypialni.</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
