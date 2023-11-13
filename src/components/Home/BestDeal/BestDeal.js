import Image from 'next/image';
import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import watch from "../../../assets/images/products/watch-9.png"


const BestDeal = () => {
    return (
        <div className='bg-[#e3ebf1]'>
            <div className='mx-[150px]'>
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
                    <div>
                        <Image
                            src={watch}
                            width={500}
                            height={500}
                            alt='product img'
                        />
                        <hr />

                        <p>Smart Watch</p>
                        <h3>Sony lady fitness watch.</h3>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestDeal;