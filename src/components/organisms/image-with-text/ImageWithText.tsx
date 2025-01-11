import ImageWrapper from "@/components/atoms/image-wrapper/ImageWrapper.tsx";
import TextDescrition from "@/components/atoms/text-description/text-description.tsx";
import TextTitle from "@/components/atoms/text-title/text-title.tsx";
import TitleWithDescription from "@/components/molecules/text-with-description/TitleWithDescription.tsx";
import AspectRatio from "@/types/aspect-ratio.ts";
import clsx from "@/utils/clsx.ts";
import React from "react";
import { MediaDetails } from "@/types/media-details.ts";

interface ImageWithTextProps {
  url: string;
  aspectRatio: AspectRatio;
  alt: string;
  details?: MediaDetails;
  reverseOrder?: boolean;
  className?: string;
}

const ImageWithText: React.FC<ImageWithTextProps> = ({
  details,
  url,
  aspectRatio,
  alt,
  reverseOrder,
  className,
}) => {
  return (
    <>
      {details ? (
        <div
          className={clsx(
            "flex flex-col lg:flex-row w-[90vw]",
            reverseOrder ? "lg:flex-row-reverse" : null,
            className || null,
          )}
        >
          <TitleWithDescription
            details={details}
            flexAlignment="text-center"
            className="hidden lg:flex gap-16 w-[30vw]"
          />

          <TextTitle
            text={details.title}
            className="block lg:hidden text-center"
          />

          <ImageWrapper
            alt={alt}
            sizes="auto"
            src={url}
            aspectRatio={aspectRatio}
            className="flex items-center rounded-xl w-[90vw] md:w-[50vw]"
          />

          <TextDescrition
            text={details.description}
            className="block lg:hidden text-center w-[70vw]"
          />
        </div>
      ) : (
        <ImageWrapper
          alt={alt}
          sizes="auto"
          src={url}
          aspectRatio={aspectRatio}
          className="flex items-center rounded-xl w-[90vw] md:w-[50vw]"
        />
      )}
    </>
  );
};

export default ImageWithText;
