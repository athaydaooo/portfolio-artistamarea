"use client";

import React, { useState } from "react";
import Image from "next/image";
import AspectRatio from "@/types/aspect-ratio.ts";
import aspectToRatio from "@/utils/aspectToRatio.ts";
import ImageWrapper from "@/components/atoms/image-wrapper/ImageWrapper";

interface ImageData {
  src: string;
  ratio: AspectRatio;
}

interface GalleryProps {
  images: [
    ImageData,
    ImageData,
    ImageData,
    ImageData,
    ImageData,
    ImageData,
    ImageData,
    ImageData,
    ImageData,
    ImageData,
    ImageData,
    ImageData,
    ImageData,
    ImageData,
    ImageData,
    ImageData,
    ImageData,
    ImageData,
    ImageData,
    ImageData,
  ];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const maxImagesPerScroll = images.length / 2;
  const [selectedImage, setSelectedImage] = useState<ImageData>(images[0]);
  const [hoveredImage, setHoveredImage] = useState<ImageData | null>(null);

  const selectorWidth = "5vw";
  const selectorMinHeight = "40px";
  const selectorAspectRatio = AspectRatio.ClassicLandscape;

  return (
    <>
      <div className="hidden lg:grid grid-cols-[auto,1fr] grid-rows-[auto,1fr] w-auto h-auto my-4 justify-center ">
        <div
          className={`flex flex-col w-[${selectorWidth}] mr-5 gap-1 justify-between items-center`}
        >
          {images.map((img, index) => {
            if (index >= maxImagesPerScroll) return;
            const minHeigthClass = `min-h-[${selectorMinHeight}]`;

            return (
              <ImageWrapper
                key={`desktop-${index}`}
                src={img.src}
                alt={`${index}`}
                aspectRatio={AspectRatio.ClassicLandscape}
                width={selectorWidth}
                className={minHeigthClass}
                onMouseEnter={() => setHoveredImage(img)}
                onMouseLeave={() => setHoveredImage(null)}
                onMouseDownCapture={() => setSelectedImage(img)}
              />
            );
          })}
        </div>

        <div
          className={`flex relative w-full col-span-1 aspect-[${AspectRatio.ClassicLandscape}]`}
        >
          <Image
            src={hoveredImage ? hoveredImage.src : selectedImage.src}
            fill
            sizes="auto"
            alt="1"
            className="object-cover"
          />
        </div>

        <div className="col-span-2 flex justify-between mt-5 gap-1">
          {images.map((img, index) => {
            if (index < maxImagesPerScroll) return;

            const minHeigthClass = `min-h-[${selectorMinHeight}]`;

            return (
              <ImageWrapper
                key={`desktop-${index}`}
                src={img.src}
                alt={`${index}`}
                aspectRatio={AspectRatio.ClassicLandscape}
                width={selectorWidth}
                className={minHeigthClass}
                onMouseEnter={() => setHoveredImage(img)}
                onMouseLeave={() => setHoveredImage(null)}
                onMouseDownCapture={() => setSelectedImage(img)}
              />
            );
          })}
        </div>
      </div>

      <div className="lg:hidden grid grid-cols-2 grid-auto-rows-[auto] m-2 gap-1">
        <div className="flex flex-col gap-1">
          {images.map((img, index) => {
            if (index >= maxImagesPerScroll) return;
            const aspectClass = `aspect-[${img.ratio}]`;
            const numRatio = aspectToRatio(img.ratio);
            return (
              <Image
                key={index}
                src={img.src}
                alt={`mobile ${index}`}
                sizes="(max-width: 325px) 45vw, 48vw"
                width={500}
                height={325 / numRatio}
                className={`relative xs:w-[45vw] w-[48vw] ${aspectClass} object-cover`}
              />
            );
          })}
        </div>

        <div className="flex flex-col gap-1">
          {images.map((img, index) => {
            if (index < maxImagesPerScroll) return;
            const aspectClass = `aspect-[${img.ratio}]`;
            const [numerator, denominator] = img.ratio.split("/").map(Number);
            const numRatio = numerator / denominator;

            return (
              <Image
                key={index}
                src={img.src}
                alt={`mobile ${index}`}
                sizes="(max-width: 325px) 45vw, 48vw"
                width={500}
                height={325 / numRatio}
                className={`relative xs:w-[45vw] w-[48vw] ${aspectClass}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Gallery;
