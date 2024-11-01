"use client"; 

import React, { useState } from 'react';
import Image from 'next/image';

interface GalleryProps {
    imagesUrl: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string];
}

const Gallery: React.FC<GalleryProps> = ({ imagesUrl }) => {
    
    const maxImagesPerScroll = imagesUrl.length / 2;

    const [selectedImage, setSelectedImage] = useState(imagesUrl[0]);
    const [hoveredImage, setHoveredImage] = useState<string | null>(null);

return (
    <>
        <div className="grid grid-rows-2 grid-cols-2 grid-cols-[auto,1fr] grid-rows-[auto,1fr] w-[60vw] h-auto my-10">

            <div className="flex flex-col w-[5vw] justify-between mr-5 items-center" >

                {imagesUrl.map((img, index) => {
                    const marginClass = index == 0 ? 'mb-1': index == imagesUrl.length-1 ? 'mt-1' : 'my-1';
                    if(index >= maxImagesPerScroll) return;
                    return (
                        <div 
                            key={index} 
                            className={`relative w-[5vw] h-[6vh] ${marginClass}`}  
                            onMouseEnter={() => setHoveredImage(img)}
                            onMouseLeave={() => setHoveredImage(null)}
                            onMouseDownCapture={() => setSelectedImage(img)}
                        >
                            <Image src={img} layout="fill" alt={img} className="object-cover" />
                        </div>
                    )
                })}
            
            </div>

            <div className='flex relative w-auto col-span-1' >
                <Image src={hoveredImage ? hoveredImage : selectedImage} fill alt="1" className="object-cover" />
            </div>

            <div className='col-span-2 flex justify-between mt-5 h-[6vh]' >
                {imagesUrl.map((img, index) => {
                    const marginClass = index == maxImagesPerScroll ? 'mr-1': index == imagesUrl.length-1 ? 'ml-1' : 'mx-1';

                    if(index < maxImagesPerScroll) return;
                    return (
                        <div key={index} className={`relative w-[5vw] h-[6vh] ${marginClass}`}	 
                            onMouseEnter={() => setHoveredImage(img)}
                            onMouseLeave={() => setHoveredImage(null)}
                            onMouseDownCapture={() => setSelectedImage(img)}
                        >
                            <Image src={img} layout="fill" alt={img}  className="object-cover" />
                        </div>
                    )
                })}
            </div>

        </div>
    </>
)
}

export default Gallery;