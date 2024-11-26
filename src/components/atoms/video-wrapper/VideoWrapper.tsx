import React from "react";

interface VideoWrapperProps {
  src: string;
  height: number;
  width: number;
  className?: string;
  poster?: string;
}

const VideoWrapper: React.FC<VideoWrapperProps> = ({
  src,
  width,
  height,
  poster,
  className,
}) => {
  return (
    <video
      width={width}
      height={height}
      controls
      preload="metadata"
      poster={poster || undefined}
      className={className || ""}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoWrapper;
