import AboutSection from "@/components/sections/about/index.tsx";
import { client } from "../../../tina/__generated__/client.ts";

export default async function AboutPage() {
  const aboutData = await client.queries.about({
    relativePath: "index.md",
  });

  return (
    <>
      <div className="flex flex-col items-center lg:h-screen">
        <AboutSection {...aboutData} />
      </div>
    </>
  );
}
