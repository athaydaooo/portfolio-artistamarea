import clsx from "@/utils/clsx.ts";
import React from "react";

interface TitleProps {
  text: string;
  className?: string;
}
const TextTitle: React.FC<TitleProps> = ({ text, className }) => {
  return <h1 className={clsx("text-3xl", className || null)}>{text}</h1>;
};

export default TextTitle;
