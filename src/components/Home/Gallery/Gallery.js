"use client"

import Image from 'next/image';
import React from 'react';
import art from "../../../assets/images/random/flower.jpg"


const Gallery = () => {
    const gallerys = [
        {
            img: art,
        },
        {
            img: art,
        },
        {
            img: art,
        },
        {
            img: art,
        }
    ]

    return (
        <div className='bg-[#e3ebf1]'>
            <div className='md:mx-[120px] py-20'>
                <div>
                    <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-2'>
                        {
                            gallerys.map((gallery) => (
                                <div className='rounded-md'>
                                    <Image
                                        src={gallery.img}
                                        width={1000}
                                        height={1000}
                                        alt='product img'
                                        className='rounded-md hover:scale-105 duration-500 cursor-pointer'
                                    /> <br />
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;