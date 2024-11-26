import clsx from "@/utils/clsx.ts";
import { Noto_Serif_Gujarati as NotoSerifGujarati } from "next/font/google";
import React from "react";

interface TextDescritionProps {
  text: string;
}

const notoSerifGujarati = NotoSerifGujarati({
  weight: ["300"],
  subsets: ["gujarati"],
  display: "swap",
});

const TextDescrition: React.FC<TextDescritionProps> = ({ text }) => {
  return <p className={clsx("text-sm", notoSerifGujarati.className)}>{text}</p>;
};

export default TextDescrition;
