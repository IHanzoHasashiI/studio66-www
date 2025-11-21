import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-100 border-t text-sm text-neutral-600 px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">
            Studio 66 Gdynia
          </h3>
          <p>
            Firany, zasłony, rolety i dekoracje okienne na wymiar – z pasją od wielu lat.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">Nawigacja</h3>
          <ul className="space-y-2">
            <li><Link href="/">Strona główna</Link></li>
            <li><Link href="/produkty">Produkty</Link></li>
            <li><Link href="/realizacje">Realizacje</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/kontakt">Kontakt</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">Kontakt</h3>
          <p>Al. Zwycięstwa 254/2, Gdynia</p>
          <p>tel. <a href="tel:605250000" className="hover:underline">605 250 000</a></p>
          <p>e-mail: <a href="mailto:kontakt@studio66.pl" className="hover:underline">kontakt@studio66.pl</a></p>
        </div>
      </div>
    </footer>
  );
}
