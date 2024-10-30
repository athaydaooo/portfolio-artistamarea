"use client"; 

import React, { useState } from 'react';
import Image from 'next/image';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

return (
    <div>
        <div>
            <div className="flex flex-col md:flex-row items-start">
                {images.map((img, index) => (
                    <Image
                        key={index}
                        src={img}
                        alt={`Thumbnail ${index}`}
                        width={96}
                        height={96}
                        className={`cursor-pointer w-24 h-24 object-cover ${
                            img === selectedImage ? "border-2 border-black" : ""
                        }`}
                        onClick={() => setSelectedImage(img)}
                    />
                ))}
            </div>
            <Image
                src={selectedImage}
                alt="Selected"
                width={800}
                height={600}
                className="object-cover w-full h-96 md:h-auto"
            />
        </div>

        <div className="md:hidden flex overflow-x-scroll gap-2 p-2">
            {images.map((img, index) => (
                <Image
                    key={index}
                    src={img}
                    width={96}
                    height={96}
                    alt={`Thumbnail ${index}`}
                    className={`cursor-pointer w-24 h-24 object-cover ${
                        img === selectedImage ? "border-2 border-black" : ""
                    }`}
                    onClick={() => setSelectedImage(img)}
                />
            ))}
        </div>
    </div>
);
};

export default Gallery;