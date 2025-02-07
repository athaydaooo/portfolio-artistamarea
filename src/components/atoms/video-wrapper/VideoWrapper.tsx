import clsx from "@/utils/clsx.ts";
import React from "react";
import AspectRatio from "@/types/aspect-ratio.ts";

interface VideoWrapperProps {
  youtubeUrl: string;
  aspectRatio: AspectRatio;
  isExplicit?: boolean;
  className?: string;
}

const VideoWrapper: React.FC<VideoWrapperProps> = ({
  youtubeUrl,
  aspectRatio,
  isExplicit,
  className,
}) => {
  // Função para extrair o ID do vídeo do URL do YouTube
  const getYouTubeVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeVideoId(youtubeUrl);
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  const aspectClass = `aspect-[${aspectRatio}]`;

  return (
    <div className={clsx("flex flex-col", className || null, aspectClass)}>
      {videoId ? (
        <>
          <iframe
            className="rounded-xl w-full h-full"
            src={embedUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </>
      ) : (
        <p>Invalid YouTube URL</p>
      )}
      {isExplicit && (
        <p className="py-4 w-full font-bold text-sm">
          Este vídeo não contém áudio devido a restrições de censura.
        </p>
      )}
    </div>
  );
};

export default VideoWrapper;
