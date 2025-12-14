// components/PostSlider.tsx
"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Calendar } from "lucide-react";
import { IoMdArrowForward } from "react-icons/io";
import { TransitionUp } from "@/animation/framerAnimation";

// আপনার ব্যবহৃত কালার হেক্স কোড
const PRIMARY_COLOR = "#fc9800";
const BG_LIGHT_BLUE = "#f0f5fe"; // Post Item Background

interface PostItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageSrc: string;
  link: string;
}

const postsData: PostItem[] = [
  {
    id: 1,
    title: "Getting Started with Next.js 15: A Beginner’s Guide",
    excerpt:
      "I craft pixel-perfect interfaces using HTML, CSS, Bootstrap, Jquery, Javascript and modern design systems.",
    date: "20.08.2024",
    imageSrc: "/images/projects/puresounds-cloud.png",
    link: "#",
  },
  {
    id: 2,
    title: "Top VS Code Extensions Every Frontend Developer Should Use",
    excerpt:
      "I craft pixel-perfect interfaces using HTML, CSS, Bootstrap, Jquery, Javascript and modern design systems.",
    date: "18.08.2020",
    imageSrc: "/images/projects/kurtimmo.png",
    link: "#",
  },
  {
    id: 3,
    title: "How to Create Dark Mode in React with Nextjs",
    excerpt:
      "Learn how to create an effective dark mode layout in React using Tailwind CSS and modern interface techniques.",
    date: "Nov 20, 2025",
    imageSrc: "/images/projects/myrobi-iqra-live.png",
    link: "#",
  },
  {
    id: 4,
    title: "Next.js Image Optimization Explained",
    excerpt:
      "Build high-performance web applications using Next.js and React with fast rendering, strong SEO, and optimized user experience.",
    date: "Nov 15, 2024",
    imageSrc: "/images/projects/lekharpoka.png",
    link: "#",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, 
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  adaptiveHeight: true,
  variableWidth: false,
  centerMode: false,
  responsive: [
    {
      breakpoint: 991,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
  className: "slick-list-padding",
};

const PostItemComponent: React.FC<PostItem> = ({
  title,
  excerpt,
  date,
  imageSrc,
  link,
}) => {
  return (
    <div className="p-2 h-full"> 
      <div className={`bg-[${BG_LIGHT_BLUE}] rounded-xl overflow-hidden h-full flex flex-col transition duration-300 hover:shadow-2xl`}>
        <div className="relative w-full aspect-video">
          <Image
            src={imageSrc}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>

        <div className="py-6 px-3 lg:px-6 md:px-5 sm:px-4 flex flex-col flex-grow">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            {/* কালার পরিবর্তন করা হলো */}
            <Calendar className={`w-4 h-4 mr-1 text-[${PRIMARY_COLOR}]`} /> 
            <span>{date}</span>
          </div>

          <div className="flex-grow min-h-[140px] flex flex-col">
            <h3 className="text-base font-bold text-gray-900 mb-3">
              <a
                href={link}
                // কালার পরিবর্তন করা হলো
                className={`hover:text-[${PRIMARY_COLOR}] transition duration-150`}
              >
                {title}
              </a>
            </h3>

            <p className="text-gray-600 text-sm flex-grow line-clamp-3">
              {excerpt}
            </p>
          </div>

          <a
            href={link}
            // কালার পরিবর্তন করা হলো
            className={`text-[${PRIMARY_COLOR}] font-semibold flex items-center text-sm hover:text-black transition duration-150 mt-auto`}
          >
            Read More <IoMdArrowForward className="pl-1 text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

const PostSlider: React.FC<{ id?: string }> = ({ id }) => {
  // keep a ref to the Slider so we can force recalculation on resize
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    const forceRecalc = () => {
      // innerSlider.onWindowResized() is a private-ish API but works to force resize calculations
      const sliderAny = sliderRef.current as any;
      if (sliderAny && sliderAny.innerSlider && typeof sliderAny.innerSlider.onWindowResized === "function") {
        sliderAny.innerSlider.onWindowResized();
      }
    };

    // Force once on mount (useful if initial render had wrong width)
    forceRecalc();

    // Also force on resize (debounce lightly)
    let t: number | null = null;
    const onResize = () => {
      if (t) window.clearTimeout(t);
      t = window.setTimeout(() => {
        forceRecalc();
        t = null;
      }, 120);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative" id={id}>
      <div className="cta-background"></div>
      <div className="container">
        <div className="bg-white p-4 lg:p-10 md:p-8 sm:p-6 pb-8 lg:pb-14 md:pb-12 sm:pb-10 relative z-10">
          {/* Header animation outside of slider to avoid ref issues */}
          <TransitionUp className="text-center mb-12">
            <p className={`text-sm font-semibold text-[${PRIMARY_COLOR}] uppercase tracking-wider`}>
              Latest News
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Our Blog Posts
            </h2>
          </TransitionUp>

          {/* Slider */}
          <div className="relative" id="blog-slider">
            {/* Attach ref here */}
            <Slider ref={sliderRef} {...settings}>
              {postsData.map((post) => (
                // Note: এখানে px-1 এর বদলে কোনো padding না রাখাই ভালো, 
                // কারণ padding স্লাইডারের ক্যালকুলেশনকে প্রভাবিত করে।
                <div key={post.id} className="px-1"> 
                  <PostItemComponent {...post} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostSlider;