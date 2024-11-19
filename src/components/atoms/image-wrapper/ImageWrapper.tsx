"use client";

import AspectRatio from "@/types/aspect-ratio.ts";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface ImageWrapperProps {
  key: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  width: string;
  className?: string;
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseDownCapture?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({
  src,
  alt,
  aspectRatio,
  width,
  className,
  onMouseDownCapture,
  onMouseEnter,
  onMouseLeave,
}) => {
  const aspectClass = `aspect-[${aspectRatio}]`;
  const widthClass = `w-[${width}]`;

  return (
    <div
      className={clsx("relative", className, widthClass, aspectClass)}
      onMouseDownCapture={onMouseDownCapture}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image className="object-cover" src={src} alt={alt} fill sizes={width} />
    </div>
  );
};

export default ImageWrapper;
