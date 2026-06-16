export default function NowosciStudio66Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-6">
        Nowości w ofercie Studio 66
      </h1>
      
      <p className="text-neutral-500 text-sm mb-10">15.11.2025</p>

      <div className="prose prose-neutral max-w-none">
        <p><strong>Wyjątkowe dywany i wykładziny, stworzone z myślą o Twoim wnętrzu</strong></p>
        <p>Nadaj swojej przestrzeni charakter i harmonię dzięki dywanom i wykładzinom, które dobieramy indywidualnie do każdego wnętrza.</p>
        <p>Oferujemy unikalne wzory, szeroką paletę kolorów oraz estetyczne, dopracowane wykończenia, które podkreślają styl i jakość na najwyższym poziomie.</p>
        <p>Każdy detal ma znaczenie — dlatego nasze dywany i wykładziny łączą funkcjonalność, trwałość i elegancję. Idealne do domów, biur i przestrzeni komercyjnych.</p>

        <ul className="list-disc pl-6 my-8">
          <li>Dopasowane do Twojego stylu</li>
          <li>Bogata kolorystyka i faktury</li>
          <li>Precyzyjne, estetyczne wykończenia</li>
        </ul>

        <p>Stwórz wnętrze, które zachwyca od pierwszego kroku.</p>
      </div>

      {/* Zdjęcia z folderu Nowości */}
      <div className="my-12 space-y-8">
        <img src="/images/Blog/TAPETA 1.webp" alt="Tapeta 1" className="rounded-xl w-full shadow-md" />
        <img src="/images/Blog/TAPETA 2.jpg" alt="Tapeta 2" className="rounded-xl w-full shadow-md" />
        <img src="/images/Blog/TAPETA 3.jpg" alt="Tapeta 3" className="rounded-xl w-full shadow-md" />
        <img src="/images/Blog/tapeta.jpg" alt="Tapeta" className="rounded-xl w-full shadow-md" />
        
        <img src="/images/Blog/zasona 1.jpg" alt="Zasłona 1" className="rounded-xl w-full shadow-md" />
        <img src="/images/Blog/zasona 10.jpg" alt="Zasłona 10" className="rounded-xl w-full shadow-md" />
        <img src="/images/Blog/zasona 11.jpg" alt="Zasłona 11" className="rounded-xl w-full shadow-md" />
        <img src="/images/Blog/zasona 12.jpg" alt="Zasłona 12" className="rounded-xl w-full shadow-md" />
        <img src="/images/Blog/zasona.jpg" alt="Zasłona" className="rounded-xl w-full shadow-md" />
      </div>
    </div>
  );
}