"use client"; 

import React, { useState } from 'react';
import Image from 'next/image';
import { AspectRatio } from '../types/aspect-ratio';

interface GalleryProps {
    images: [ImageData, ImageData, ImageData, ImageData, ImageData, ImageData, ImageData, ImageData, ImageData, ImageData, ImageData, ImageData, ImageData, ImageData, ImageData, ImageData, ImageData, ImageData, ImageData, ImageData];
}

interface ImageData {
    src: string;
    ratio: AspectRatio;
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    
    const maxImagesPerScroll = images.length / 2;
    const [selectedImage, setSelectedImage] = useState<ImageData>(images[0]);
    const [hoveredImage, setHoveredImage] = useState<ImageData | null>(null);

    const picSelectorWidth = "5vw";
    const picSelectorMaxHeight = "40px";

return (
    <>
        <div className="hidden lg:grid grid-cols-[auto,1fr] grid-rows-[auto,1fr] w-auto h-auto my-4 justify-center ">

            <div className={`flex flex-col w-[${picSelectorWidth}] mr-5 justify-between items-center`}>

                {images.map((img, index) => {
                    const marginClass = index == 0 ? 'mb-1': index == images.length-1 ? 'mt-1' : 'my-1';
                    if(index >= maxImagesPerScroll) return;
                    return (
                        <div 
                            key={index} 
                            className={`relative w-[${picSelectorWidth}] aspect-[${AspectRatio.ClassicLandscape}] min-h-[${picSelectorMaxHeight}]${marginClass}`}  
                            onMouseEnter={() => setHoveredImage(img)}
                            onMouseLeave={() => setHoveredImage(null)}
                            onMouseDownCapture={() => setSelectedImage(img)}
                        >
                            <Image 
                                src={img.src} 
                                fill            
                                sizes="auto"                 
                                alt={img.src} 
                                className="object-cover" 
                            />
                        </div>
                    )
                })}
            
            </div>

            <div className={`flex relative w-full col-span-1 aspect-[${AspectRatio.ClassicLandscape}]`}>
                <Image 
                    src={hoveredImage ? hoveredImage.src : selectedImage.src} 
                    fill 
                    sizes="auto" 
                    alt="1" 
                    className="object-cover" 
                />
            </div>

            <div className='col-span-2 flex justify-between mt-5'>
                {images.map((img, index) => {
                    const marginClass = index == maxImagesPerScroll ? 'mr-1': index == images.length - 1 ? 'ml-1' : 'mx-1';

                    if(index < maxImagesPerScroll) return;
                    return (
                        <div key={index} className={`relative w-[${picSelectorWidth}] aspect-[${AspectRatio.ClassicLandscape}] min-h-[${picSelectorMaxHeight}] ${marginClass}`}	 
                            onMouseEnter={() => setHoveredImage(img)}
                            onMouseLeave={() => setHoveredImage(null)}
                            onMouseDownCapture={() => setSelectedImage(img)}
                        > 
                            <Image 
                                src={img.src} 
                                fill 
                                sizes="auto" 
                                alt={img.src}  
                                className="object-cover" 
                            />
                        </div>
                    )
                })}
            </div>

        </div>

        <div className="lg:hidden grid grid-cols-2 grid-auto-rows-[auto] m-2 gap-1">

            <div className="flex flex-col gap-1">
                {images.map((img, index) => {
                    if(index >= maxImagesPerScroll) return;
                    const aspectClass = `aspect-[${img.ratio}]`; 

                    return (
                        <div key={index} className={`relative xs:w-[45vw] w-[48vw] ${aspectClass}`}>
                            <Image
                            src={img.src}
                            alt={`mobile ${index}`}
                            sizes="auto"
                            fill
                            className="object-cover" 
                            />
                        </div>
                    );
                })}
            </div>
 
            <div className="flex flex-col gap-1">
                {images.map((img, index) => {
                    if(index < maxImagesPerScroll) return;
                    const aspectClass = `aspect-[${img.ratio}]`; 

                    return (
                        <div key={index} className={`relative xs:w-[45vw] w-[48vw] ${aspectClass}`}>
                            <Image
                                src={img.src}
                                alt={`mobile ${index}`}
                                sizes="auto"
                                fill
                                className="object-cover" 
                            />
                        </div>
                    );
                })}
            </div>
            
        </div>
    </>
)
}

export default Gallery;

/*

*/