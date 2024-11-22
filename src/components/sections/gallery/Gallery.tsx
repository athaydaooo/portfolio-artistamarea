"use client";

import React, { useState } from "react";
import AspectRatio from "@/types/aspect-ratio.ts";
import ImageWrapper from "@/components/atoms/image-wrapper/ImageWrapper.tsx";
import clsx from "@/utils/clsx.ts";

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
  const [capturedImage, setCapturedImage] = useState<ImageData | null>(null);

  const [verticalItens, horizontalItens] = [
    images.slice(0, maxImagesPerScroll),
    images.slice(maxImagesPerScroll),
  ];

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
          {verticalItens.map((img, index) => {
            const minHeigthClass = `min-h-[${selectorMinHeight}]`;
            const widthClass = `w-[${selectorWidth}]`;

            return (
              <ImageWrapper
                key={`desktop-${index}`}
                src={img.src}
                alt={`${index}`}
                aspectRatio={selectorAspectRatio}
                sizes={selectorWidth}
                className={clsx(minHeigthClass, widthClass, "cursor-pointer")}
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
          className={clsx(
            "flex",
            "w-full",
            "col-span-1",
            "cursor-pointer",
            `aspect-[${AspectRatio.ModernLandscape}]`
          )}
          onMouseDownCapture={() => setCapturedImage(selectedImage)}
        />

        {/* horizontal selector itens */}
        <div className="col-span-2 flex justify-between mt-5 gap-1">
          {horizontalItens.map((img, index) => {
            const minHeigthClass = `min-h-[${selectorMinHeight}]`;
            const widthClass = `w-[${selectorWidth}]`;

            return (
              <ImageWrapper
                key={`desktop-${index}`}
                src={img.src}
                alt={`${index}`}
                aspectRatio={selectorAspectRatio}
                sizes={selectorWidth}
                className={clsx(minHeigthClass, widthClass, "cursor-pointer")}
                onMouseEnter={() => setHoveredImage(img)}
                onMouseLeave={() => setHoveredImage(null)}
                onMouseDownCapture={() => setSelectedImage(img)}
              />
            );
          })}
        </div>
      </div>

      {/* mobile component */}
      <div className="lg:hidden grid grid-cols-2 gap-1">
        {images.map((img, index) => (
          <ImageWrapper
            key={`mobile-${index}`}
            src={img.src}
            alt={`mobile ${index}`}
            aspectRatio={img.ratio}
            sizes="(max-width: 325px) 45vw, 48vw"
            className="xs:w-[45vw] w-[48vw] gap-1 min-h-full"
            onMouseDownCapture={() => setCapturedImage(img)}
          />
        ))}
      </div>
      {capturedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-10">
          <button
            className="absolute top-2 right-2 text-2xl text-gray-400"
            onMouseDownCapture={() => setCapturedImage(null)}
          >
            <span>X</span>
          </button>

          <ImageWrapper
            key="captured-image"
            src={capturedImage.src}
            alt="captured Image"
            aspectRatio={capturedImage.ratio}
            sizes="auto"
            className="w-[80vw] h-auto lg:w-auto lg:h-[80vh]"
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
