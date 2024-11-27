import clsx from "@/utils/clsx.ts";
import React from "react";

interface TextDescritionProps {
  text: string;
}

const TextDescrition: React.FC<TextDescritionProps> = ({ text }) => {
  return <p className={clsx("text-sm")}>{text}</p>;
};

export default TextDescrition;
