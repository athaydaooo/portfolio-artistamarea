"use client";

import React from "react";
import { useTina } from "tinacms/dist/react";
import HeroSection from "@/components/sections/hero/index.tsx";
import ImageSection from "@/components/sections/image/index.tsx";
import AspectRatio from "@/types/aspect-ratio.ts";
import VideoSection from "@/components/sections/video/index.tsx";
import CreditsSection from "@/components/sections/credits/index.tsx";
import { OultimoframeQuery } from "../../../tina/__generated__/types.ts";

export interface AboutPageBuilderProps {
  data: OultimoframeQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}

const OUltimoFramePageBuilder: React.FC<AboutPageBuilderProps> = (props) => {
  const { data } = useTina(props);

  return (
    <>
      <HeroSection
        alt="Imagem Gravacao curta"
        key="hero-curta-desktop"
        url={data.oultimoframe.desktopHero}
        className="hidden lg:block"
      />
      <HeroSection
        alt="Gravacao curta"
        key="hero-curta-mobile"
        url={data.oultimoframe.mobileHero}
        className="block lg:hidden"
      />

      {data.oultimoframe.images.map((image, index) => (
        <ImageSection
          alt={image.alt}
          key={index.toString()}
          details={{
            title: image.title,
            description: image.body,
          }}
          reverseOrder={index % 2 === 0}
          aspectRatio={image.aspectRatio as AspectRatio}
          url={image.imageUrl}
        />
      ))}

      <VideoSection
        aspectRatio={AspectRatio.ModernLandscape}
        videoUrl={data.oultimoframe.filmUrl}
        videoPosterUrl={data.oultimoframe.filmPosterUrl ?? ""}
      />

      <CreditsSection rolesData={data.oultimoframe.roles} />
    </>
  );
};

export default OUltimoFramePageBuilder;

/*

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
        <VideoSection
          key="video do curta"
          reverseOrder
          aspectRatio={AspectRatio.ModernLandscape}
          videoUrl="/o-ultimo-frame/curta.mp4"
        />
      </div>

*/
