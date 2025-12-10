"use client";

import React from 'react';
import Image from 'next/image';
import { TransitionLeft,TransitionRight } from '@/animation/framerAnimation';

const Banner = () => {
  return (
    <section className="relative bg-[#F5FCFC] pb-20 lg:pb-30 md:pb-25 sm:pb-20 pt-30 lg:pt-45 md:pt-40 sm:pt-35 overflow-hidden">
      {/* Left Background Image */}
      <div className="absolute left-0 max-w-[600px] w-full inset-y-0 animate-float-left">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/shape-img-lft.png"
            alt="Left Background"
            fill
            style={{ objectFit: "cover" }}
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Right Background Image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 lg:block md:hidden max-w-[200px] lg:max-w-[500px] md:max-w-[400px] sm:max-w-[300px] w-full animate-float-right">
        <div className="opacity-30 relative w-[200px] lg:w-[500px] md:w-[400px] sm:w-[300px] h-[200px] lg:h-[500px] md:h-[400px] sm:h-[300px]">
          <Image
            src="/images/world-img.png"
            alt="Right Background"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
        <div className="container relative z-10">
          <div className="lg:flex md:block justify-between items-center">
            <TransitionLeft className="pr-0 lg:pr-10 md:pr-0 lg:max-w-[700px] md:max-w-full w-full">
              <h3 className="text-3xl font-semibold mb-2 text-[#fc9800] capitalize">
                Frontend Developer
              </h3>
              <p className="text-xs lg:text-lg md:text-lg sm:text-sm text-gray-800 mb-8">
                I'm a Web Developer with 5 years of experience specializing in building high-performance, scalable, and visually stunning digital experiences. I work extensively with HTML, CSS, Bootstrap, JavaScript, React.js, Next.js, Tailwind CSS, Zustand, Axios, and modern full-stack technologies to create responsive interfaces, optimized APIs, and smooth user interactions. My focus is on writing clean, maintainable code, delivering pixel-perfect UI, and developing applications that balance performance, usability, and strong architecture.
              </p>
              <button className="px-6 py-3 bg-[#fc9800] text-white cursor-pointer hover:bg-black rounded-full transition duration-300">
                View My Work
              </button>
            </TransitionLeft>
            <TransitionRight className="relative flex justify-center pt-10 lg:pt-0 mg:pt-10">
              <img
                src="/images/marketing.d112606e.png"
                alt="Banner"
                className="w-full max-w-lg relative z-10"
              />
            </TransitionRight>
          </div>
        </div>
      {/* Floating Animations */}
      <style jsx>{`
        @keyframes floatLeft {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes floatRight {
          0% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float-left {
          animation: floatLeft 6s ease-in-out infinite;
        }
        .animate-float-right {
          animation: floatRight 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Banner;
