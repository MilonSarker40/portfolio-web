"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// TYPES
interface WorkItem {
  title: string;
  category: string;
  subcategories: string[];
  imageSrc: string;
  link: string;
}

interface PortfolioItemProps extends WorkItem {}

// DUMMY PROJECT DATA
const worksData: WorkItem[] = [
  {
    title: "Myrobi Iqra Live",
    category: "Nextjs",
    subcategories: ["Nextjs"],
    imageSrc: "/images/projects/myrobi-iqra-live.png",
    link: "#",
  },
  {
    title: "Rock Solid",
    category: "Web Design",
    subcategories: ["Photography"],
    imageSrc: "/images/back3.jpg",
    link: "#",
  },
  {
    title: "Minimal Capture",
    category: "Responsive",
    subcategories: ["Creative"],
    imageSrc: "/images/back3.jpg",
    link: "#",
  },
  {
    title: "Tattoo Lovers",
    category: "Creative",
    subcategories: ["Photography"],
    imageSrc: "/images/back3.jpg",
    link: "#",
  },
  {
    title: "Develop & Coding",
    category: "Creative",
    subcategories: ["Web Design"],
    imageSrc: "/images/back3.jpg",
    link: "#",
  },
  {
    title: "Network Inspire",
    category: "Responsive",
    subcategories: ["Web Design"],
    imageSrc: "/images/back3.jpg",
    link: "#",
  },
];

// CATEGORY LIST
const categories = ["All", "Web Design", "UI/UX Design", "Reactjs", "Nextjs"];

// INDIVIDUAL PORTFOLIO ITEM — ONLY FADE ANIMATION
const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  category,
  subcategories,
  imageSrc,
  link,
}) => {
  const displayCategory =
    subcategories.length > 0
      ? `${category} / ${subcategories.join(", ")}`
      : category;

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}     // FADE IN
      animate={{ opacity: 1 }}     // FADE
      exit={{ opacity: 0 }}        // FADE OUT
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-2xl transition"
    >
      {/* IMAGE */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* HOVER BUTTON */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center"
        >
          <a
            href={link}
            className="px-5 py-3 bg-white text-amber-500 font-semibold rounded-full flex items-center gap-2 hover:bg-amber-500 hover:text-white transition"
          >
            View Project <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>

      {/* TEXT */}
      <div className="p-5 text-center">
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          {displayCategory}
        </p>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
    </motion.div>
  );
};

// MAIN WORKS SECTION
const WorksSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // FILTER (Case-insensitive)
  const filteredWorks = worksData.filter((item) => {
    const selected = activeCategory.toLowerCase();
    return (
      selected === "all" ||
      item.category.toLowerCase() === selected ||
      item.subcategories.some((sub) => sub.toLowerCase() === selected)
    );
  });

  return (
    <section className="py-20 bg-white" id="works">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Works
        </h2>

        {/* CATEGORY BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#fc9800] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-[#fc9800] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID WITH ONLY FADE ANIMATION */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredWorks.map((work, i) => (
              <PortfolioItem key={i} {...work} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default WorksSection;
