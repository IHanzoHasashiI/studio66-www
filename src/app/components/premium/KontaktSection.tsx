"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function KontaktSection() {
  return (
    <section className="bg-neutral-50 py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6 tracking-tight text-neutral-900">
          Kontakt
        </h2>
        <p className="mb-12 text-lg text-neutral-600">
          Masz pytania lub chcesz umówić pomiar? Jesteśmy do Twojej dyspozycji.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left text-neutral-800">
          {/* LOKALIZACJA */}
          <div className="flex flex-col items-center text-center">
            <MapPin className="w-6 h-6 mb-2 text-black" />
            <p className="font-semibold uppercase text-sm tracking-wide mb-1">
              Aleja Zwycięstwa 254/2
            </p>
            <p className="text-sm text-neutral-500">Gdynia</p>
            <p className="text-sm text-neutral-500 mt-2">Poniedziałek–Piątek 9:00–17:00</p>
          </div>

          {/* TELEFONY */}
          <div className="flex flex-col items-center text-center">
            <Phone className="w-6 h-6 mb-2 text-black" />
            <div className="space-y-1">
              <p className="text-sm">
                <span className="font-medium uppercase">Krzysztof:</span>{" "}
                <a href="tel:605250000" className="text-blue-600 hover:underline">605 250 000</a>
              </p>
              <p className="text-sm">
                <span className="font-medium uppercase">Agnieszka:</span>{" "}
                <a href="tel:693899000" className="text-blue-600 hover:underline">693 899 000</a>
              </p>
              <p className="text-sm">
                <span className="font-medium uppercase">Paulina:</span>{" "}
                <a href="tel:573514420" className="text-blue-600 hover:underline">573 514 420</a>
              </p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex flex-col items-center text-center">
            <Mail className="w-6 h-6 mb-2 text-black" />
            <a
              href="mailto:studio66gdynia@wp.pl"
              className="text-sm text-blue-600 hover:underline"
            >
              studio66gdynia@wp.pl
            </a>
          </div>
        </div>

        {/* PRZYCISK */}
        <div className="mt-12">
          <a
            href="tel:605250000"
            className="inline-block bg-black text-white py-3 px-6 rounded-md hover:bg-neutral-800 transition"
          >
            Zadzwoń teraz
          </a>
        </div>
      </div>
    </section>
  );
}
