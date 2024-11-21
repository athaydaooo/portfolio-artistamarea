"use client";

import React, { useState } from "react";
import Image from "next/image";
import AspectRatio from "@/types/aspect-ratio.ts";
import aspectToRatio from "@/utils/aspectToRatio.ts";
import ImageWrapper from "@/components/atoms/image-wrapper/ImageWrapper";
import clsx from "@/utils/clsx";

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
      {/* desktop component */}
      <div className="hidden lg:grid grid-cols-[auto,1fr] grid-rows-[auto,1fr] w-auto h-auto my-4 justify-center ">
        {/* vertical selector itens */}
        <div
          className={`flex flex-col w-[${selectorWidth}] mr-5 gap-1 justify-between items-center`}
        >
          {images.map((img, index) => {
            if (index >= maxImagesPerScroll) return;
            const minHeigthClass = `min-h-[${selectorMinHeight}]`;
            const widthClass = `w-[${selectorWidth}]`;

            return (
              <ImageWrapper
                key={`desktop-${index}`}
                src={img.src}
                alt={`${index}`}
                aspectRatio={selectorAspectRatio}
                sizes={selectorWidth}
                className={clsx(minHeigthClass, widthClass)}
                onMouseEnter={() => setHoveredImage(img)}
                onMouseLeave={() => setHoveredImage(null)}
                onMouseDownCapture={() => setSelectedImage(img)}
              />
            );
          })}
        </div>

        {/* selected image */}
        <ImageWrapper
          key="desktop-selected-image"
          alt="Selected Image"
          aspectRatio={selectorAspectRatio}
          src={hoveredImage ? hoveredImage.src : selectedImage.src}
          sizes="auto"
          className={`flex w-full col-span-1 aspect-[${selectorAspectRatio}]`}
        />

        {/* horizontal selector itens */}
        <div className="col-span-2 flex justify-between mt-5 gap-1">
          {images.map((img, index) => {
            if (index < maxImagesPerScroll) return;

            const minHeigthClass = `min-h-[${selectorMinHeight}]`;
            const widthClass = `w-[${selectorWidth}]`;

            return (
              <ImageWrapper
                key={`desktop-${index}`}
                src={img.src}
                alt={`${index}`}
                aspectRatio={selectorAspectRatio}
                sizes={selectorWidth}
                className={clsx(minHeigthClass, widthClass)}
                onMouseEnter={() => setHoveredImage(img)}
                onMouseLeave={() => setHoveredImage(null)}
                onMouseDownCapture={() => setSelectedImage(img)}
              />
            );
          })}
        </div>
      </div>

      {/* mobile component */}
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
