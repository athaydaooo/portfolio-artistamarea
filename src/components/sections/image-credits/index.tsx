import ImageWrapper from "@/components/atoms/image-wrapper/ImageWrapper.tsx";
import AspectRatio from "@/types/aspect-ratio.ts";
import clsx from "@/utils/clsx.ts";
import React from "react";
import {
  SkasucristoeoxalaCredits,
  SkasucristoeoxalaSponsors,
} from "../../../../tina/__generated__/types.ts";

interface ImageCreditsSectionProps {
  title: string;
  creditsData: SkasucristoeoxalaCredits[] | SkasucristoeoxalaSponsors[];
  className?: string;
}

const ImageCreditsSection: React.FC<ImageCreditsSectionProps> = ({
  title,
  creditsData,
  className,
}) => {
  if (!creditsData) {
    return null;
  }

  return (
    <section
      className={clsx(
        className || null,
        "relative flex flex-col justify-center items-center gap-8 lg:gap-12 py-8 lg:h-[100vh] ",
      )}
    >
      <h1 className="text-3xl lg:text-6xl text-center">{title}</h1>
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8">
        {creditsData.map((role) => (
          <>
            <ImageWrapper
              key={`image-${role.title}`}
              src={role.imageUrl}
              alt={role.alt}
              aspectRatio={role.aspectRatio as AspectRatio}
              sizes="auto"
              className="w-[40vw] lg:w-[20vw] h-auto lg:h-[20vw] object-cover"
            />
          </>
        ))}
      </div>
    </section>
  );
};

export default ImageCreditsSection;
