import TextDescrition from "@/components/atoms/text-description/text-description.tsx";
import TextTitle from "@/components/atoms/text-title/text-title.tsx";
import VideoWrapper from "@/components/atoms/video-wrapper/VideoWrapper.tsx";
import TitleWithDescription from "@/components/molecules/text-with-description/TitleWithDescription.tsx";
import AspectRatio from "@/types/aspect-ratio.ts";
import { MediaDetails } from "@/types/media-details.ts";
import clsx from "@/utils/clsx.ts";
import React from "react";

interface VideoWithTextProps {
  videoUrl: string;
  aspectRatio: AspectRatio;
  details?: MediaDetails;
  description?: string;
  videoPosterUrl?: string;
  reverseOrder?: boolean;
  className?: string;
}

const VideoWithText: React.FC<VideoWithTextProps> = ({
  details,
  videoUrl,
  aspectRatio,
  reverseOrder,
  videoPosterUrl,
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
            className="hidden lg:flex gap-16 w-[30vw]"
            flexAlignment="text-center"
          />

          <TextTitle
            text={details.title}
            className="block lg:hidden text-center"
          />

          <VideoWrapper
            src={videoUrl}
            aspectRatio={aspectRatio}
            poster={videoPosterUrl || undefined}
            className="flex items-center rounded-xl w-[90vw] md:w-[50vw]"
          />

          <TextDescrition
            text={details.description}
            className="block lg:hidden text-center w-[70vw]"
          />
        </div>
      ) : (
        <VideoWrapper
          src={videoUrl}
          aspectRatio={aspectRatio}
          poster={videoPosterUrl || undefined}
          className="flex items-center rounded-xl w-[90vw] md:w-[50vw]"
        />
      )}
    </>
  );
};

export default VideoWithText;
