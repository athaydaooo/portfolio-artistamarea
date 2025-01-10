"use client";

import ImageWrapper from "@/components/atoms/image-wrapper/ImageWrapper.tsx";
import AspectRatio from "@/types/aspect-ratio.ts";
import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useTina } from "tinacms/dist/react";
import { AboutQuery } from "../../../../tina/__generated__/types.ts";

interface AboutSectionProps {
  data: AboutQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}

const AboutSection: React.FC<AboutSectionProps> = (props) => {
  const { data } = useTina(props);
  return (
    <section className="relative flex items-center justify-center lg:h-full w-full">
      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center justify-center h-full w-full">
        <div className="flex flex-col items-center">
          <ImageWrapper
            alt="maria-claudia"
            className={"w-[60vw] md:w-[40vw] lg:w-[30vw] mt-10 lg:mt-auto"}
            aspectRatio={AspectRatio.Square}
            key="maria-claudia"
            sizes="auto"
            src={data.about.aboutImage}
          />
        </div>

        <div className="relative flex flex-col w-[90vw] lg:w-[30vw] mx-auto my-10 lg:m-10">
          <h1 className="text-2xl text-start">{data.about.title}</h1>
          <br />
          <TinaMarkdown content={data.about.body} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
