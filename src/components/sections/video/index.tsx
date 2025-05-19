import VideoWithText from "@/components/organisms/video-with-text/VideoWithText.tsx";
import AspectRatio from "@/types/aspect-ratio.ts";
import { MediaDetails } from "@/types/media-details.ts";
import React from "react";

interface VideoSectionProps {
  videoUrl: string;
  aspectRatio: AspectRatio;
  isExplicit?: boolean;
  details?: MediaDetails;
  reverseOrder?: boolean;
  videoPosterUrl?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  videoUrl,
  aspectRatio,
  details,
  reverseOrder,
  videoPosterUrl,
  isExplicit,
}) => {
  return (
    <section className="relative flex flex-col items-center justify-center py-8 lg:py-0 lg:h-screen w-full">
      <VideoWithText
        details={details}
        videoUrl={videoUrl}
        aspectRatio={aspectRatio}
        reverseOrder={reverseOrder}
        videoPosterUrl={videoPosterUrl || undefined}
        isExplicit={isExplicit}
        className="justify-center items-center gap-16"
      />
    </section>
  );
};

export default VideoSection;
