"use client";

import React from "react";
import { useTina } from "tinacms/dist/react";
import AboutSection from "@/components/sections/about/index.tsx";
import { AboutQuery } from "../../../tina/__generated__/types.ts";

export interface AboutPageBuilderProps {
  data: AboutQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}

const AboutPageBuilder: React.FC<AboutPageBuilderProps> = (props) => {
  const { data } = useTina(props);

  return (
    <AboutSection details={data.about.body} imageUrl={data.about.aboutImage} />
  );
};

export default AboutPageBuilder;
