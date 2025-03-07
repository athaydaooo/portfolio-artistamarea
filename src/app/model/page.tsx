import { client } from "../../../tina/__generated__/client.ts";
import ModelBuilder from "./builder.tsx";

export default async function Model() {
  const modelData = await client.queries.model({
    relativePath: "index.md",
  });

  return (
    <>
      <ModelBuilder {...modelData} />
    </>
  );
}
