import Gallery from "@/components/sections/gallery/Gallery.tsx";
import AspectRatio from "@/types/aspect-ratio.ts";

export default function Mareabee() {
  return (
    <>
      <div className="flex flex-col items-center lg:h-screen">
        <Gallery
          images={[
            { src: "/mareabee/galeria/1.jpg", ratio: AspectRatio.ClassicLandscape },
            { src: "/mareabee/galeria/2.jpg", ratio: AspectRatio.ClassicPortrait },
            { src: "/mareabee/galeria/3.jpg", ratio: AspectRatio.ClassicPortrait },
            { src: "/mareabee/galeria/4.jpg", ratio: AspectRatio.ModernPortrait },
            { src: "/mareabee/galeria/5.jpg", ratio: AspectRatio.ClassicLandscape },
            { src: "/mareabee/galeria/6.jpg", ratio: AspectRatio.ClassicPortrait },
            { src: "/mareabee/galeria/7.jpg", ratio: AspectRatio.ModernLandscape },
            { src: "/mareabee/galeria/8.jpg", ratio: AspectRatio.ClassicLandscape },
            { src: "/mareabee/galeria/9.jpg", ratio: AspectRatio.ClassicPortrait },
            { src: "/mareabee/galeria/10.jpg", ratio: AspectRatio.ClassicLandscape },
            { src: "/mareabee/galeria/11.jpg", ratio: AspectRatio.ClassicLandscape },
            { src: "/mareabee/galeria/12.jpg", ratio: AspectRatio.ClassicLandscape },
            { src: "/mareabee/galeria/13.jpg", ratio: AspectRatio.Square },
            { src: "/mareabee/galeria/14.jpg", ratio: AspectRatio.ClassicLandscape },
            { src: "/mareabee/galeria/15.jpg", ratio: AspectRatio.ClassicLandscape },
            { src: "/mareabee/galeria/16.jpg", ratio: AspectRatio.ClassicLandscape },
            { src: "/mareabee/galeria/17.jpg", ratio: AspectRatio.ClassicLandscape },
            { src: "/mareabee/galeria/18.jpg", ratio: AspectRatio.ClassicLandscape },
            { src: "/mareabee/galeria/19.jpg", ratio: AspectRatio.ClassicLandscape },
            { src: "/mareabee/galeria/20.jpg", ratio: AspectRatio.ClassicLandscape },
          ]}
        />
      </div>
    </>
  );
}
