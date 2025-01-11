"use client";

import AspectRatio from "@/types/aspect-ratio.ts";
import clsx from "@/utils/clsx.ts";
import Image from "next/image";
import React from "react";

interface ImageWrapperProps {
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  sizes: string;
  className?: string;
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseDownCapture?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({
  src,
  alt,
  aspectRatio,
  sizes,
  className,
  onMouseDownCapture,
  onMouseEnter,
  onMouseLeave,
}) => {
  const aspectClass = `aspect-[${aspectRatio}]`;
  const classNames = clsx("relative", className || null, aspectClass);

  return (
    <div
      className={classNames}
      onMouseDownCapture={onMouseDownCapture}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image className="object-cover" src={src} alt={alt} fill sizes={sizes} />
    </div>
  );
};

export default ImageWrapper;
