import VideoWithText from "@/components/organisms/video-with-text/VideoWithText.tsx";
import AspectRatio from "@/types/aspect-ratio.ts";
import React from "react";

interface VideoSectionProps {
  videoUrl: string;
  title: string;
  description: string;
  aspectRatio: AspectRatio;
  reverseOrder?: boolean;
  videoPosterUrl?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  videoUrl,
  aspectRatio,
  title,
  description,
  reverseOrder,
  videoPosterUrl,
}) => {
  return (
    <section className="relative flex items-center justify-center h-full w-full">
      <VideoWithText
        title={title}
        description={description}
        videoUrl={videoUrl}
        aspectRatio={aspectRatio}
        key={title}
        reverseOrder={reverseOrder}
        videoPosterUrl={videoPosterUrl || undefined}
        className="justify-center items-center gap-16"
      />
    </section>
  );
};

export default VideoSection;
