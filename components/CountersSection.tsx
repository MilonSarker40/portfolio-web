"use client";

import React, { useState, useEffect, useRef } from "react";
import { TransitionUp } from "@/animation/framerAnimation";
import {
  FaCalendarAlt,
  FaProjectDiagram,
  FaSmile,
  FaAward,
} from "react-icons/fa";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

interface CounterItem {
  id: number;
  Icon: React.ElementType;
  value: number;
  label: string;
}

interface CounterBlockProps {
  Icon: React.ElementType;
  value: number;
  label: string;
}

interface CountUpProps {
  end: number;
  duration?: number;
}

/* -------------------------------------------------------------------------- */
/*                            COUNT-UP HOOK                                   */
/* -------------------------------------------------------------------------- */

const useCountUp = ({ end, duration = 2000 }: CountUpProps): number => {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const startCount = 0;

    const animateCount: FrameRequestCallback = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);
      const currentValue = Math.floor(
        startCount + percentage * (end - startCount)
      );

      setCount(currentValue);

      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);

    return () => {
      startTimeRef.current = null;
    };
  }, [end, duration]);

  return count;
};

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const counterData: CounterItem[] = [
  { id: 1, Icon: FaCalendarAlt, value: 5, label: "Years Experience" },
  { id: 2, Icon: FaProjectDiagram, value: 200, label: "Completed Projects" },
  { id: 3, Icon: FaSmile, value: 20, label: "Happy Customers" },
  { id: 4, Icon: FaAward, value: 2, label: "Honors and Awards" },
];

/* -------------------------------------------------------------------------- */
/*                              COUNTER BLOCK                                 */
/* -------------------------------------------------------------------------- */

function CounterBlock({ Icon, value, label }: CounterBlockProps) {
  const animatedValue = useCountUp({ end: value });

  return (
    <div className="w-full flex flex-col items-center text-center bg-white rounded-xl border border-black/20 border-l-amber-500 px-4 py-10">
      <div className="relative w-full text-left pl-14">
        <span className="bg-amber-500 flex justify-center items-center absolute top-1 left-0 w-12 h-12 rounded-full">
          <Icon className="w-5 h-5 text-white" />
        </span>

        <strong className="text-3xl sm:text-4xl font-bold text-gray-900">
          {animatedValue.toLocaleString()}
        </strong>

        <p className="text-xs uppercase tracking-wider text-gray-600">
          {label}
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                             MAIN SECTION                                    */
/* -------------------------------------------------------------------------- */

export default function CountersSection() {
  return (
    <section id="counters" className="py-16 md:py-24 bg-white">
      <TransitionUp className="container">
        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-amber-500 uppercase tracking-wider">
            Counters
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Our Numbers
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {counterData.map((item) => (
            <CounterBlock
              key={item.id}
              Icon={item.Icon}
              value={item.value}
              label={item.label}
            />
          ))}
        </div>
      </TransitionUp>
    </section>
  );
}
