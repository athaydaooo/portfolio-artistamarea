import About from "@/components/sections/about/About.tsx";
import Footer from "@/components/sections/footer/Footer.tsx";
import TopMenu from "@/components/organisms/top-menu/TopMenu.tsx";

export default function SobreMim() {
  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <TopMenu
          sections={[
            { name: "galeria", slug: "/" },
            { name: "videos", slug: "/videos" },
            { name: "sobre mim", slug: "/sobre-mim" },
          ]}
        />

        <About />
        <Footer className="block lg:hidden" />
      </div>
      <Footer className="hidden lg:block" />
    </>
  );
}
