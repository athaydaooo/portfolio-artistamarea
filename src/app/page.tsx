import Gallery from "./components/galery";
import TopMenu from "./components/top-menu";

export default function Home() {
  return (
    <div className="flex flex-col w-[100vw] h-screen items-center">
      <TopMenu />
      <Gallery imagesUrl={[
        '/gallery/1.jpg',
        '/gallery/2.jpg',
        '/gallery/3.jpg',
        '/gallery/4.jpg',
        '/gallery/5.jpg',
        '/gallery/6.jpg',
        '/gallery/7.jpg',
        '/gallery/8.jpg',
        '/gallery/9.jpg',
        '/gallery/10.jpg',
        '/gallery/11.jpg',
        '/gallery/12.jpg',
        '/gallery/1.jpg',
        '/gallery/2.jpg',
        '/gallery/3.jpg',
        '/gallery/4.jpg',
        '/gallery/4.jpg',
        '/gallery/4.jpg',
        '/gallery/4.jpg',
        '/gallery/4.jpg',
    ]} />
    </div>
  );
}
