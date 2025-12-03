"use client";

import React, { useState, useEffect, useRef } from 'react';
// import { Fingerprint, Mic, Lightbulb, Settings2 } from 'lucide-react'; 
import { 
  FaCalendarAlt, 
  FaProjectDiagram, 
  FaSmile, 
  FaAward 
} from 'react-icons/fa';
// Assuming you are using lucide-react for icons.

// --- INTERFACES (TypeScript Types) ---
interface CounterItem {
  id: number;
  Icon: React.ElementType; // Type for the Lucide icon component
  value: number;
  label: string;
}

interface CountUpProps {
  end: number;
  duration?: number;
}

// --- 1. Custom Hook for Count Up Animation ---

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
      const currentValue = Math.floor(startCount + percentage * (end - startCount));

      setCount(currentValue);

      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
    
    // Cleanup function (optional, but good practice)
    return () => {
        startTimeRef.current = null;
    };
  }, [end, duration]);

  return count;
};

// --- 2. DATA ---

const counterData: CounterItem[] = [
  { id: 1, Icon: FaCalendarAlt, value: 5, label: 'Years Experience' },
  { id: 2, Icon: FaProjectDiagram, value: 200, label: 'Completed Projects' },
  { id: 3, Icon: FaSmile, value: 20, label: 'Happy Customers' },
  { id: 4, Icon: FaAward, value: 2, label: 'Honors and Awards' },
];

// --- 3. CounterBlock Component ---

const CounterBlock: React.FC<CounterItem> = ({ Icon, value, label }) => {
  // Use the custom hook for animation
  const animatedValue = useCountUp({ end: value });

  return (
    <div className="w-full flex flex-col items-center text-center bg-white rounded-xl border border-black/20 border-l-amber-500 px-4 py-10">
      <div className="flex justify-center items-center space-x-2 sm:space-x-4">
        <div className='relative text-left pl-15'>
            {/* Icon (Mic/Fingerprint/Bulb/Settings) */}
            <span className='bg-amber-500 border-dotted flex justify-center items-center absolute top-2 left-0 w-12 h-12 rounded-full'>
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-sm text-white" /> 
            </span>
            {/* Animated Number */}
            <strong className="text-3xl sm:text-4xl font-bold text-gray-900">
                {animatedValue.toLocaleString()}
            </strong>
            {/* Label (User/Hours/Clients/Project) */}
            <p className="text-xs uppercase tracking-wider text-gray-600">
                {label}
            </p>
        </div>
      </div>
    </div>
  );
};

// --- 4. Main Component ---

const CountersSection: React.FC = () => {
  return (
    <section id="counters" className="py-16 md:py-24 bg-white">
      <div className="container">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-amber-500 uppercase tracking-wider">
            Counters
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Our Numbers
          </h2>
        </div>
        
        {/* Counters Grid (4 Columns on Desktop, 2 on Mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          
          {counterData.map((item) => (
            <CounterBlock 
              key={item.id}
              Icon={item.Icon}
              value={item.value}
              label={item.label}
            />
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default CountersSection;