import ImageWrapper from "@/components/atoms/image-wrapper/ImageWrapper.tsx";
import { ImageData } from "@/types/image-data.ts";
import React from "react";

interface SingleColumnGallerySectionProps {
  images: ImageData[];
}

const SingleColumnGallerySection: React.FC<SingleColumnGallerySectionProps> = ({
  images,
}) => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full h-fit min-h-[100vh]">
      <div className="grid grid-cols-1 gap-4 lg:gap-16 px-8 py-16 md:px-20 lg:px-32 xl:px-48 w-[80vw] 2k:w-[60vw]">
        {images.map((image, index) => (
          <ImageWrapper
            alt={image.alt}
            key={`sg-col-gal-${index}`}
            src={image.src}
            aspectRatio={image.ratio}
            sizes="auto"
            className="w-full"
          />
        ))}
      </div>
    </section>
  );
};

export default SingleColumnGallerySection;
