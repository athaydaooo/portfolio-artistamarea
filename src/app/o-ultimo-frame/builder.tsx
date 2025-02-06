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
        isExplicit={data.oultimoframe.isExplicit || undefined}
      />

      <CreditsSection rolesData={data.oultimoframe.roles} />
    </>
  );
};

export default OUltimoFramePageBuilder;
