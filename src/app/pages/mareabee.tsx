import Footer from "../../components/sections/footer/Footer.tsx";
import Gallery from "../../components/sections/gallery/Gallery.tsx";
import TopMenu from "../../components/sections/top-menu/TopMenu.tsx";
import AspectRatio from "../../types/aspect-ratio.ts";

export default function Mareabee() {
  return (
    <>
      <TopMenu
        sections={["galeria", "videos", "o ultimo frame", "sobre mim"]}
      />

      <div className="flex flex-col w-screen h-screen items-center">
        <Gallery
          images={[
            { src: "/gallery/1.jpg", ratio: AspectRatio.Square },
            { src: "/gallery/2.jpg", ratio: AspectRatio.ModernLandscape },
            { src: "/gallery/3.jpg", ratio: AspectRatio.ModernLandscape },
            { src: "/gallery/4.jpg", ratio: AspectRatio.ModernLandscape },
            { src: "/gallery/5.jpg", ratio: AspectRatio.ModernLandscape },
            { src: "/gallery/9.jpg", ratio: AspectRatio.ModernPortrait },
            { src: "/gallery/7.jpg", ratio: AspectRatio.ModernLandscape },
            { src: "/gallery/8.jpg", ratio: AspectRatio.ClassicLandscape },
            { src: "/gallery/9.jpg", ratio: AspectRatio.ClassicLandscape },
            { src: "/gallery/10.jpg", ratio: AspectRatio.ModernLandscape },
            { src: "/gallery/11.jpg", ratio: AspectRatio.ModernLandscape },
            { src: "/gallery/9.jpg", ratio: AspectRatio.ModernLandscape },
            { src: "/gallery/1.jpg", ratio: AspectRatio.Square },
            { src: "/gallery/2.jpg", ratio: AspectRatio.ClassicLandscape },
            { src: "/gallery/3.jpg", ratio: AspectRatio.ModernLandscape },
            { src: "/gallery/4.jpg", ratio: AspectRatio.ClassicLandscape },
            { src: "/gallery/9.jpg", ratio: AspectRatio.ModernPortrait },
            { src: "/gallery/2.jpg", ratio: AspectRatio.ModernLandscape },
            { src: "/gallery/4.jpg", ratio: AspectRatio.ModernLandscape },
            { src: "/gallery/4.jpg", ratio: AspectRatio.ModernPortrait },
          ]}
        />
      </div>
      <Footer />
    </>
  );
}
