import { client } from "../../../tina/__generated__/client.ts";
import AboutPageBuilder from "./builder.tsx";

export default async function AboutPage() {
  const aboutData = await client.queries.about({
    relativePath: "index.md",
  });

  return (
    <>
      <div className="flex flex-col items-center lg:h-screen">
        <AboutPageBuilder {...aboutData} />
      </div>
    </>
  );
}
