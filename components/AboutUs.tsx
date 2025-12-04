import React from 'react';
import Image from 'next/image';

const aboutData = [
  {
    id: 1,
    // Content for Top Left Image (Uses ID 1 image, ID 2 content)
    headline: 'Puresounds Cloud',
    description: 'Fast loading, optimized assets, and smooth interactions using React.js, Next.js, Zustand, Axios, and reusable component architecture.',
    imageSrc: '/images/projects/puresounds-cloud.png',
    link:'https://www.puresounds.cloud/',
  },
  {
    id: 2,
    // Content for Top Right Content (Uses ID 1 image, ID 2 content)
    headline: 'Feestburo Be',
    description: 'I craft pixel-perfect interfaces using HTML, CSS, Bootstrap,Jquery,Javascript, and modern design systems. Every layout is clean, intuitive, and built with a user-first approach.',
    imageSrc: '/images/projects/feestburo-be.png', 
    link:'https://www.feestburo.be/',
  },
  {
    id: 3,
    // Content for Bottom Left Content
    headline: 'Alphagas Sa',
    description: 'I craft pixel-perfect interfaces using HTML, CSS, Bootstrap,Jquery,Javascript and modern design systems.',
    imageSrc: '/images/projects/alphagas-sa-en.png', 
    link:'https://alphagas-sa.com/en/home',
  },
];

const ContentBlock = ({ headline, description,link }) => (
  <div className="p-6 min-h-[300px] bg-white shadow-xl rounded-lg flex flex-col justify-center text-center">
    <p className="text-sm font-semibold text-amber-500 uppercase tracking-wider">Best Project</p>
    <h3 className="mt-2 text-xl font-bold text-gray-900">{headline}</h3>
    <p className="mt-4 text-gray-600 text-sm">{description}</p>
    <a 
      href={link}
      target="_blank"
      className="mt-6 inline-block bg-amber-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-black transition duration-150 text-center mx-auto"
      style={{ maxWidth: '140px' }}
    >
      Read More
    </a>
  </div>
);

const ImageBlock = ({ src, alt, overlayOpacity = 'opacity-20' }) => (
  <div className="relative min-h-[300px] overflow-hidden rounded-lg shadow-xl">
    <Image 
      src={src}
      alt={alt}
      fill
      style={{ objectFit: 'cover' }}
      className="group-hover:opacity-75 transition-opacity duration-300"
      sizes="(max-width: 1024px) 100vw, 33vw"
    />
    {/* Dark overlay for design aesthetic */}
    {/* <div className={`absolute inset-0 bg-purple-900 ${overlayOpacity}`}></div> */}
  </div>
);

const AboutUs = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        {/* Main Grid Container: 3 Columns on Large Screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-white p-10">
          
          {/* 1. Top Left: Image (Stretches across two rows - handled by absolute/height or padding in a simpler scenario, but here we use simple grid flow) */}
          <div className="lg:order-1">
            <ImageBlock 
              src={aboutData[0].imageSrc} 
              alt="Group of people in a meeting" 
              overlayOpacity="opacity-20"
            />
          </div>

          {/* 2. Top Middle: Content Block */}
          <div className="lg:order-2">
            <ContentBlock 
              headline={aboutData[0].headline} 
              description={aboutData[0].description} 
               link={aboutData[0].link}
            />
          </div>

          {/* 3. Top Right: Image */}
          <div className="lg:order-3">
            <ImageBlock 
              src={aboutData[1].imageSrc} 
              alt="A team reviewing data on a computer screen" 
              overlayOpacity="opacity-20"
            />
          </div>

          {/* 4. Middle Left: Content Block (Under the Top Left Image) */}
          {/* Note: In a true grid-row-span layout, this item would naturally sit below the image if the image takes 2 rows. Here we place it manually in order 4 */}
          <div className="lg:order-4">
            <ContentBlock 
              headline={aboutData[2].headline} 
              description={aboutData[2].description} 
              link={aboutData[2].link}
            />
          </div>
          
          {/* 5. Middle Center: Image Block (Under the Top Middle Content) */}
          <div className="lg:order-5">
            <ImageBlock 
              src={aboutData[2].imageSrc} 
              alt="A diverse group of colleagues reviewing work together" 
              overlayOpacity="opacity-40"
            />
          </div>
          
          {/* 6. Middle Right: Content Block (Under the Top Right Image) */}
          <div className="lg:order-6">
            <ContentBlock 
              headline={aboutData[1].headline} // Using the description from data 2 for consistency
              description={aboutData[1].description} 
              link={aboutData[1].link}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;