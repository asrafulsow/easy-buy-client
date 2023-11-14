"use client"

import Image from 'next/image';
import React from 'react';
import { GrTag } from "react-icons/gr";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import art from "../../../assets/images/random/pic.jpg"

const News = () => {
    const articles = [
        {
            img: art,
            title: "The Modern Art Clay Ceramics",
            label: "news",
            des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, ",

        },
        {
            img: art,
            title: "The Modern Art Clay Ceramics",
            label: "news",
            des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, ",

        },
        {
            img: art,
            title: "The Modern Art Clay Ceramics",
            label: "news",
            des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, ",

        }
    ]
    return (
        <div className='bg-[#e3ebf1]'>
            <div className='md:mx-[120px] py-20'>
                {/* TOP TITLE */}
                <div className='flex justify-between items-center py-8'>
                    <h1 className='text-3xl font-bold'>
                        Latest news & articles
                    </h1>

                    <div className='bg-blue-500 px-4 py-2 text-white font-medium rounded-md flex justify-start items-center space-x-2 hover:bg-black duration-500 cursor-pointer'>
                        <button>View All Blog  </button>
                        <HiOutlineArrowNarrowRight className='text-xl' />
                    </div>
                </div>

                <div>
                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            articles.map((article) => (
                                <div className='bg-white rounded-md p-4'>
                                    <Image
                                        src={article.img}
                                        width={1000}
                                        height={1000}
                                        alt='product img'
                                        className='rounded-md hover:scale-105 duration-500 cursor-pointer '
                                    /> <br />
                                    <div className='space-y-2'>

                                        <h1 className='text-lg font-semibold hover:text-blue-500 duration-300 cursor-pointer'>{article.title}</h1>

                                        <div className='flex justify-start space-x-2 items-center'>

                                            <GrTag />

                                            <p className='text-slate-700  font-semibold hover:text-blue-500 duration-300 cursor-pointer'>{article.label}</p>


                                        </div>

                                        <p className='text-slate-500 hover:text-blue-500 duration-300 cursor-pointer'>{article.des}</p>

                                        <button className='bg-white-100 py-1 px-4 border rounded-md hover:bg-blue-600 duration-500 hover:text-white'>
                                            Read more
                                        </button>

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

export default News;