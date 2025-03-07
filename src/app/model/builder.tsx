"use client";

import React from "react";
import { useTina } from "tinacms/dist/react";
import SingleColumnGallerySection from "@/components/sections/single-column-gallery/index.tsx";
import { ImageData } from "@/types/image-data.ts";
import AspectRatio from "@/types/aspect-ratio.ts";
import { ModelQuery } from "../../../tina/__generated__/types.ts";

export interface AboutPageBuilderProps {
  data: ModelQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}

const ModelPageBuilder: React.FC<AboutPageBuilderProps> = (props) => {
  const { data } = useTina(props);
  const images = data.model.images.map((image) => {
    return {
      alt: image.alt,
      ratio: image.aspectRatio as AspectRatio,
      src: image.imageUrl,
    } as ImageData;
  });

  return (
    <>
      <SingleColumnGallerySection images={images} />
    </>
  );
};

export default ModelPageBuilder;
