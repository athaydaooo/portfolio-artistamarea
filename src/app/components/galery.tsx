"use client"; 

import React from 'react';
import Image from 'next/image';

const Gallery: React.FC = () => {
    //const [selectedImage, setSelectedImage] = useState(images[0]);
    const imgs: string[] = [
        '/gallery/1.jpg',
        '/gallery/2.jpg',
        '/gallery/3.jpg',
        '/gallery/4.jpg',
        '/gallery/5.jpg',
        '/gallery/6.jpg',
        '/gallery/7.jpg',
        '/gallery/8.jpg',
    ];

return (
    <>
        <div className="grid grid-rows-2 grid-cols-2 grid-cols-[auto,1fr] w-[15vw]">

            <div className="flex flex-col w-[5vw] justify-between mr-2" >

                {imgs.map((img, index) => {
                    const marginClass = index == 0 ? 'mb-1': index == imgs.length-1 ? 'mt-1' : 'my-1';

                    return (
                        <div key={index} className={`relative w-auto h-[6vh] ${marginClass}`} >
                            <Image src={img} layout="fill" alt={img} className="object-cover" />
                        </div>
                    )
                })}
            
            </div>

            <div className='flex relative w-[40vw] col-span-1' >
                <Image src="/gallery/1.jpg" fill alt="1" className="object-cover" />
            </div>

            <div className='col-span-2 flex justify-between items-center mt-3 h-[6vh]' >
                {imgs.map((img, index) => {
                    return (
                        <div key={index} className={`relative w-[5vw] h-[6vh]`} >
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