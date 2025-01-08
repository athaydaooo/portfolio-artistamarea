import VideoWithText from "@/components/organisms/video-with-text/VideoWithText.tsx";
import AspectRatio from "@/types/aspect-ratio.ts";
import React from "react";

interface VideoSectionProps {
  key: string;
  videoUrl: string;
  aspectRatio: AspectRatio;
  details?: {
    title: string;
    description: string;
  };
  reverseOrder?: boolean;
  videoPosterUrl?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  key,
  videoUrl,
  aspectRatio,
  details,
  reverseOrder,
  videoPosterUrl,
}) => {
  return (
    <section className="relative flex items-center justify-center h-full w-full">
      <VideoWithText
        details={details}
        videoUrl={videoUrl}
        aspectRatio={aspectRatio}
        key={details?.title ? details.title : key}
        reverseOrder={reverseOrder}
        videoPosterUrl={videoPosterUrl || undefined}
        className="justify-center items-center gap-16"
      />
    </section>
  );
};

export default VideoSection;
