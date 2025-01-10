"use client";

import About from "@/components/sections/about/About.tsx";
import { useEffect, useState } from "react";
import client from "../../../tina/__generated__/client";
import { useTina } from "tinacms/dist/react";

interface SobreMimProps {
  query: string;
  variables: Record<string, any>;
  data: any;
}

export default function SobreMim() {
  const [props, setProps] = useState<SobreMimProps>({ query: "", variables: {}, data: {} });
  useEffect(() => {

    const fetchData = async () => {
      let variables = { relativePath: `` };

      const res = await client.queries.post(variables);

      setProps({
        variables: variables,
        data: res.data,
        query: res.query,
      });
    };
    fetchData();
  }, []);

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  return (
    <>
      <div className="flex flex-col items-center lg:h-screen">
        { }
        <About />
      </div>
    </>
  );
}