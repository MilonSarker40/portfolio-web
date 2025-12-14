"use client";

import Image from "next/image";
import { TransitionUp } from "@/animation/framerAnimation";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

interface AboutItem {
  id: number;
  headline: string;
  description: string;
  imageSrc: string;
  link: string;
}

interface ContentBlockProps {
  headline: string;
  description: string;
  link: string;
}

interface ImageBlockProps {
  src: string;
  alt: string;
}

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const aboutData: AboutItem[] = [
  {
    id: 1,
    headline: "Puresounds Cloud",
    description:
      "Fast loading, optimized assets, and smooth interactions using React.js, Next.js, Zustand, Axios, and reusable component architecture.",
    imageSrc: "/images/projects/puresounds-cloud.png",
    link: "https://www.puresounds.cloud/",
  },
  {
    id: 2,
    headline: "Feestburo Be",
    description:
      "I craft pixel-perfect interfaces using HTML, CSS, Bootstrap, Jquery, Javascript, and modern design systems. Every layout is clean, intuitive, and built with a user-first approach.",
    imageSrc: "/images/projects/feestburo-be.png",
    link: "https://www.feestburo.be/",
  },
  {
    id: 3,
    headline: "Alphagas Sa",
    description:
      "I craft pixel-perfect interfaces using HTML, CSS, Bootstrap, Jquery, Javascript and modern design systems.",
    imageSrc: "/images/projects/alphagas-sa-en.png",
    link: "https://alphagas-sa.com/en/home",
  },
];

/* -------------------------------------------------------------------------- */
/*                               SUB COMPONENTS                               */
/* -------------------------------------------------------------------------- */

function ContentBlock({ headline, description, link }: ContentBlockProps) {
  return (
    <div className="p-6 min-h-[300px] bg-white shadow-xl rounded-lg flex flex-col justify-center text-center">
      <p className="text-sm font-semibold text-amber-500 uppercase tracking-wider">
        Best Project
      </p>
      <h3 className="mt-2 text-xl font-bold text-gray-900">{headline}</h3>
      <p className="mt-4 text-gray-600 text-sm">{description}</p>
      <a
        href={link}
        target="_blank"
        className="mt-6 inline-block bg-amber-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-black transition text-center mx-auto"
        style={{ maxWidth: "140px" }}
      >
        Read More
      </a>
    </div>
  );
}

function ImageBlock({ src, alt }: ImageBlockProps) {
  return (
    <div className="relative min-h-[300px] overflow-hidden rounded-lg shadow-xl">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-opacity duration-300"
        sizes="(max-width: 1024px) 100vw, 33vw"
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 ABOUT US                                   */
/* -------------------------------------------------------------------------- */

export default function AboutUs() {
  const layout = [
    { type: "image", data: aboutData[0] },
    { type: "content", data: aboutData[0] },
    { type: "image", data: aboutData[1] },
    { type: "content", data: aboutData[2] },
    { type: "image", data: aboutData[2] },
    { type: "content", data: aboutData[1] },
  ] as const;

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* BACKGROUND SHAPES */}
      <div className="absolute left-0 max-w-[600px] w-full inset-y-0 animate-float-left">
        <Image
          src="/images/shape-15.png"
          alt="Left Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 max-w-[600px] w-full animate-float-right">
        <Image
          src="/images/shape-16.png"
          alt="Right Background"
          width={600}
          height={600}
          className="object-cover"
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-white p-4 lg:p-10">
          {layout.map((item, index) => (
            <TransitionUp key={index} delay={index * 0.3}>
              {item.type === "image" ? (
                <ImageBlock
                  src={item.data.imageSrc}
                  alt={item.data.headline}
                />
              ) : (
                <ContentBlock
                  headline={item.data.headline}
                  description={item.data.description}
                  link={item.data.link}
                />
              )}
            </TransitionUp>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes floatLeft {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes floatRight {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(20px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-float-left {
          animation: floatLeft 6s ease-in-out infinite;
        }

        .animate-float-right {
          animation: floatRight 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
