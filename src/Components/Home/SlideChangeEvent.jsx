'use client';

import { Carousel } from 'flowbite-react';

export default function SlideChangeEvent() {
  return (
    <Carousel>
      <div className="slider-1 flex h-full w-full items-center justify-center">
        <div className="bg-black w-full h-full bg-opacity-60">
          <div className="px-16 py-8 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4 h-full">
            <div className="flex justify-start items-center text-center h-full md:text-start">
              <h1 className='text-5xl text-white max-w-md font-semibold'>
                EXPERIENCE QUALITY & AFFORDABLE HEALTHCARE
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="slider-2 flex h-full w-full items-center justify-center">
        <div className="bg-black w-full h-full bg-opacity-60">
          <div className="px-16 py-8 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4 h-full">
            <div className="flex justify-center items-center h-full text-center">
              <h1 className='text-5xl text-white max-w-md font-semibold'>
                EXPERIENCE QUALITY & AFFORDABLE HEALTHCARE
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="slider-3 flex h-full w-full items-center justify-center">
        <div className="bg-black w-full h-full bg-opacity-60">
          <div className="px-16 py-8 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4 h-full">
            <div className="flex justify-end items-center text-center h-full md:text-right">
              <h1 className='text-5xl text-white max-w-md font-semibold'>
                EXPERIENCE QUALITY & AFFORDABLE HEALTHCARE
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  )
}





