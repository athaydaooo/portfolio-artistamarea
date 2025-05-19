import { client } from "../../../tina/__generated__/client.ts";
import SkasuCristoEOxalaBuilder from "./builder.tsx";

export default async function SkasuCristoEOxala() {
  const skasuCristoEOxalaData = await client.queries.skasucristoeoxala({
    relativePath: "index.md",
  });

  return (
    <>
      <SkasuCristoEOxalaBuilder {...skasuCristoEOxalaData} />
    </>
  );
}
