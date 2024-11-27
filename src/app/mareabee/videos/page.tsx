import VideoSection from "@/components/sections/video/Video.tsx";
import AspectRatio from "@/types/aspect-ratio.ts";

export default function Videos() {
  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <VideoSection
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate luctus malesuada. Nam tempus diam odio, ut sollicitudin risus iaculis a. "
          reverseOrder
          aspectRatio={AspectRatio.ClassicLandscape}
          videoUrl="/mareabee/doutora.mp4"
        />
      </div>

      <div className="flex flex-col items-center h-screen">
        <VideoSection
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate luctus malesuada. Nam tempus diam odio, ut sollicitudin risus iaculis a. "
          reverseOrder={false}
          aspectRatio={AspectRatio.ClassicLandscape}
          videoUrl="/mareabee/doutora.mp4"
        />
      </div>
      <div className="flex flex-col items-center h-screen">
        <VideoSection
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate luctus malesuada. Nam tempus diam odio, ut sollicitudin risus iaculis a. "
          reverseOrder={true}
          aspectRatio={AspectRatio.ClassicLandscape}
          videoUrl="/mareabee/doutora.mp4"
        />
      </div>
    </>
  );
}
