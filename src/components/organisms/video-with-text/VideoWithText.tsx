import VideoWrapper from "@/components/atoms/video-wrapper/VideoWrapper.tsx";
import TitleWithDescription from "@/components/molecules/text-with-description/TitleWithDescription.tsx";
import clsx from "@/utils/clsx.ts";
import React from "react";

interface VideoWithTextProps {
  title: string;
  description: string;
  videoUrl: string;
  videoWidht: number;
  videoHeight: number;
  videoPosterUrl?: string;
  reverseOrder?: boolean;
  className?: string;
}

const VideoWithText: React.FC<VideoWithTextProps> = ({
  title,
  description,
  videoUrl,
  videoHeight,
  videoWidht,
  reverseOrder,
  videoPosterUrl,
  className,
}) => {
  return (
    <div
      className={clsx(
        "flex flex-row",
        reverseOrder ? "flex-row-reverse" : null,
        className || null,
      )}
    >
      <TitleWithDescription
        title={title}
        description={description}
        flexAlignment="text-center w-[30vw] gap-16"
      />
      <VideoWrapper
        src={videoUrl}
        height={videoHeight}
        width={videoWidht}
        poster={videoPosterUrl || undefined}
        className="rounded-xl"
      />
    </div>
  );
};

export default VideoWithText;
