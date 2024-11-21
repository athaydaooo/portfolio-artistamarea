import Gallery from "@/components/sections/gallery/Gallery.tsx";
import AspectRatio from "@/types/aspect-ratio.ts";

export default function Mareabee() {
  return (
    <>
      <div className="flex flex-col w-screen h-[100h] items-center">
        <Gallery
          images={[
            { src: "/mareabee/1.jpg", ratio: AspectRatio.ClassicLandscape },
            { src: "/mareabee/2.jpg", ratio: AspectRatio.ClassicPortrait },
            { src: "/mareabee/3.jpg", ratio: AspectRatio.ClassicPortrait },
            { src: "/mareabee/4.jpg", ratio: AspectRatio.ClassicPortrait },
            { src: "/mareabee/5.jpg", ratio: AspectRatio.ClassicLandscape },
            { src: "/mareabee/6.jpg", ratio: AspectRatio.ModernPortrait },
            { src: "/mareabee/7.jpg", ratio: AspectRatio.ModernLandscape },
            { src: "/mareabee/8.jpg", ratio: AspectRatio.ClassicLandscape },
            { src: "/mareabee/9.jpg", ratio: AspectRatio.ModernPortrait },
            { src: "/mareabee/10.jpg", ratio: AspectRatio.ClassicLandscape },
            { src: "/mareabee/11.jpg", ratio: AspectRatio.ModernLandscape },
            { src: "/mareabee/12.jpg", ratio: AspectRatio.ModernLandscape },
            { src: "/mareabee/13.jpg", ratio: AspectRatio.Square },
            { src: "/mareabee/14.jpg", ratio: AspectRatio.ClassicLandscape },
            { src: "/mareabee/15.jpg", ratio: AspectRatio.ClassicLandscape },
            { src: "/mareabee/16.jpg", ratio: AspectRatio.ClassicLandscape },
            { src: "/mareabee/17.jpg", ratio: AspectRatio.ClassicLandscape },
            { src: "/mareabee/18.jpg", ratio: AspectRatio.ClassicLandscape },
            { src: "/mareabee/19.jpg", ratio: AspectRatio.ModernLandscape },
            { src: "/mareabee/20.jpg", ratio: AspectRatio.ClassicLandscape },
          ]}
        />
      </div>
    </>
  );
}
