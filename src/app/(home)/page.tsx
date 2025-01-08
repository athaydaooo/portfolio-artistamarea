import Gallery from "@/components/sections/gallery/Gallery.tsx";
import AspectRatio from "@/types/aspect-ratio.ts";

export default function Home() {
  return (
    <div className="flex flex-col items-center lg:h-screen">
      <Gallery
        images={[
          {
            src: "/galeria/1.jpg",
            ratio: AspectRatio.ClassicLandscape,
          },
          {
            src: "/galeria/2.jpg",
            ratio: AspectRatio.ClassicPortrait,
          },
          {
            src: "/galeria/3.jpg",
            ratio: AspectRatio.ClassicPortrait,
          },
          { src: "/galeria/4.jpg", ratio: AspectRatio.ModernPortrait },
          {
            src: "/galeria/5.jpg",
            ratio: AspectRatio.ClassicLandscape,
          },
          {
            src: "/galeria/6.jpg",
            ratio: AspectRatio.ClassicPortrait,
          },
          {
            src: "/galeria/7.jpg",
            ratio: AspectRatio.ModernLandscape,
          },
          {
            src: "/galeria/8.jpg",
            ratio: AspectRatio.ClassicLandscape,
          },
          {
            src: "/galeria/9.jpg",
            ratio: AspectRatio.ClassicPortrait,
          },
          {
            src: "/galeria/10.jpg",
            ratio: AspectRatio.ClassicLandscape,
          },
          {
            src: "/galeria/11.jpg",
            ratio: AspectRatio.ClassicLandscape,
          },
          {
            src: "/galeria/12.jpg",
            ratio: AspectRatio.ClassicLandscape,
          },
          { src: "/galeria/13.jpg", ratio: AspectRatio.Square },
          {
            src: "/galeria/14.jpg",
            ratio: AspectRatio.ClassicLandscape,
          },
          {
            src: "/galeria/15.jpg",
            ratio: AspectRatio.ClassicLandscape,
          },
          {
            src: "/galeria/16.jpg",
            ratio: AspectRatio.ClassicLandscape,
          },
          {
            src: "/galeria/17.jpg",
            ratio: AspectRatio.ClassicLandscape,
          },
          {
            src: "/galeria/18.jpg",
            ratio: AspectRatio.ClassicLandscape,
          },
          {
            src: "/galeria/19.jpg",
            ratio: AspectRatio.ClassicLandscape,
          },
          {
            src: "/galeria/20.jpg",
            ratio: AspectRatio.ClassicLandscape,
          },
        ]}
      />
    </div>
  );
}
