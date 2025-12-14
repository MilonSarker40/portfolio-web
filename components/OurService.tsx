"use client";

import Image from "next/image";
import { TransitionUp } from "@/animation/framerAnimation";
import {
  Mic,
  Fingerprint,
  Lightbulb,
  Settings2,
  Bell,
  ClipboardList,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

interface ServiceItem {
  name: string;
  description: string;
  Icon: React.ElementType;
}

interface ServiceCardProps {
  name: string;
  description: string;
  Icon: React.ElementType;
}

interface OurServiceProps {
  id?: string;
}

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const servicesData: ServiceItem[] = [
  {
    name: "Web Design",
    description:
      "Modern & Responsive Web Design using HTML5, CSS3, Bootstrap5, Tailwind CSS & modern jQuery. Clean, SEO-friendly & mobile-optimized UI with fast loading speed.",
    Icon: Mic,
  },
  {
    name: "Next Js",
    description:
      "High-performance web apps built with Next.js and React. SEO-optimized, server-side rendered, and blazing fast with scalable modern UI.",
    Icon: Fingerprint,
  },
  {
    name: "React Js",
    description:
      "Dynamic and interactive UIs built with React.js. Reusable components, clean architecture, and fast rendering with responsive design.",
    Icon: Lightbulb,
  },
  {
    name: "JavaScript",
    description:
      "Powerful web functionality using vanilla JavaScript. Custom features, form validation, DOM manipulation, and smooth animations.",
    Icon: Settings2,
  },
  {
    name: "Framer Animation",
    description:
      "Smooth & modern UI animations with Framer Motion. Page transitions, micro-interactions & scroll-based effects optimized for React.",
    Icon: Bell,
  },
  {
    name: "Web Development",
    description:
      "Full web development using modern technologies. Responsive UI, dynamic functionality, clean code, and API integration.",
    Icon: ClipboardList,
  },
];

/* -------------------------------------------------------------------------- */
/*                               SERVICE CARD                                 */
/* -------------------------------------------------------------------------- */

function ServiceCard({ name, description, Icon }: ServiceCardProps) {
  return (
    <div
      className="bg-gray-100 px-4 py-8 rounded-xl shadow-lg border border-black/20
                 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1
                 flex flex-col items-center text-center h-full"
    >
      <div className="w-16 h-16 flex items-center justify-center bg-[#fc9800] rounded-full mb-4 shadow-md">
        <Icon className="w-8 h-8 text-white" />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>

      <p className="text-gray-600 text-sm flex-grow">{description}</p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               MAIN SECTION                                 */
/* -------------------------------------------------------------------------- */

export default function OurService({ id }: OurServiceProps) {
  return (
    <section
      id={id}
      className="bg-[#f0f5fe] py-16 md:py-24 relative overflow-hidden"
    >
      {/* LEFT BG */}
      <div className="absolute left-0 max-w-[600px] w-full inset-y-0 animate-float-left">
        <Image
          src="/images/shape-13.png"
          alt="Left Background"
          fill
          className="object-cover opacity-80"
          priority
        />
      </div>

      {/* RIGHT BG */}
      <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 max-w-[600px] w-full animate-float-right">
        <Image
          src="/images/shape-14.png"
          alt="Right Background"
          width={600}
          height={600}
          className="object-cover opacity-80"
        />
      </div>

      <TransitionUp className="container relative z-10">
        <div className="bg-white py-8 lg:py-10 px-5 lg:px-10">
          {/* HEADER */}
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-[#fc9800] uppercase tracking-wider">
              Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Our Services
            </h2>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => (
              <TransitionUp key={service.name} delay={index * 0.2}>
                <ServiceCard
                  name={service.name}
                  description={service.description}
                  Icon={service.Icon}
                />
              </TransitionUp>
            ))}
          </div>
        </div>
      </TransitionUp>

      <style jsx>{`
        @keyframes floatLeft {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }

        @keyframes floatRight {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(20px) scale(1.05);
          }
          100% {
            transform: translateY(0) scale(1);
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
