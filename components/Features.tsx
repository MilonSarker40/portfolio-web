import React from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react'; 
import { TransitionUp } from '@/animation/framerAnimation';

const featuresData = {
  headline: 'Our Features',
  subheading: 'Features',
  description: "As a dedicated Frontend Developer, I bring modern, high-performance, and user-friendly solutions to every project. My focus is on creating visually appealing, responsive, and optimized interfaces that deliver real value to users.",
  imageSrc: '/images/feature-img.png', // Replace with your actual image path
  imageAlt: 'Smiling businessman standing in front of his team',
  featureItems: [
    "A beautiful UI section",
    "A React/Next.js component",
    "A Tailwind-designed features grid",
    "A landing page section"
  ]
};

const Features = ({id}) => {
  return (
    <section className="py-16 md:py-24 bg-white relative" id={id}>
      <div className="absolute inset-0 opacity-80">
        <Image
          src="/images/career-default-bg.svg"
          alt="Left Background"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
          priority
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Container: 2 Columns on Large Screens */}
        <TransitionUp className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN: IMAGE */}
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            {/* The image in the design is slightly wider than it is tall. We use an aspect ratio or min-height for structure. */}
            <div className="w-full aspect-video md:aspect-[3/2] lg:aspect-[4/3] relative">
              <Image 
                src={featuresData.imageSrc}
                alt={featuresData.imageAlt}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-xl"
                sizes="(max-width: 1024px) 100vw, 50vw" 
                priority
              />
            </div>
          </div>

          {/* RIGHT COLUMN: CONTENT & FEATURES LIST */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-[#fc9800] uppercase tracking-wider">
              {featuresData.subheading}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {featuresData.headline}
            </h2>
            
            <p className="text-gray-600 leading-relaxed">
              {featuresData.description}
            </p>
            
            {/* Features List */}
            <ul className="space-y-4 pt-4">
              {featuresData.featureItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  {/* Checkmark Icon (Lucide Icon used here, replace with your preferred icon library) */}
                  <CheckCircle className="flex-shrink-0 w-6 h-6 text-[#fc9800] mt-1" />
                  <p className="ml-3 text-gray-700">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          
        </TransitionUp>
      </div>
    </section>
  );
};

export default Features;