import VideoWithText from "@/components/organisms/video-with-text/VideoWithText.tsx";
import React from "react";

interface VideoSectionProps {
  videoUrl: string;
  title: string;
  description: string;
  videoHeight: number;
  videoWidht: number;
  reverseOrder?: boolean;
  videoPosterUrl?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  videoUrl,
  title,
  description,
  reverseOrder,
  videoPosterUrl,
  videoHeight,
  videoWidht,
}) => {
  return (
    <section className="relative flex items-center justify-center lg:h-full w-full">
      <VideoWithText
        title={title}
        description={description}
        videoUrl={videoUrl}
        videoHeight={videoHeight}
        videoWidht={videoWidht}
        key={title}
        reverseOrder={reverseOrder}
        videoPosterUrl={videoPosterUrl || undefined}
        className="justify-center items-center gap-16"
      />
    </section>
  );
};

export default VideoSection;
