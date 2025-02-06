"use client";

import React, { useState } from "react";
import AspectRatio from "@/types/aspect-ratio.ts";
import ImageWrapper from "@/components/atoms/image-wrapper/ImageWrapper.tsx";
import clsx from "@/utils/clsx.ts";

export interface ImageData {
  src: string;
  alt: string;
  ratio: AspectRatio;
}

interface GallerySectionProps {
  images: ImageData[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ images }) => {
  const maxImagesPerScroll = Math.floor(images.length / 2);
  const [selectedImage, setSelectedImage] = useState<ImageData>(images[0]);
  const [hoveredImage, setHoveredImage] = useState<ImageData | null>(null);
  const [capturedImage, setCapturedImage] = useState<ImageData | null>(null);

  const [verticalItens, horizontalItens] = [
    images.slice(0, maxImagesPerScroll),
    images.slice(maxImagesPerScroll),
  ];

  const selectorWidth = "10vh";

  const selectorWidthClass = `w-[${selectorWidth}]`;
  const selectorMaxWidthClass = `max-w-[120px]`;
  const selectorMinHeightClass = `man-h-[40px]`;

  const selectorAspectRatio = AspectRatio.ClassicLandscape;

  return (
    <section className="relative flex flex-col items-center justify-center py-[10vh] lg:h-full">
      {/* desktop component */}
      <div className="hidden lg:grid grid-cols-auto grid-rows-auto">
        {/* vertical selector itens */}
        <div
          className={`flex flex-col justify-between items-center mr-5 gap-1`}
        >
          {verticalItens.map((img, index) => {
            return (
              <ImageWrapper
                key={`desktop=gallery-image-${index}`}
                src={img.src}
                alt={img.alt}
                aspectRatio={selectorAspectRatio}
                sizes={selectorWidth}
                className={clsx(
                  selectorMinHeightClass,
                  selectorMaxWidthClass,
                  selectorWidthClass,
                  "cursor-pointer",
                )}
                onMouseEnter={() => setHoveredImage(img)}
                onMouseLeave={() => setHoveredImage(null)}
                onMouseDownCapture={() => setSelectedImage(img)}
              />
            );
          })}
        </div>

        {/* selected image */}
        <ImageWrapper
          key="gallery-selected-image"
          alt={selectedImage.alt}
          aspectRatio={selectorAspectRatio}
          src={hoveredImage ? hoveredImage.src : selectedImage.src}
          sizes="auto"
          className={clsx(
            "flex",
            "w-full",
            "col-span-1",
            "cursor-pointer",
            `aspect-[${AspectRatio.ModernLandscape}]`,
          )}
          onMouseDownCapture={() => setCapturedImage(selectedImage)}
        />

        {/* horizontal selector itens */}
        <div className="col-span-2 flex justify-between mt-5 gap-1">
          {horizontalItens.map((img, index) => {
            return (
              <ImageWrapper
                key={`gallery-image-${index}`}
                src={img.src}
                alt={img.alt}
                aspectRatio={selectorAspectRatio}
                sizes={selectorWidth}
                className={clsx(
                  selectorMinHeightClass,
                  selectorMaxWidthClass,
                  selectorWidthClass,
                  "cursor-pointer",
                )}
                onMouseEnter={() => setHoveredImage(img)}
                onMouseLeave={() => setHoveredImage(null)}
                onMouseDownCapture={() => setSelectedImage(img)}
              />
            );
          })}
        </div>
      </div>

      {/* mobile component */}
      <div className="lg:hidden grid grid-cols-2 gap-1 my-1">
        {images.map((img, index) => (
          <ImageWrapper
            key={`mobile-gallery-image-${index}`}
            src={img.src}
            alt={img.alt}
            aspectRatio={img.ratio}
            sizes="(max-width: 325px) 45vw, 48vw"
            className="xs:w-[45vw] w-[48vw] gap-1 min-h-full"
            onMouseDownCapture={() => setCapturedImage(img)}
          />
        ))}
      </div>

      {/* full image viewer */}
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
            alt={capturedImage.alt}
            aspectRatio={capturedImage.ratio}
            sizes="auto"
            className="w-[80vw] h-auto lg:w-auto lg:h-[80vh]"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
