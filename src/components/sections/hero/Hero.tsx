import clsx from "@/utils/clsx.ts";
import Image from "next/image";
import React from "react";

interface HeroProps {
  url: string;
  alt: string;
  key: string;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ url, alt, key, className }) => {
  return (
    <div
      className={clsx("flex flex-col items-center h-screen", className || null)}
    >
      <Image
        className={"object-cover"}
        src={url}
        alt={alt}
        key={key}
        fill
        sizes="auto"
      />
    </div>
  );
};

export default Hero;
