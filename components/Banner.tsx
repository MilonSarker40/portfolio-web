// components/Banner.jsx (Updated with Vibrant Gradient)
"use client";

import React from 'react';
import Image from 'next/image';
import { TransitionUp } from '@/animation/framerAnimation';

const PRIMARY_COLOR = '#fc9800';
const SECONDARY_COLOR = '#4c51bf'; // Deep Violet/Indigo for modern contrast

const Banner = () => {
    return (
        // ********* Updated Section Style with Vibrant Gradient *********
        // হালকা ক্রিম ইয়েলো (#fef9e7) থেকে হালকা ল্যাভেন্ডার (#f3e5f5) গ্রেডিয়েন্ট ব্যবহার করা হয়েছে
        <section className={`relative bg-gradient-to-br from-[#fef9e7] to-[#f3e5f5] pb-20 lg:pb-30 md:pb-25 sm:pb-20 pt-30 lg:pt-45 md:pt-40 sm:pt-35 overflow-hidden`}>
            
            {/* Left Background Image (Improved placement and animation) */}
            <div className="absolute left-0 max-w-[600px] w-full inset-y-0 opacity-30 animate-float-left hidden lg:block">
                <Image
                    src="/images/shape-img-lft.png"
                    alt="Left Background"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="100vw"
                    priority
                />
            </div>

            {/* Right Background Image (Using floatRight animation for dynamic look) */}
            <div className="absolute right-0 max-w-[600px] w-full inset-y-0 opacity-30 animate-float-right hidden lg:block">
                <Image
                    src="/images/shape-img-lft.png"
                    alt="Right Background"
                    fill
                    style={{ objectFit: "cover", transform: 'scaleX(-1)' }} // Image flip
                    sizes="100vw"
                    priority
                />
            </div>

            {/* Content */}
            <div className="container relative z-10">
                <div className="lg:flex md:block justify-between items-center">
                    
                    {/* Text Content */}
                    <TransitionUp className="pr-0 lg:pr-10 md:pr-0 lg:max-w-[700px] w-full">
                        <h3 className={`text-xs lg:text-base font-bold mb-1 text-[${SECONDARY_COLOR}] uppercase tracking-wider`}>
                            Hello, I'm a Md Milon Mia
                        </h3>
                        {/* ********* Main Title Improvement ********* */}
                        <h2 className="text-3xl lg:text-5xl md:text-5xl font-bold text-gray-900 mb-4">
                            Frontend Developer
                        </h2>
                        
                        <p className="text-lg text-gray-700 mb-8 max-w-xl">
                            I am a Frontend Developer specializing in high-performance and scalable web applications using Next.js, React.js, and Tailwind CSS. With 5+ years of experience in HTML5, CSS3, Bootstrap 5, JavaScript, API integration, and modern frontend frameworks, I build fast, responsive, and user-friendly interfaces with pixel-perfect design and strong architecture.
                        </p>
                        
                        <div className="flex space-x-4">
                            {/* ********* Primary CTA Improvement ********* */}
                            <button className={`px-5 lg:px-8 py-3 bg-[${PRIMARY_COLOR}] text-white font-semibold cursor-pointer rounded-full transition duration-300 hover:bg-black shadow-lg hover:shadow-xl`}>
                                View My Work
                            </button>
                            {/* Secondary CTA (Ghost/Outline Button) */}
                            <button className={`px-5 lg:px-8 py-3 border-2 border-[${PRIMARY_COLOR}] text-[${PRIMARY_COLOR}] font-semibold cursor-pointer rounded-full transition duration-300 hover:bg-[${PRIMARY_COLOR}] hover:text-white`}>
                                Contact Me
                            </button>
                        </div>
                    </TransitionUp>
                    
                    {/* Image */}
                    <TransitionUp className="relative flex justify-center pt-10 lg:pt-0 md:pt-10 lg:max-w-md w-full">
                        {/* ********* Image Style Improvement (Added Shadow/Scale) ********* */}
                        <img
                            src="/images/hm-banner-img.png"
                            alt="Frontend Developer Avatar"
                            className="w-full max-w-lg relative z-10 rounded-xl shadow-2xl transition-all duration-500 hover:scale-[1.03] animate-float-right-slow"
                        />
                    </TransitionUp>
                </div>
            </div>
            
            {/* Floating Animations CSS (No change needed here) */}
            <style jsx>{`
                @keyframes floatLeft {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                    100% { transform: translateY(0px); }
                }
                @keyframes floatRight {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(15px); }
                    100% { transform: translateY(0px); }
                }
                @keyframes floatRightSlow {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(10px); } /* Slower, less aggressive float for image */
                    100% { transform: translateY(0px); }
                }
                .animate-float-left {
                    animation: floatLeft 6s ease-in-out infinite;
                }
                .animate-float-right {
                    animation: floatRight 6s ease-in-out infinite;
                }
                .animate-float-right-slow {
                    animation: floatRightSlow 8s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default Banner;