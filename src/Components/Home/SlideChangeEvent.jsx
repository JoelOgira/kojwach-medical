'use client';

import { Carousel } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function SlideChangeEvent() {
  return (
    <Carousel>
      <div className="slider-1 flex h-full w-full items-center justify-center">
        <div className="bg-white w-full h-full bg-opacity-60">
          <div className="px-16 py-8 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4 h-full">
            <div className="flex justify-center items-center text-center h-full md:justify-start md:text-left">
              <div className="flex flex-col space-y-6">
                <h1 className='text-3xl text-black max-w-xl font-semibold font-mono md:text-5xl'>
                  Experience Quality and Affordable Healthcare
                </h1>
                <p className="hidden max-w-xl font-semibold md:block">
                  We provide access to comprehensive and integrated quality health care to improve individual and community health
                </p>
                <div className="flex justify-center md:justify-start">
                  <button className='flex justify-center md:justify-start bg-tertiary text-white rounded-full py-3 px-6 hover:bg-secondary'>
                    <Link to='/about'>Know more</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slider-2 flex h-full w-full items-center justify-center">
        <div className="bg-white w-full h-full bg-opacity-60">
          <div className="px-16 py-8 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4 h-full">
            <div className="flex justify-center items-center h-full text-center">
              <div className="flex flex-col space-y-6">
                <h1 className='text-3xl text-black max-w-xl font-semibold font-mono md:text-5xl'>
                  Impacting Community Health since 2004
                </h1>
                <p className="hidden max-w-xl font-semibold md:block">
                  We provide access to comprehensive and integrated quality health care to improve individual and community health
                </p>
                <div className="flex justify-center">
                  <button className='mx-auto bg-tertiary text-white rounded-full py-3 px-6 hover:bg-secondary'>
                    <Link to='/about'>Know more</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slider-3 flex h-full w-full items-center justify-center">
        <div className="bg-white w-full h-full bg-opacity-60">
          <div className="px-16 py-8 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4 h-full">
            <div className="flex justify-center items-center text-center h-full md:justify-end md:text-right">
              <div className="flex flex-col space-y-6">
                <h1 className='text-3xl text-black max-w-xl font-semibold font-mono md:text-5xl'>
                  Experience Quality and Affordable Healthcare
                </h1>
                <p className="hidden max-w-xl font-semibold md:block">
                  We provide access to comprehensive and integrated quality health care to improve individual and community health
                </p>
                <div className="flex justify-center md:justify-end">
                  <button className='flex justify-center md:justify-start bg-tertiary text-white rounded-full py-3 px-6 hover:bg-secondary'>
                    <Link to='/about'>Know more</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  )
}





