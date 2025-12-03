"use client"; // <--- THIS LINE IS CRUCIAL TO FIX THE ERROR

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react'; // For the button icon

// Dummy Data
const worksData = [
  { 
    title: 'Robotic Light', 
    category: 'Photography', 
    subcategories: ['Web Design'],
    imageSrc: '/images/work1.jpg', // REPLACE WITH YOUR IMAGE PATH
    link: '#', // Add your specific link here
  },
  { 
    title: 'Rock Solid', 
    category: 'Web Design', 
    subcategories: ['Photography'],
    imageSrc: '/images/work2.jpg', 
    link: '#', 
  },
  { 
    title: 'Minimal Capture', 
    category: 'Responsive', 
    subcategories: ['Creative'],
    imageSrc: '/images/work3.jpg', 
    link: '#', 
  },
  // Add more items here...
  { 
    title: 'Tattoo Lovers', 
    category: 'Creative', 
    subcategories: ['Photography'],
    imageSrc: '/images/work4.jpg', 
    link: '#', 
  },
  { 
    title: 'Develop & Coding', 
    category: 'Creative', 
    subcategories: ['Web Design'],
    imageSrc: '/images/work5.jpg', 
    link: '#', 
  },
  { 
    title: 'Network Inspire', 
    category: 'Responsive', 
    subcategories: ['Web Design'],
    imageSrc: '/images/work6.jpg', 
    link: '#', 
  },
];

const categories = ['All', 'Web Design', 'Photography', 'Responsive', 'Creative'];

const PortfolioItem = ({ title, category, subcategories, imageSrc, link }) => {
  const displayCategory = subcategories.length > 0 ? `${category} / ${subcategories.join(', ')}` : category;

  return (
    <div className="group overflow-hidden rounded-lg shadow-xl bg-white transition duration-300 hover:shadow-2xl">
      {/* Image Container with Hover Effect and Button */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        
        {/* Hover Overlay & Button */}
        <div 
          className="absolute inset-0 flex items-center justify-center 
                     bg-blue-600 bg-opacity-70 opacity-0 group-hover:opacity-100 
                     transition-opacity duration-500"
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold flex items-center space-x-2 
                       transform translate-y-4 group-hover:translate-y-0 transition duration-300 ease-out"
          >
            <span>View Project</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      {/* Text Content */}
      <div className="p-4 md:p-6 text-center">
        <p className="text-sm uppercase tracking-wider text-gray-500 mb-1">
          {displayCategory}
        </p>
        <h3 className="text-xl font-bold text-gray-900">
          {title}
        </h3>
      </div>
    </div>
  );
};

const WorksSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredWorks = worksData.filter(item => 
    activeCategory === 'All' || 
    item.category === activeCategory || 
    item.subcategories.includes(activeCategory)
  );

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 relative inline-block pb-1">
            Works
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-300"></span>
          </h2>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mb-16">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm rounded-full transition-all duration-300 
                ${activeCategory === category 
                  ? 'bg-blue-600 text-white font-semibold shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {filteredWorks.map((work, index) => (
            <PortfolioItem 
              key={index}
              title={work.title}
              category={work.category}
              subcategories={work.subcategories}
              imageSrc={work.imageSrc}
              link={work.link}
            />
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default WorksSection;