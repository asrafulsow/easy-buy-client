"use client"

import Image from 'next/image';
import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import watch from "../../../assets/images/products/watch-9.png"


const BestDeal = () => {

    const products = [
        {
            img: watch,
            des: "Smart Watch",
            title: "Sony lady Fitness Watch",
            price: "$70"
        },
        {
            img: watch,
            des: "Smart Watch",
            title: "Sony lady Fitness Watch",
            price: "$70"
        },
        {
            img: watch,
            des: "Smart Watch",
            title: "Sony lady Fitness Watch",
            price: "$70"
        }
    ]

    return (
        <div className='bg-[#e3ebf1]'>
            <div className='md:mx-[120px] py-20'>
                {/* TOP TITLE */}
                <div className='flex justify-between items-center py-8'>
                    <h1 className='text-3xl font-bold'>
                        Deal of The Day
                    </h1>

                    <div className='bg-blue-500 px-4 py-2 text-white font-medium rounded-md flex justify-start items-center space-x-2 hover:bg-black duration-500 cursor-pointer'>
                        <button>View All Deals </button>
                        <HiOutlineArrowNarrowRight className='text-xl' />
                    </div>
                </div>

                <div>
                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            products.map((product) => (
                                <div className='bg-white rounded-md p-10'>
                                    <Image
                                        src={product.img}
                                        width={300}
                                        height={300}
                                        alt='product img'
                                        className='hover:scale-110 duration-300 cursor-pointer'
                                    />
                                    <hr />
                                    <div className='space-y-2'>
                                        <p className='text-slate-500 hover:text-blue-500 duration-300 cursor-pointer'>{product.des}</p>

                                        <h1 className='text-lg font-semibold hover:text-blue-500 duration-300 cursor-pointer'>{product.title}</h1>

                                        <p className='text-blue-600 font-medium'>{product.price}</p>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestDeal;