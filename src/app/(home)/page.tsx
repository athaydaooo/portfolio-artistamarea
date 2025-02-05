import { client } from "../../../tina/__generated__/client.ts";
import HomePageBuilder from "./builder.tsx";

export default async function AboutPage() {
  const homeData = await client.queries.home({
    relativePath: "index.md",
  });

  return (
    <>
      <div className="flex flex-col items-center">
        <HomePageBuilder {...homeData} />
      </div>
    </>
  );
}
