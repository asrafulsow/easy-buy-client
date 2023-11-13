import React from 'react';
import Image from 'next/image';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import phone from '../../../assets/images/Banner/mobile-banner.png'
import headphone from '../../../assets/images/Banner/headphone-banner.png'

const Adds = () => {
    return (
        <div className='flex justify-center items-center lg:mx-[120px]'>
            <section className='grid lg:grid-cols-2 gap-4 '>

                {/* PHONE BANNER */}
                <div className='bg-purple-200 rounded-md lg:flex justify-evenly items-center h-full px-10'>
                    <div className='space-y-4 text-center lg:text-start mt-2 md:mt-0'>
                        <p className='text-slate-600'>
                            Sale 20% off all store
                        </p>

                        <h2 className='lg:text-3xl text-2xl font-bold hover:text-blue-800 cursor-pointer duration-500'>
                            Smartphone <br />
                            BLU G91 Pro 2022
                        </h2>

                        <div className='flex justify-start items-center space-x-2 cursor-pointer'>
                            <p className='text-black hover:text-blue-800 font-semibold'>Shop now</p>
                            <HiOutlineArrowNarrowRight className='text-xl hover:text-blue-800 duration-500 hover:animate-pulse' />
                        </div>
                    </div>

                    <Image
                        src={phone}
                        width={250}
                        height={250}
                        alt="Picture of the author"
                        className='hover:scale-110 duration-500'
                    />
                </div>


                {/* HEADPHONE BANNER */}
                <div className='bg-cyan-200 rounded-md px-10 lg:flex justify-around items-center h-full'>
                    <div className='space-y-4 lg:text-start mt-2 md:mt-0'>
                        <h2 className='text-2xl font-bold hover:text-blue-800 cursor-pointer duration-500'>
                            HyperX Cloud II <br />
                            Wireless
                        </h2>

                        <p className='text-slate-600'>
                            Sale 20% off all store
                        </p>

                        <div className='flex justify-start items-center space-x-2 cursor-pointer'>
                            <p className='text-black hover:text-blue-800 font-semibold'>Shop now</p>
                            <HiOutlineArrowNarrowRight className='text-xl hover:text-blue-800 duration-500 hover:animate-pulse' />
                        </div>
                    </div>

                    <Image
                        src={headphone}
                        width={200}
                        height={200}
                        alt="Picture of the author"
                        className='hover:scale-110 duration-500'
                    />
                </div>

            </section>
            <div></div>
        </div>
    );
};

export default Adds;