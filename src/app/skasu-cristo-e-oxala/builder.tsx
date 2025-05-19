"use client";

import HeroSection from "@/components/sections/hero/index.tsx";
import ImageCreditsSection from "@/components/sections/image-credits/index.tsx";
import ImageSection from "@/components/sections/image/index.tsx";
import VideoSection from "@/components/sections/video/index.tsx";
import AspectRatio from "@/types/aspect-ratio.ts";
import React from "react";
import { useTina } from "tinacms/dist/react";
import { SkasucristoeoxalaQuery } from "../../../tina/__generated__/types.ts";

export interface SkasuCristoEOxalaBuilderProps {
  data: SkasucristoeoxalaQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}

const SkasuCristoEOxalaBuilder: React.FC<SkasuCristoEOxalaBuilderProps> = (
  props,
) => {
  const { data } = useTina(props);

  return (
    <>
      <HeroSection
        alt="Imagem de fundo Skasu - Cristo e Oxalá"
        key="hero-desktop"
        url={data.skasucristoeoxala.desktopHero}
        className="hidden lg:block"
      />
      <HeroSection
        alt="Imagem de fundo Skasu - Cristo e Oxalá"
        key="hero-curta-mobile"
        url={data.skasucristoeoxala.mobileHero}
        className="block lg:hidden"
      />

      {data.skasucristoeoxala.images.map((image, index) => (
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
        videoUrl={data.skasucristoeoxala.clipUrl}
        isExplicit={data.skasucristoeoxala.isExplicit || undefined}
      />

      <ImageCreditsSection
        title="Créditos"
        creditsData={data.skasucristoeoxala.credits}
      />

      <ImageCreditsSection
        title="Patrocínio"
        creditsData={data.skasucristoeoxala.sponsors}
      />
    </>
  );
};

export default SkasuCristoEOxalaBuilder;
