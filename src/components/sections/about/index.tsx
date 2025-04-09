"use client";

import ImageWrapper from "@/components/atoms/image-wrapper/ImageWrapper.tsx";
import AspectRatio from "@/types/aspect-ratio.ts";
import React from "react";
import { TinaMarkdownContent } from "tinacms/dist/rich-text";
import TextDescrition from "@/components/atoms/text-description/text-description.tsx";

interface AboutSectionProps {
  details: TinaMarkdownContent;
  imageUrl: string;
}

const AboutSection: React.FC<AboutSectionProps> = (props) => {
  return (
    <section className="relative flex items-center justify-center h-[90vh] w-full">
      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center justify-center w-full">
        <div className="flex flex-col items-center">
          <ImageWrapper
            alt="maria-claudia"
            className={"w-[60vw] md:w-[40vw] lg:w-[30vw] mt-10 lg:mt-auto"}
            aspectRatio={AspectRatio.Square}
            key="maria-claudia"
            sizes="auto"
            src={props.imageUrl}
          />
        </div>

        <div className="relative flex flex-col w-[90vw] lg:w-[30vw] mx-auto my-10 lg:m-10">
          <TextDescrition text={props.details} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
