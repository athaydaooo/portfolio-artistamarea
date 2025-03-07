"use client";

import React from "react";
import { useTina } from "tinacms/dist/react";

import { OultimoframeQuery } from "../../../tina/__generated__/types.ts";

export interface AboutPageBuilderProps {
  data: OultimoframeQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}

const ModelPageBuilder: React.FC<AboutPageBuilderProps> = (props) => {
  const { data } = useTina(props);

  return (
    <>
      <h1>MODEL PAGE</h1>
    </>
  );
};

export default ModelPageBuilder;
