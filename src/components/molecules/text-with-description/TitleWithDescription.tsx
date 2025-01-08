import TextDescrition from "@/components/atoms/text-description/text-description.tsx";
import TextTitle from "@/components/atoms/text-title/text-title.tsx";
import MediaDetails from "@/types/media-details.ts";
import clsx from "@/utils/clsx.ts";
import React from "react";

interface TitleWithDescriptionProps {
  details: MediaDetails;
  flexAlignment?: string;
  className?: string;
}

const TitleWithDescription: React.FC<TitleWithDescriptionProps> = ({
  details,
  flexAlignment,
  className,
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col",
        flexAlignment || null,
        className || null,
      )}
    >
      <TextTitle text={details.title} />
      <TextDescrition text={details.description} />
    </div>
  );
};

export default TitleWithDescription;
