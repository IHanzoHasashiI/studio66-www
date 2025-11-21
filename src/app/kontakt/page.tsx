"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function KontaktPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sent">("idle");

  return (
    <motion.div
      className="max-w-5xl mx-auto px-6 py-24 font-sans"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-5xl font-bold text-center mb-12">Kontakt</h1>

      {/* INFOLINIA */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-neutral-700 text-center mb-12">
        <div>
          <MapPin className="mx-auto mb-2 text-black" />
          <p className="font-medium">Al. Zwycięstwa 254/2</p>
          <p className="text-sm text-neutral-500">Gdynia</p>
        </div>
        <div>
          <Phone className="mx-auto mb-2 text-black" />
          <a href="tel:605250000" className="font-medium text-blue-600">
            605 250 000
          </a>
        </div>
        <div>
          <Mail className="mx-auto mb-2 text-black" />
          <a href="mailto:kontakt@studio66.pl" className="font-medium text-blue-600">
            kontakt@studio66.pl
          </a>
        </div>
      </div>

      {/* SOCIAL MEDIA */}
      <div className="flex justify-center gap-6 mb-16">
        <a href="https://facebook.com/studio66gdynia" target="_blank" rel="noreferrer">
          <Facebook className="h-8 w-8 text-neutral-600 hover:text-blue-600 transition" />
        </a>
        <a href="https://instagram.com/studio_66kozubowski" target="_blank" rel="noreferrer">
          <Instagram className="h-8 w-8 text-neutral-600 hover:text-pink-500 transition" />
        </a>
      </div>

      {/* FORMULARZ */}
      <div className="bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Wyślij wiadomość</h2>
        {formStatus === "sent" ? (
          <p className="text-green-600 text-center">Wiadomość została wysłana!</p>
        ) : (
<form
  action="https://formsubmit.co/sebastiancierluk@wp.pl"
  method="POST"
  className="grid gap-4"
  onSubmit={() => setFormStatus("sent")}
>
  {/* Wyłączenie CAPTCHA */}
  <input type="hidden" name="_captcha" value="false" />

  {/* Przekierowanie po wysłaniu */}
  <input type="hidden" name="_next" value="https://studio66gdynia.pl/dziekujemy" />

  <input
    type="text"
    name="name"
    required
    placeholder="Imię"
    className="border border-neutral-300 rounded-md p-3"
  />
  <input
    type="email"
    name="email"
    required
    placeholder="E-mail"
    className="border border-neutral-300 rounded-md p-3"
  />
  <textarea
    name="message"
    required
    placeholder="Wiadomość"
    rows={5}
    className="border border-neutral-300 rounded-md p-3"
  />
  <button
    type="submit"
    className="bg-black text-white py-3 px-6 rounded-md hover:bg-neutral-800 transition"
  >
    Wyślij
  </button>
</form>
        )}
      </div>

      {/* MAPA */}
      <div className="mt-16 overflow-hidden rounded-xl shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2318.2241452301905!2d18.550101313234443!3d54.476626989441364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda0990cb1e3b3%3A0xb3dc529e952c9812!2sKOZUBOWSKI%20STUDIO%2066!5e0!3m2!1spl!2spl!4v1763340169558!5m2!1spl!2spl"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </motion.div>
  );
}
