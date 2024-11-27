import clsx from "@/utils/clsx.ts";
import React from "react";
import AspectRatio from "@/types/aspect-ratio.ts";

interface VideoWrapperProps {
  src: string;
  aspectRatio: AspectRatio;
  className?: string;
  poster?: string;
}

const VideoWrapper: React.FC<VideoWrapperProps> = ({
  src,
  aspectRatio,
  poster,
  className,
}) => {
  const aspectClass = `aspect-[${aspectRatio}]`;
  return (
    <div className={clsx(className || null, aspectClass)}>
      <video
        className="rounded-xl"
        controls
        preload="metadata"
        poster={poster || undefined}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoWrapper;
