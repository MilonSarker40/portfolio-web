"use client";

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick'; 
import { Calendar } from 'lucide-react'; 
import { IoMdArrowForward } from "react-icons/io";
import { TransitionUp } from '@/animation/framerAnimation';

// --- 1. INTERFACES (TypeScript Types) ---
interface PostItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageSrc: string;
  link: string;
}

// --- 2. DUMMY DATA ---
const postsData: PostItem[] = [
  {
    id: 1,
    title: 'Getting Started with Next.js 15: A Beginner’s Guide',
    excerpt: 'I craft pixel-perfect interfaces using HTML, CSS, Bootstrap, Jquery, Javascript and modern design systems.',
    date: '20.08.2024',
    imageSrc: '/images/projects/puresounds-cloud.png',
    link: '#',
  },
  {
    id: 2,
    title: 'Top VS Code Extensions Every Frontend Developer Should Use',
    excerpt: 'I craft pixel-perfect interfaces using HTML, CSS, Bootstrap, Jquery, Javascript and modern design systems.',
    date: '18.08.2020',
    imageSrc: '/images/projects/kurtimmo.png',
    link: '#',
  },
  {
    id: 3,
    title: 'How to Create Dark Mode in React with Nextjs',
    excerpt: 'Learn how to create an effective dark mode layout in React using Tailwind CSS and modern interface techniques.',
    date: 'Nov 20, 2025',
    imageSrc: '/images/projects/myrobi-iqra-live.png',
    link: '#',
  },
  {
    id: 4,
    title: 'Next.js Image Optimization Explained',
    excerpt: 'Build high-performance web applications using Next.js and React with fast rendering, strong SEO, and optimized user experience.',
    date: 'Nov 15, 2024',
    imageSrc: '/images/projects/lekharpoka.png',
    link: '#',
  },
];


// --- 3. Slider Settings ---
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
  className: "slick-list-padding",
};

// --- 4. PostItem Component ---
const PostItemComponent: React.FC<PostItem> = ({ title, excerpt, date, imageSrc, link }) => {
  return (
    <div className="p-2 h-full"> 
      <div className="bg-[#f0f5fe] rounded-xl overflow-hidden h-full flex flex-col transition duration-300 hover:shadow-2xl">
        
        {/* Image */}
        <div className="relative w-full aspect-video">
          <Image
            src={imageSrc}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">

          {/* Date */}
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Calendar className="w-4 h-4 mr-1 text-amber-500" />
            <span>{date}</span>
          </div>

          {/* TITLE + EXCERPT (Equal height wrapper) */}
          <div className="flex-grow min-h-[140px] flex flex-col">
            <h3 className="text-base font-bold text-gray-900 mb-3">
              <a href={link} className="hover:text-amber-500 transition duration-150">
                {title}
              </a>
            </h3>

            <p className="text-gray-600 text-sm flex-grow line-clamp-3">
              {excerpt}
            </p>
          </div>

          {/* Read More Button */}
          <a 
            href={link} 
            className="text-amber-500 font-semibold flex items-center text-sm hover:text-black transition duration-150 mt-auto"
          >
            Read More <IoMdArrowForward className="pl-1 text-lg" />
          </a>

        </div>
      </div>
    </div>
  );
};

// --- 5. Main PostSlider Component ---
const PostSlider: React.FC = ({id}) => {
  return (
    <section id="blog-slider" className="py-16 md:py-24 bg-gray-50 relative" id={id}>
      <div className='cta-background'></div>
      <div className="container">
        <div className='bg-white p-10 pb-14 relative z-10'>

          {/* Header */}
          <TransitionUp className="text-center mb-12">
            <p className="text-sm font-semibold text-amber-500 uppercase tracking-wider">
              Latest News
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Our Blog Posts
            </h2>
          </TransitionUp>

          {/* Slider */}
          <div className="relative">
            <Slider {...settings}>
              {postsData.map((post, index) => (
                <TransitionUp key={post.id} delay={index * 1}>
                  <PostItemComponent {...post} />
                </TransitionUp>
              ))}
            </Slider>
          </div>

        </div>
      </div>
    </section>
  );
};


export default PostSlider;
