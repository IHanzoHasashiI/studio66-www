export default function KarniszeElektrycznePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-6">
        WYGODA I KOMFORT – CZYLI KARNISZE ELEKTRYCZNE
      </h1>
      
      <p className="text-neutral-500 text-sm mb-10">12.11.2025</p>

      <div className="prose prose-neutral max-w-none">
        <p><strong>Nowoczesna wygoda na wyciągnięcie ręki</strong> – postaw na karnisze elektryczne!</p>
        <p>Automatyczne odsłanianie i zasłanianie zasłon za pomocą pilota, smartfona lub głosu to komfort, który zmienia codzienność.</p>
        <p>Ciche, energooszczędne i inteligentne karnisze elektryczne idealnie sprawdzą się przy dużych oknach, wysokich sufitach oraz w domach osób ceniących wygodę i nowoczesne technologie.</p>
        <p>To eleganckie rozwiązanie, które łączy design, funkcjonalność i inteligentny dom – także w już urządzonych wnętrzach bez potrzeby kucia w ścianach.</p>
      </div>

      {/* Zdjęcia - cyfry 1 do 5 */}
      <div className="my-12 space-y-8">
        <img 
          src="/images/Blog/1.png" 
          alt="Karnisz elektryczny 1" 
          className="rounded-xl w-full shadow-md" 
        />
        <img 
          src="/images/Blog/2.png" 
          alt="Karnisz elektryczny 2" 
          className="rounded-xl w-full shadow-md" 
        />
        <img 
          src="/images/Blog/3.png" 
          alt="Karnisz elektryczny 3" 
          className="rounded-xl w-full shadow-md" 
        />
        <img 
          src="/images/Blog/4.png" 
          alt="Karnisz elektryczny 4" 
          className="rounded-xl w-full shadow-md" 
        />
        <img 
          src="/images/Blog/5.png" 
          alt="Karnisz elektryczny 5" 
          className="rounded-xl w-full shadow-md" 
        />
      </div>
    </div>
  );
}