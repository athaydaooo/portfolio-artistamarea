import VideoSection from "@/components/sections/video/Video.tsx";

export default function Videos() {
  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <VideoSection
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate luctus malesuada. Nam tempus diam odio, ut sollicitudin risus iaculis a. "
          reverseOrder
          videoHeight={1200}
          videoUrl="/mareabee/doutora.mp4"
          videoWidht={800}
        />
      </div>

      <div className="flex flex-col items-center h-screen">
        <VideoSection
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate luctus malesuada. Nam tempus diam odio, ut sollicitudin risus iaculis a. "
          reverseOrder={false}
          videoHeight={1200}
          videoUrl="/mareabee/doutora.mp4"
          videoWidht={800}
        />
      </div>
      <div className="flex flex-col items-center h-screen">
        <VideoSection
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate luctus malesuada. Nam tempus diam odio, ut sollicitudin risus iaculis a. "
          reverseOrder={true}
          videoHeight={1200}
          videoUrl="/mareabee/doutora.mp4"
          videoWidht={800}
        />
      </div>
    </>
  );
}
