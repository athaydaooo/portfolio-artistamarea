import TextDescrition from "@/components/atoms/text-description/text-description.tsx";
import TextTitle from "@/components/atoms/text-title/text-title.tsx";
import clsx from "@/utils/clsx.ts";
import React from "react";

interface TitleWithDescriptionProps {
  title: string;
  description: string;
  flexAlignment?: string;
}

const TitleWithDescription: React.FC<TitleWithDescriptionProps> = ({
  title,
  description,
  flexAlignment,
}) => {
  return (
    <div className={clsx("flex flex-col", flexAlignment || null)}>
      <TextTitle text={title} />
      <TextDescrition text={description} />
    </div>
  );
};

export default TitleWithDescription;
