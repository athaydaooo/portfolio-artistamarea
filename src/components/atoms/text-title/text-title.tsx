import clsx from "@/utils/clsx.ts";
import React from "react";

interface TitleProps {
  text: string;
}
const TextTitle: React.FC<TitleProps> = ({ text }) => {
  return <h1 className={clsx("text-3xl")}>{text}</h1>;
};

export default TextTitle;
