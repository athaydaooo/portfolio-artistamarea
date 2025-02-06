"use client";

import React from "react";
import { useTina } from "tinacms/dist/react";
import AspectRatio from "@/types/aspect-ratio.ts";
import VideoSection from "@/components/sections/video/index.tsx";
import { VideosQuery } from "../../../tina/__generated__/types.ts";

interface VideosPageBuilderProps {
  data: VideosQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}

const VideosPageBuilder: React.FC<VideosPageBuilderProps> = (props) => {
  const { data } = useTina(props);
  return (
    <>
      {data.videos.videos.map((element, index) => (
        <VideoSection
          key={index.toString()}
          details={{ title: element.title, description: element.body }}
          videoUrl={element.videoUrl}
          aspectRatio={element.aspectRatio as AspectRatio}
          reverseOrder={!(index % 2)}
          isExplicit={element.isExplicit || undefined}
        />
      ))}
    </>
  );
};

export default VideosPageBuilder;
