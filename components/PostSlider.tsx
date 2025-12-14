"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { IoMdArrowForward } from "react-icons/io";
import { TransitionUp } from "@/animation/framerAnimation";

/* ---------------- CONFIG ---------------- */
const PRIMARY_COLOR = "#fc9800";
const BG_LIGHT_BLUE = "#f0f5fe";
const AUTOPLAY_DELAY = 3000;

/* ---------------- TYPES ---------------- */
interface PostItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageSrc: string;
  link: string;
}

/* ---------------- DATA ---------------- */
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

/* ---------------- CARD ---------------- */
const PostItemComponent: React.FC<PostItem> = ({
  title,
  excerpt,
  date,
  imageSrc,
  link,
}) => {
  return (
    <div className="p-2 h-full">
      <div
        className="rounded-xl overflow-hidden h-full flex flex-col hover:shadow-2xl transition"
        style={{ backgroundColor: BG_LIGHT_BLUE }}
      >
        <div className="relative w-full aspect-video">
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Calendar className="w-4 h-4 mr-1" style={{ color: PRIMARY_COLOR }} />
            <span>{date}</span>
          </div>

          <h3 className="font-bold text-gray-900 mb-3">{title}</h3>

          <p className="text-gray-600 text-sm flex-grow line-clamp-3">
            {excerpt}
          </p>

          <a
            href={link}
            className="mt-4 font-semibold flex items-center text-sm"
            style={{ color: PRIMARY_COLOR }}
          >
            Read More <IoMdArrowForward className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

/* ---------------- SLIDER ---------------- */
const PostSlider: React.FC<{ id?: string }> = ({ id }) => {
  const [index, setIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  /* Responsive slides */
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setSlidesPerView(1);
      else if (window.innerWidth < 1024) setSlidesPerView(2);
      else setSlidesPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = postsData.length - slidesPerView;

  /* Autoplay */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section className="py-16 md:py-24 bg-gray-50" id={id}>
      <div className="container">
        <div className="bg-white p-6 lg:p-10 rounded-xl">
          {/* Header */}
          <TransitionUp className="text-center mb-10">
            <p
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: PRIMARY_COLOR }}
            >
              Latest News
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Our Blog Posts
            </h2>
          </TransitionUp>

          {/* Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  (100 / slidesPerView) * index
                }%)`,
              }}
            >
              {postsData.map((post) => (
                <div
                  key={post.id}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0"
                >
                  <PostItemComponent {...post} />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-6" id="blog-slider">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`blog-dot ${index === i ? "active" : ""}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostSlider;
