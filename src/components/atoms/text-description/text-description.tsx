import clsx from "@/utils/clsx.ts";
import React from "react";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";

interface TextDescritionProps {
  text: TinaMarkdownContent;
  className?: string;
}

const TextDescrition: React.FC<TextDescritionProps> = ({ text, className }) => {
  return (
    <div className={clsx("tina-markdown", "text-sm", className || null)}>
      <TinaMarkdown content={text} />
    </div>
  );
};

export default TextDescrition;
