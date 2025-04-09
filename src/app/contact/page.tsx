import { client } from "../../../tina/__generated__/client.ts";
import ContactBuilder from "./builder.tsx";

export default async function Contact() {
  const contactData = await client.queries.contact({
    relativePath: "index.md",
  });

  return (
    <>
      <ContactBuilder {...contactData} />
    </>
  );
}
