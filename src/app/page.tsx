import Gallery from "./components/gallery";
import TopMenu from "./components/top-menu";
import { AspectRatio } from "./types/aspect-ratio";

export default function Home() {
  return (
    <div className="flex flex-col w-[100vw] h-screen items-center">
      <TopMenu sections={["galeria", "videos", "o ultimo frame", "sobre mim"]} />
      <Gallery images={[
      {src: '/gallery/1.jpg', ratio: AspectRatio.Square},
      {src: '/gallery/2.jpg', ratio: AspectRatio.ModernLandscape},
      {src: '/gallery/3.jpg', ratio: AspectRatio.ModernLandscape},
      {src: '/gallery/4.jpg', ratio: AspectRatio.ModernLandscape},
      {src: '/gallery/5.jpg', ratio: AspectRatio.ModernLandscape},
      {src: '/gallery/9.jpg', ratio: AspectRatio.ModernPortrait},
      {src: '/gallery/7.jpg', ratio: AspectRatio.ModernLandscape},
      {src: '/gallery/8.jpg', ratio: AspectRatio.ClassicLandscape},
      {src: '/gallery/9.jpg', ratio: AspectRatio.ClassicLandscape},
      {src: '/gallery/10.jpg', ratio: AspectRatio.ModernLandscape},
      {src: '/gallery/11.jpg', ratio: AspectRatio.ModernLandscape},
      {src: '/gallery/9.jpg', ratio: AspectRatio.ModernLandscape},
      {src: '/gallery/1.jpg', ratio: AspectRatio.Square},
      {src: '/gallery/2.jpg', ratio: AspectRatio.ClassicLandscape},
      {src: '/gallery/3.jpg', ratio: AspectRatio.ModernLandscape},
      {src: '/gallery/4.jpg', ratio: AspectRatio.ClassicLandscape},
      {src: '/gallery/9.jpg', ratio: AspectRatio.ModernPortrait},
      {src: '/gallery/2.jpg', ratio: AspectRatio.ModernLandscape},
      {src: '/gallery/4.jpg', ratio: AspectRatio.ModernLandscape},
      {src: '/gallery/4.jpg', ratio: AspectRatio.ModernPortrait},
    ]} />
    </div>
  );
}
