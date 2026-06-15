export default function WyborZaluzjiPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-6">
        WYBÓR ŻALUZJI – CZYLI CO NAJLEPSZE DLA TWOJEGO WNĘTRZA
      </h1>
      
      <p className="text-neutral-500 text-sm mb-10">10.11.2025</p>

      <div className="prose prose-neutral max-w-none">
        <p><strong>Styl, komfort i pełna kontrola światła</strong> – wybierz żaluzje idealne do Twojego wnętrza!</p>
        <p>Żaluzje to nie tylko ochrona przed słońcem i gwarancja prywatności, ale także wyjątkowy element dekoracyjny.</p>
        <p>Nowoczesne żaluzje aluminiowe zachwycają elegancją, trwałością i łatwością pielęgnacji, idealnie sprawdzając się nawet w łazience.</p>
        <p>Z kolei żaluzje drewniane wprowadzają do wnętrz naturalne ciepło, zapewniają doskonałą izolację i ekologiczne rozwiązanie na lata. Postaw na funkcjonalność i design dopasowany do Twojego stylu!</p>
      </div>

      {/* Zdjęcia */}
      <div className="my-12 space-y-8">
        <img 
          src="/images/Blog/zaluzja.jpg" 
          alt="Żaluzje aluminiowe" 
          className="rounded-xl w-full shadow-md" 
        />
        
        <img 
          src="/images/Blog/zaluzja 6.jpg" 
          alt="Żaluzje drewniane" 
          className="rounded-xl w-full shadow-md" 
        />
      </div>

    </div>
  );
}