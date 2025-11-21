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
    slug: "jak-dobrac-firany-do-salonu-5-praktycznych-wskazowek",
    title: "Jak dobrać firany do salonu – 5 praktycznych wskazówek",
    category: "Porady",
    date: "10.11.2025",
    readingTime: "5 min czytania",
    excerpt:
      "Firany w salonie to nie tylko dekoracja, ale też sposób na kontrolę światła i budowanie atmosfery.",
    image: "/images/blog1.jpg"
  },
  {
    slug: "rolety-rzymskie-czy-zaslony-co-wybrac-do-swojego-wnetrza",
    title: "Rolety rzymskie czy zasłony? Co wybrać do swojego wnętrza",
    category: "Inspiracje",
    date: "05.11.2025",
    readingTime: "4 min czytania",
    excerpt:
      "Rolety rzymskie świetnie sprawdzają się tam, gdzie potrzebujemy funkcjonalności i minimalizmu.",
    image: "/images/blog2.jpg"
  },
  {
    slug: "nowosci-w-ofercie-studio-66-jesien-2025",
    title: "Nowości w ofercie Studio 66 – jesień 2025",
    category: "Aktualności",
    date: "20.10.2025",
    readingTime: "3 min czytania",
    excerpt:
      "Wprowadzamy nowe kolekcje tkanin zaciemniających oraz lekkich mieszanek idealnych do salonów i sypialni.",
    image: "/images/blog3.jpg"
  }
];
