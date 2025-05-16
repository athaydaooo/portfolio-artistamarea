import { client } from "../../../tina/__generated__/client.ts";
import ContactBuilder from "../contact/builder.tsx";
import AboutPageBuilder from "./builder.tsx";

export default async function AboutPage() {
  const aboutData = await client.queries.about({
    relativePath: "index.md",
  });

  const contactData = await client.queries.contact({
    relativePath: "index.md",
  });

  return (
    <>
      <AboutPageBuilder {...aboutData} />
      <ContactBuilder {...contactData} />
    </>
  );
}
