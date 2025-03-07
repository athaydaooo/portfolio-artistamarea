import { client } from "../../../tina/__generated__/client.ts";
import ModelBuilder from "./builder.tsx";

export default async function OUltimoFrame() {
  const modelData = await client.queries.oultimoframe({
    relativePath: "index.md",
  });

  return (
    <>
      <ModelBuilder {...modelData} />
    </>
  );
}
