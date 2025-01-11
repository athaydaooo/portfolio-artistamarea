/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

import { client } from "../../../tina/__generated__/client.ts";
import OUltimoFramePageBuilder from "./builder.tsx";

export default async function OUltimoFrame() {
  const oUltimoFrameData = await client.queries.oultimoframe({
    relativePath: "index.md",
  });

  return (
    <>
      <OUltimoFramePageBuilder {...oUltimoFrameData} />
    </>
  );
}
