import React from 'react';
import Image from 'next/image';

const Banner = () => {
    return (
        <section className="relative py-20 overflow-hidden">
            
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src='/images/hm-banner-img.jpg' // Your background image
                        alt='Background Banner'
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="100vw"
                        priority
                    />
                </div>
                {/* Color Overlay */}
                <div className="absolute inset-0 bg-[#f3f8ff]/80 backdrop-blur-sm"></div>
            </div>

            <div className='container relative z-10'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='flex justify-between items-center'>
                            <div className='pr-10'>
                                <h3 className='text-3xl font-semibold mb-2 text-[#fc9800] uppercase'>
                                    Frontend Developer
                                </h3>
                                <p className="text-lg text-justify text-gray-800 max-w-2xl relative z-10 mb-8">
                                    I'm a Web Developer specializing in building high-performance, scalable, and visually stunning digital experiences. I work extensively with html css bootstrap javascript reactjs Next.js, Tailwind CSS, Zustand, Axios, and modern full-stack technologies to create responsive interfaces, optimized APIs, and smooth user interactions. My focus is on writing clean code, delivering pixel-perfect UI, and developing applications that balance performance, usability, and strong architecture.
                                </p>
                                <button className="px-6 py-3 bg-[#fc9800] text-white cursor-pointer hover:bg-black rounded-full relative z-10 transition duration-300">
                                    View My Work
                                </button>
                            </div>
                            <div className='relative'>
                                <img 
                                    src="/images/banner-img-removebg-preview.png" 
                                    alt="Banner" 
                                    className='w-full max-w-lg relative z-10' 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;