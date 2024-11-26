import clsx from "@/utils/clsx.ts";
import { Noto_Serif as NotoSerif } from "next/font/google";
import React from "react";

interface TitleProps {
  text: string;
}

const notoSerif = NotoSerif({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

const TextTitle: React.FC<TitleProps> = ({ text }) => {
  return <h1 className={clsx("text-3xl", notoSerif.className)}>{text}</h1>;
};

export default TextTitle;
