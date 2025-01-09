import clsx from "@/utils/clsx.ts";
import React from "react";

interface TextDescritionProps {
  text: string;
  className?: string;
}

const TextDescrition: React.FC<TextDescritionProps> = ({ text, className }) => {
  return <p className={clsx("text-sm", className || null)}>{text}</p>;
};

export default TextDescrition;
