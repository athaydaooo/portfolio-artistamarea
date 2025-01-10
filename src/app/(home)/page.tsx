import GallerySection from "@/components/sections/gallery/index.tsx";
import AspectRatio from "@/types/aspect-ratio.ts";

export default function Home() {
  return (
    <div className="flex flex-col items-center lg:h-screen">
      <GallerySection
        images={[
          {
            src: "/galeria/athayde-1.jpg",
            alt: "Athayde 1",
            ratio: AspectRatio.ClassicPortrait,
          },
          {
            src: "/galeria/athayde-2.jpg",
            alt: "Athayde 2",
            ratio: AspectRatio.ClassicPortrait,
          },
          {
            src: "/galeria/capivaras.jpg",
            alt: "Capivaras",
            ratio: AspectRatio.ClassicPortrait,
          },
          {
            src: "/galeria/decoracao.jpg",
            alt: "Decoração",
            ratio: AspectRatio.ModernPortrait,
          },
          {
            src: "/galeria/holambra-1.jpg",
            alt: "Holambra 1",
            ratio: AspectRatio.ClassicLandscape,
          },
          {
            src: "/galeria/holambra-2.jpg",
            alt: "Holambra 2",
            ratio: AspectRatio.ClassicPortrait,
          },
          {
            src: "/galeria/livro-casamento.jpg",
            alt: "Livro Casamento",
            ratio: AspectRatio.ModernLandscape,
          },
          {
            src: "/galeria/mastrobiso-1.jpg",
            alt: "Mastrobiso 1",
            ratio: AspectRatio.ClassicLandscape,
          },
          {
            src: "/galeria/mastrobiso-2.jpg",
            alt: "Mastrobiso 2",
            ratio: AspectRatio.ClassicPortrait,
          },
          {
            src: "/galeria/noronha-1.jpg",
            alt: "Noronha 1",
            ratio: AspectRatio.ClassicLandscape,
          },
          {
            src: "/galeria/noronha-2.jpg",
            alt: "Noronha 2",
            ratio: AspectRatio.ClassicLandscape,
          },
          {
            src: "/galeria/noronha-3.jpg",
            alt: "Noronha 3",
            ratio: AspectRatio.ClassicLandscape,
          },
          {
            src: "/galeria/noronha-4.jpg",
            alt: "Noronha 4",
            ratio: AspectRatio.Square,
          },
          {
            src: "/galeria/noronha-5.jpg",
            alt: "Noronha 5",
            ratio: AspectRatio.ClassicLandscape,
          },
          {
            src: "/galeria/noronha-6.jpg",
            alt: "Noronha 6",
            ratio: AspectRatio.ClassicLandscape,
          },
          {
            src: "/galeria/pagode.jpg",
            alt: "Pagode",
            ratio: AspectRatio.ClassicLandscape,
          },
          {
            src: "/galeria/passarinhos.jpg",
            alt: "Passarinhos",
            ratio: AspectRatio.ClassicLandscape,
          },
          {
            src: "/galeria/passaros-ninho.jpg",
            alt: "Pássaros no Ninho",
            ratio: AspectRatio.ClassicLandscape,
          },
          {
            src: "/galeria/passaros.jpg",
            alt: "Pássaros",
            ratio: AspectRatio.ClassicLandscape,
          },
          {
            src: "/galeria/praia-de-noronha.jpg",
            alt: "Praia de Noronha",
            ratio: AspectRatio.ClassicLandscape,
          },
        ]}
      />
    </div>
  );
}
