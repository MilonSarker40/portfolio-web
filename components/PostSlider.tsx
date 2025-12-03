"use client";

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick'; 
import { Calendar } from 'lucide-react'; 
import { IoMdArrowForward } from "react-icons/io";

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
    title: 'How to build great UI with Next.js and Tailwind',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quis?',
    date: 'Dec 02, 2025',
    imageSrc: '/images/back5.jpg', // Replace with your image path
    link: '#',
  },
  {
    id: 2,
    title: 'The future of web development and component-based design',
    excerpt: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    date: 'Nov 28, 2025',
    imageSrc: '/images/back5.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'Mastering TypeScript for robust React applications',
    excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
    date: 'Nov 20, 2025',
    imageSrc: '/images/back5.jpg',
    link: '#',
  },
  {
    id: 4,
    title: 'Designing scalable microservices architecture',
    excerpt: 'Voluptatem dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation.',
    date: 'Nov 15, 2025',
    imageSrc: '/images/back5.jpg',
    link: '#',
  },
];

// --- 3. Slider Settings ---
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Shows 3 posts at a time on desktop
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2, // 2 posts on tablet
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1, // 1 post on mobile
        slidesToScroll: 1,
      },
    },
  ],
  // Custom styling to fix react-slick theme issues with Tailwind
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
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Calendar className="w-4 h-4 mr-1 text-amber-500" />
            <span>{date}</span>
          </div>
          
          <h3 className="text-lg font-bold text-gray-900 mb-3 flex-grow">
            <a href={link} className="hover:text-amber-500 transition duration-150">
              {title}
            </a>
          </h3>
          
          <p className="text-gray-600 text-sm mb-4">
            {excerpt}
          </p>

          <a href={link} className="text-amber-500 font-semibold flex justify-left items-center text-sm hover:text-black-700 transition duration-150 mt-auto">
            Read More <IoMdArrowForward className='pl-1 text-lg' />
          </a>
        </div>
      </div>
    </div>
  );
};

// --- 5. Main PostSlider Component ---
const PostSlider: React.FC = () => {
  return (
    <section id="blog-slider" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className='bg-white p-10 pb-14'>
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-amber-500 uppercase tracking-wider">
              Latest News
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Our Blog Posts
            </h2>
          </div>
          
          {/* The Slider Component */}
          <div className="relative">
              <Slider {...settings}>
                {postsData.map((post) => (
                  <PostItemComponent 
                    key={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    imageSrc={post.imageSrc}
                    link={post.link}
                    id={post.id}
                  />
                ))}
              </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostSlider;