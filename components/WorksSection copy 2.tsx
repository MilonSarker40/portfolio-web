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
    title: "t pleint jewestende",
    category: "UI/UX Design",
    subcategories: ["Figma"],
    imageSrc: "/images/projects/pleintje.png",
    link: "https://www.tpleintjewestende.be/",
  },
  {
    title: "Feestburo Be",
    category: "Web Design",
    subcategories: ["Bootstrap"],
    imageSrc: "/images/projects/feestburo-be.png",
    link: "https://www.feestburo.be/",
  },
  {
    title: "Trividend Be",
    category: "UI/UX Design",
    subcategories: ["Figma"],
    imageSrc: "/images/projects/trividend-be.png",
    link: "https://www.trividend.be/",
  },
  {
    title: "Myrobi Iqra Live",
    category: "Nextjs",
    subcategories: ["Tailwind Css"],
    imageSrc: "/images/projects/myrobi-iqra-live.png",
    link: "https://myrobi.iqra-live.com/?msisdn=0",
  },
  {
    title: "Eltracom Gr",
    category: "Web Design",
    subcategories: ["Bootstrap"],
    imageSrc: "/images/projects/eltracom.png",
    link: "https://eltracom.gr/",
  },
  {
    title: "Cinematic Mobi",
    category: "Reactjs",
    subcategories: ["Bootstrap"],
    imageSrc: "/images/projects/cinematic-mobi.png",
    link: "https://cinematic.mobi",
  },
  {
    title: "Alphagas Sa",
    category: "Web Design",
    subcategories: ["Bootstrap"],
    imageSrc: "/images/projects/alphagas-sa-en.png",
    link: "https://alphagas-sa.com/en/home",
  },
  {
    title: "Lekhar Poka",
    category: "Nextjs",
    subcategories: ["Tailwind Css"],
    imageSrc: "/images/projects/lekharpoka.png",
    link: "http://www.lekharpoka.com",
  },
  {
    title: "Kurtimmo",
    category: "Web Design",
    subcategories: ["Bootstrap"],
    imageSrc: "/images/projects/kurtimmo.png",
    link: "https://www.kurtimmo.be/",
  },
  {
    title: "Torjoni Gov Bd",
    category: "Reactjs",
    subcategories: ["Bootstrap"],
    imageSrc: "/images/projects/torjoni-gov-bd.png",
    link: "",
  },
  {
    title: "Bvinvest",
    category: "Web Design",
    subcategories: ["Bootstrap"],
    imageSrc: "/images/projects/bvinvest.png",
    link: "https://www.bvinvest.be/",
  },
  {
    title: "Puresounds Cloud",
    category: "Nextjs",
    subcategories: ["Tailwind Css"],
    imageSrc: "/images/projects/puresounds-cloud.png",
    link: "https://www.puresounds.cloud",
  },
  {
    title: "Atlantis Decora",
    category: "Web Design",
    subcategories: ["Bootstrap"],
    imageSrc: "/images/projects/atlantisdecora.png",
    link: "https://atlantisdecora.com/",
  },
  {
    title: "Iqra Live",
    category: "Reactjs",
    subcategories: ["Bootstrap"],
    imageSrc: "/images/projects/iqra-live.png",
    link: "https://iqra-live.com",
  },
  {
    title: "Tsaoussoglou",
    category: "Web Design",
    subcategories: ["Bootstrap"],
    imageSrc: "/images/projects/tsaousoglou.png",
    link: "https://www.tsaoussoglou.com/gr/home",
  },
  {
    title: "Starzone Mobi",
    category: "Nextjs",
    subcategories: ["Nodejs"],
    imageSrc: "/images/projects/starzone-mobi.png",
    link: "http://starzone.mobi/",
  },
  {
    title: "Dmwatch",
    category: "Web Design",
    subcategories: ["Bootstrap"],
    imageSrc: "/images/projects/dmwatch.png",
    link: "https://dmwatch.com/",
  },
  {
    title: "Cv Surveylancer",
    category: "Nextjs",
    subcategories: ["Tailwind Css"],
    imageSrc: "/images/projects/cv-surveylancer.png",
    link: "https://cv.surveylancer.com/",
  },
  {
    title: "Clnracking",
    category: "Web Design",
    subcategories: ["Bootstrap"],
    imageSrc: "/images/projects/clnracking.png",
    link: "https://www.clnracking.com/en/",
  },
  {
    title: "Medico Bio",
    category: "Nextjs",
    subcategories: ["Tailwind Css"],
    imageSrc: "/images/projects/medico-bio.png",
    link: "https://medico.bio/",
  },
  {
    title: "Idealbd",
    category: "Web Design",
    subcategories: ["Bootstrap"],
    imageSrc: "/images/projects/web-design-img-10.png",
    link: "https://idealbd.net/",
  },
  {
    title: "Ausisdhaka",
    category: "Web Design",
    subcategories: ["Bootstrap"],
    imageSrc: "/images/projects/web-design-img-12.png",
    link: "https://ausisdhaka.edu.bd/",
  },

];

// CATEGORY LIST
const categories = ["All", "Web Design", "UI/UX Design", "Reactjs","Nextjs","Nodejs"];

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
            href={link} target="_blank"
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
