import React from 'react';
import { Mic, Fingerprint, Lightbulb, Settings2, Bell, ClipboardList, AlertTriangle, Settings } from 'lucide-react'; 
// Using lucide-react icons. If you use Heroicons or Font Awesome, replace these imports.

const servicesData = [
  { name: 'Web Design', description: 'Modern & Responsive Web Design using HTML5, CSS3, Bootstrap5, Tailwind CSS & Modern Jquery.Clean, SEO-friendly & mobile-optimized UI with fast loading speed.', Icon: Mic },
  { name: 'Next Js', description: 'High-performance Web Apps built with Next.js and React.SEO-optimized, server-side rendered, and blazing fast.Scalable, responsive UI & modern features High speed performance.', Icon: Fingerprint },
  { name: 'React Js', description: 'Dynamic and Interactive UIs built with Reactjs.Reusable components, clean architecture, and fast rendering.Fully responsive design with Tailwind CSS or Bootstrap 5.', Icon: Lightbulb },
  { name: 'JavaScript', description: 'Powerful web functionality using vanilla JavaScript.Custom features, form validation, DOM manipulation, and animations.Optimized code for speed, interactivity,smooth user experience.', Icon: Settings2 },
  { name: 'Framer Animation', description: 'Smooth & modern UI animations with Framer Motion.Page transitions, micro-interactions & scroll-based effects.Built for React/Next.js with performance-optimized motion.', Icon: Bell },
  { name: 'Web Development', description: 'web development using modern technologies.From responsive UI to dynamic functionality with clean code.Built with HTML5, CSS3, JavaScript, React.js, Next.js & API integration.', Icon: ClipboardList },
  // { name: 'Services Name', description: 'Lorem Ipsum is simply dummy.', Icon: AlertTriangle },
  // { name: 'Services Name', description: 'Lorem Ipsum is simply dummy.', Icon: Settings },
];

const ServiceCard = ({ name, description, Icon }) => {
  return (
    <div className="bg-gray-100 px-4 py-8 rounded-xl shadow-lg border border-black/20 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
      <div className="w-16 h-16 flex items-center justify-center bg-[#fc9800] rounded-full mb-4 shadow-md">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {name}
      </h3>
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </div>
  );
};

const OurService = () => {
  return (
    <section className="bg-[#f0f5fe] py-16 md:py-24">
      <div className="container">
        <div className='bg-white p-10'>
            {/* Header Section */}
            <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#fc9800] uppercase tracking-wider">
                Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Our Services
            </h2>
            </div>
            
            {/* Services Grid (4 Columns on Desktop, 2 on Tablet) */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            
            {servicesData.map((service, index) => (
                <ServiceCard 
                key={index}
                name={service.name}
                description={service.description}
                Icon={service.Icon}
                />
            ))}
            
            </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;