"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OfertaSection() {
  const oferta = [
    {
      title: "Firany i zasłony",
      description: "Profesjonalne doradztwo w zakresie doboru tkanin do Twojego wnętrza. Szyte na miarę pod indywidualne zamówienie z najwyższą starannością, dodające Twojemu wnętrzu szyku, elegancji, ale przede wszystkim przytulności. Bogaty wybór tkanin i systemów.",
      image: "/images/oferta/IMG-20210903-WA0001.jpg",
      features: [
        "Szycie na miarę",
        "Tkaniny premium",
        "Klasyczne i nowoczesne style"
      ]
    },
    {
      title: "Żaluzje",
      description: "Szeroka oferta żaluzji wykonanych z drewna basswood, abachi, bambus oraz z aluminium i faux-wood (PVC). Dostępne w rozmiarach lameli 25mm, 35mm, 50mm oraz 65mm.",
      image: "/images/oferta/ZALUZJE 3.jpg",
      features: [
        "Drewniane i bambusowe",
        "Aluminiowe i PVC",
        "Bogata paleta kolorów"
      ]
    },
    {
      title: "Rolety i plisy",
      description: "Rolety materiałowe oraz precyzyjnie wykonane plisy — idealne do okien standardowych i nietypowych. Łączą funkcjonalność z elegancją i dają szerokie możliwości personalizacji.",
      image: "/images/oferta/IMG-20231201-WA0036.jpg",
      features: [
        "Rolety rzymskie",
        "Rolety materiałowe",
        "Plisy na okna nietypowe"
      ]
    },
    {
      title: "Tapety premium",
      description: "Współpracujemy z topowymi markami: ARTE, Casadeco, Caselio, Cole&Son, Casamance, Romo i innymi. Wyjątkowe wzory, faktury i najwyższa jakość.",
      image: "/images/oferta/ARTE.jpg",
      features: [
        "ARTE, Cole&Son, Casadeco",
        "Caselio, Romo, Casamance",
        "Indywidualny dobór"
      ]
    },
    {
      title: "Karnisze i szyny",
      description: "Karnisze klasyczne, szyny manualne oraz nowoczesne szyny elektryczne. Komfort sterowania pilotem, smartfonem lub głosem.",
      image: "/images/oferta/IMG-20231201-WA0014.jpg",
      features: [
        "Karnisze drewniane i metalowe",
        "Szyny elektryczne",
        "Systemy klik i ukryte"
      ]
    }
  ];

  return (
    <section id="oferta" className="py-24 px-4 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center mb-4 text-neutral-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Nasza oferta
        </motion.h2>
        
        <p className="text-center text-xl text-neutral-600 mb-16 max-w-3xl mx-auto">
          Kompleksowe dekoracje okienne — od pomiaru, przez projekt, szycie, aż po montaż
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {oferta.map((item, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-72">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-neutral-900">
                  {item.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                <ul className="space-y-2 text-sm">
                  {item.features?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}