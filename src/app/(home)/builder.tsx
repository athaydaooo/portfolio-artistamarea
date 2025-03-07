"use client";

import React from "react";
import { useTina } from "tinacms/dist/react";
import GallerySection from "@/components/sections/gallery/index.tsx";
import AspectRatio from "@/types/aspect-ratio.ts";
import { ImageData } from "@/types/image-data.ts";
import { HomeQuery } from "../../../tina/__generated__/types.ts";

export interface HomePageBuilderProps {
  data: HomeQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}

const HomePageBuilder: React.FC<HomePageBuilderProps> = (props) => {
  const { data } = useTina(props);
  const images = data.home.images.map((image) => {
    return {
      alt: image.alt,
      ratio: image.aspectRatio as AspectRatio,
      src: image.imageUrl,
    } as ImageData;
  });

  return <GallerySection images={images} />;
};

export default HomePageBuilder;
