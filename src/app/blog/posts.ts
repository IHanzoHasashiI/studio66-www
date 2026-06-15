export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  image: string;
};

export const posts: BlogPost[] = [

  {
    slug: "wybor-zaluzji-czyli-co-najlepsze-dla-twojego-wnetrza",
    title: "WYBÓR ŻALUZJI – CZYLI CO NAJLEPSZE DLA TWOJEGO WNĘTRZA",
    category: "Porady",
    date: "10.11.2025",
    readingTime: "4 min czytania",
    excerpt: "Styl, komfort i pełna kontrola światła – wybierz żaluzje idealne do Twojego wnętrza!",
    image: "/images/blog/zaluzje.jpg"
  },
  {
    slug: "wygoda-i-komfort-czyli-karnisze-elektryczne",
    title: "WYGODA I KOMFORT – CZYLI KARNISZE ELEKTRYCZNE",
    category: "Technologia",
    date: "12.11.2025",
    readingTime: "4 min czytania",
    excerpt: "Nowoczesna wygoda na wyciągnięcie ręki – postaw na karnisze elektryczne!",
    image: "/images/blog/karnisze-elektryczne.jpg"
  },
  {
    slug: "nowosci-w-ofercie-studio-66",
    title: "Nowości w ofercie Studio 66",
    category: "Nowości",
    date: "15.11.2025",
    readingTime: "5 min czytania",
    excerpt: "Wyjątkowe dywany i wykładziny, stworzone z myślą o Twoim wnętrzu.",
    image: "/images/blog/dywany-wykladziny.jpg"
  }
];