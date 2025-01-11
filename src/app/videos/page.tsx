/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

import { client } from "../../../tina/__generated__/client.ts";
import VideosPageBuilder from "./builder.tsx";

export default async function Videos() {
  const videoData = await client.queries.videos({
    relativePath: "index.md",
  });

  return (
    <>
      <VideosPageBuilder {...videoData} />
    </>
  );
}
