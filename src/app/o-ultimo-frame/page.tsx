import Hero from "@/components/sections/hero/Hero.tsx";
import ImageSection from "@/components/sections/image/Image.tsx";
import VideoSection from "@/components/sections/video/Video.tsx";
import AspectRatio from "@/types/aspect-ratio.ts";

export default function OUltimoFrame() {
  return (
    <>
      <Hero
        alt="Gravacao curta"
        key="hero-curta-desktop"
        url="/o-ultimo-frame/hero.jpg"
        className="hidden lg:block"
      />

      <Hero
        alt="Gravacao curta"
        key="hero-curta-mobile"
        url="/o-ultimo-frame/mobile-hero.jpg"
        className="block lg:hidden"
      />

      <div className="flex flex-col items-center h-screen">
        <ImageSection
          alt="Lorem ipsum1"
          key="Lorem ipsum1"
          details={{
            title: "Lorem ipsum",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate luctus malesuada. Nam tempus diam odio, ut sollicitudin risus iaculis a. ",
          }}
          reverseOrder
          aspectRatio={AspectRatio.ClassicLandscape}
          url="/o-ultimo-frame/1.jpg"
        />
      </div>

      <div className="flex flex-col items-center h-screen">
        <ImageSection
          alt="Lorem ipsum1"
          key="Lorem ipsum1"
          details={{
            title: "Lorem ipsum",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate luctus malesuada. Nam tempus diam odio, ut sollicitudin risus iaculis a. ",
          }}
          reverseOrder={false}
          aspectRatio={AspectRatio.ClassicLandscape}
          url="/o-ultimo-frame/2.jpg"
        />
      </div>

      <div className="flex flex-col items-center h-screen">
        <ImageSection
          alt="Lorem ipsum1"
          key="Lorem ipsum1"
          details={{
            title: "Lorem ipsum",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate luctus malesuada. Nam tempus diam odio, ut sollicitudin risus iaculis a. ",
          }}
          reverseOrder
          aspectRatio={AspectRatio.ClassicLandscape}
          url="/o-ultimo-frame/3.jpg"
        />
      </div>

      <div className="flex flex-col items-center h-screen">
        <VideoSection
          key="video do curta"
          reverseOrder
          aspectRatio={AspectRatio.ModernLandscape}
          videoUrl="/o-ultimo-frame/curta.mp4"
        />
      </div>
    </>
  );
}
