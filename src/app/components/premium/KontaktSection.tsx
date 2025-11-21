"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import Button from "./Button";

export default function KontaktSection() {
  return (
    <section className="text-center py-24 px-6 bg-neutral-50">
      <h2 className="text-4xl font-bold mb-4">Skontaktuj się z nami</h2>
      <p className="mb-8 text-neutral-600">
        Masz pytania lub chcesz umówić pomiar? Jesteśmy do Twojej dyspozycji.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-sm text-neutral-800 mb-10">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          <p>Al. Zwycięstwa 254/2, Gdynia</p>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-5 w-5" />
          <a href="tel:605250000" className="hover:underline">
            605 250 000
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          <a href="mailto:kontakt@studio66.pl" className="hover:underline">
            kontakt@studio66.pl
          </a>
        </div>
      </div>

      <Button href="tel:605250000">Zadzwoń teraz</Button>
    </section>
  );
}
