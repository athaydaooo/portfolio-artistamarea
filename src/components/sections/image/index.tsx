import ImageWithText from "@/components/organisms/image-with-text/ImageWithText.tsx";
import AspectRatio from "@/types/aspect-ratio.ts";
import { MediaDetails } from "@/types/media-details.ts";
import React from "react";

interface ImageSectionProps {
  url: string;
  alt: string;
  aspectRatio: AspectRatio;
  details?: MediaDetails;
  reverseOrder?: boolean;
}

const ImageSection: React.FC<ImageSectionProps> = ({
  url,
  aspectRatio,
  alt,
  details,
  reverseOrder,
}) => {
  return (
    <section className="relative flex items-center justify-center h-screen w-full">
      <ImageWithText
        alt={alt}
        details={details}
        url={url}
        aspectRatio={aspectRatio}
        reverseOrder={reverseOrder}
        className="justify-center items-center gap-16"
      />
    </section>
  );
};

export default ImageSection;
