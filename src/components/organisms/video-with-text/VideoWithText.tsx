import TextDescrition from "@/components/atoms/text-description/text-description.tsx";
import TextTitle from "@/components/atoms/text-title/text-title.tsx";
import VideoWrapper from "@/components/atoms/video-wrapper/VideoWrapper.tsx";
import TitleWithDescription from "@/components/molecules/text-with-description/TitleWithDescription.tsx";
import AspectRatio from "@/types/aspect-ratio.ts";
import clsx from "@/utils/clsx.ts";
import React from "react";

interface VideoWithTextProps {
  title: string;
  description: string;
  videoUrl: string;
  aspectRatio: AspectRatio;
  videoPosterUrl?: string;
  reverseOrder?: boolean;
  className?: string;
}

const VideoWithText: React.FC<VideoWithTextProps> = ({
  title,
  description,
  videoUrl,
  aspectRatio,
  reverseOrder,
  videoPosterUrl,
  className,
}) => {
  return (
    <>
      <div
        className={clsx(
          "flex flex-col lg:flex-row w-[90vw]",
          reverseOrder ? "lg:flex-row-reverse" : null,
          className || null,
        )}
      >
        <TitleWithDescription
          title={title}
          description={description}
          flexAlignment="text-center"
          className="hidden lg:block gap-16 w-[30vw]"
        />

        <TextTitle text={title} className="block lg:hidden text-center" />

        <VideoWrapper
          src={videoUrl}
          aspectRatio={aspectRatio}
          poster={videoPosterUrl || undefined}
          className="flex items-center rounded-xl w-[90vw] md:w-[50vw]"
        />

        <TextDescrition
          text={description}
          className="block lg:hidden text-center w-[70vw]"
        />
      </div>
    </>
  );
};

export default VideoWithText;
