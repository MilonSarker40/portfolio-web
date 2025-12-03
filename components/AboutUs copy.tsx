import React from 'react';
import Image from 'next/image';

const aboutData = [
  {
    id: 1,
    headline: 'Your Headline Here (Top Left)',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    imageSrc: '/images/meeting-top-left.jpg', // Replace with your actual image path
    imageAlt: 'Group of people in a meeting, focused on a document.',
    order: 'lg:order-1',
  },
  {
    id: 2,
    headline: 'Your Headline Here (Middle Right)',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageSrc: '/images/computer-work-right.jpg', // Replace with your actual image path
    imageAlt: 'A team reviewing data on a computer screen.',
    order: 'lg:order-4', // Order 4 to place it on the right in the 4-column structure
  },
  {
    id: 3,
    headline: 'Your Headline Here (Bottom Left)',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageSrc: '/images/team-review-bottom.jpg', // Replace with your actual image path
    imageAlt: 'A diverse group of colleagues reviewing work together.',
    order: 'lg:order-3',
  },
];

const AboutUs = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-16">
          Meet Our Team & Mission
        </h2>
        
        {/* Grid Container for the 4-part layout (2 columns on mobile, 4 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Item 1: Image (Col-span 2) */}
          <div className="md:col-span-2 lg:col-span-2 lg:order-1 relative min-h-[300px] overflow-hidden rounded-lg shadow-xl">
            <Image 
              src={aboutData[0].imageSrc}
              alt={aboutData[0].imageAlt}
              fill
              style={{ objectFit: 'cover' }}
              className="group-hover:opacity-75 transition-opacity duration-300"
              sizes="(max-width: 1024px) 100vw, 50vw" // Optimized for Next/Image
            />
            {/* Dark overlay for design aesthetic */}
            <div className="absolute inset-0 bg-purple-900 opacity-20"></div> 
          </div>

          {/* Item 2: Content Block (Top Right) */}
          <div className="lg:order-2 p-6 bg-white rounded-lg shadow-lg flex flex-col justify-center">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Description</p>
            <h3 className="mt-2 text-xl font-bold text-gray-900">{aboutData[0].headline}</h3>
            <p className="mt-4 text-gray-600 text-sm">{aboutData[0].description}</p>
            <a 
              href="#" 
              className="mt-6 inline-block bg-teal-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-150 text-center"
            >
              Read More
            </a>
          </div>

          {/* Item 3: Content Block (Bottom Left) */}
          <div className="lg:order-3 p-6 bg-white rounded-lg shadow-lg flex flex-col justify-center">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Description</p>
            <h3 className="mt-2 text-xl font-bold text-gray-900">{aboutData[2].headline}</h3>
            <p className="mt-4 text-gray-600 text-sm">{aboutData[2].description}</p>
            <a 
              href="#" 
              className="mt-6 inline-block bg-teal-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-150 text-center"
            >
              Read More
            </a>
          </div>
          
          {/* Item 4: Image (Bottom Middle, Col-span 2) */}
          <div className="md:col-span-2 lg:col-span-2 lg:order-5 relative min-h-[300px] overflow-hidden rounded-lg shadow-xl">
            <Image 
              src={aboutData[2].imageSrc} // Using the image from the third data object
              alt={aboutData[2].imageAlt}
              fill
              style={{ objectFit: 'cover' }}
              className="group-hover:opacity-75 transition-opacity duration-300"
              sizes="(max-width: 1024px) 100vw, 50vw" 
            />
            <div className="absolute inset-0 bg-purple-900 opacity-40"></div>
          </div>
          
          {/* Item 5: Image (Middle Bottom, Col-span 2) */}
          {/* This is the large image at the bottom center in your source image, we are placing it below the other content blocks for flow */}
          <div className="md:col-span-2 lg:col-span-2 lg:order-6 relative min-h-[300px] overflow-hidden rounded-lg shadow-xl">
            <Image 
              src={aboutData[1].imageSrc}
              alt={aboutData[1].imageAlt}
              fill
              style={{ objectFit: 'cover' }}
              className="group-hover:opacity-75 transition-opacity duration-300"
              sizes="(max-width: 1024px) 100vw, 50vw" 
            />
            <div className="absolute inset-0 bg-purple-900 opacity-60"></div>
          </div>
          
          {/* Item 6: Content Block (Bottom Right) */}
          <div className="lg:order-7 p-6 bg-white rounded-lg shadow-lg flex flex-col justify-center">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Description</p>
            <h3 className="mt-2 text-xl font-bold text-gray-900">Your Headline Here (Bottom Right)</h3>
            <p className="mt-4 text-gray-600 text-sm">{aboutData[1].description}</p>
            <a 
              href="#" 
              className="mt-6 inline-block bg-teal-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-150 text-center"
            >
              Read More
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;