"use client";

import Link from "next/link";
import { usePortfolio } from "@/lib/store";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, toggleTheme } = usePortfolio();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 80; // Adjust if your header has a fixed height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // If on mobile and menu is open, close it after clicking
      if (mobileOpen) setMobileOpen(false);
    }
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="py-4 bg-[#ffffff] fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <a className="inline-block max-w-[120px] w-full" href="#">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-full max-w-lg relative z-10"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center text-gray-800 text-base gap-6">
            <button onClick={() => scrollToSection("home")} className="hover:text-[#fc9800] cursor-pointer">Home</button>
            <button onClick={() => scrollToSection("about")} className="hover:text-[#fc9800] cursor-pointer">About</button>
            <button onClick={() => scrollToSection("projects")} className="hover:text-[#fc9800] cursor-pointer">Projects</button>
            <button onClick={() => scrollToSection("services")} className="hover:text-[#fc9800] cursor-pointer">Services</button>
            <button onClick={() => scrollToSection("blog")} className="hover:text-[#fc9800] cursor-pointer">Blog</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-[#fc9800] cursor-pointer">Contact</button>

            <button
              onClick={toggleTheme}
              className="px-8 py-2 bg-[#fc9800] hover:bg-gray-800 text-white rounded-full"
            >
              {theme === "light" ? "Dark" : "Light"}
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((s) => !s)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fc9800]"
            >
              {/* Hamburger / Close Icon */}
              {mobileOpen ? (
                // Close (X)
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Slide-in Menu */}
      {/* Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${mobileOpen ? "opacity-70 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden={!mobileOpen}
        style={{ backgroundColor: mobileOpen ? "rgba(0,0,0,0.5)" : "transparent" }}
      />

      <aside
        className={`md:hidden fixed top-0 right-0 z-50 h-full w-72 max-w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!mobileOpen}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <a href="#" className="inline-block max-w-[120px] w-full">
              <img src="/images/logo.png" alt="Logo" className="w-full max-w-[120px]" />
            </a>
            <button
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fc9800]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1">
            <ul className="flex flex-col gap-4 text-gray-800 text-lg">
              <li>
                <button onClick={() => scrollToSection("home")} className="text-left cursor-pointer w-full hover:text-[#fc9800]">Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="text-left cursor-pointer w-full hover:text-[#fc9800]">About</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("projects")} className="text-left cursor-pointer w-full hover:text-[#fc9800]">Projects</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-left cursor-pointer w-full hover:text-[#fc9800]">Services</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("blog")} className="text-left cursor-pointer w-full hover:text-[#fc9800]">Blog</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-left cursor-pointer w-full hover:text-[#fc9800]">Contact</button>
              </li>
            </ul>
          </nav>

          <div className="mt-6">
            <button
              onClick={() => { toggleTheme(); /* keep the mobile menu open or close? we close for better UX */ setMobileOpen(false); }}
              className="w-full px-6 py-3 bg-[#fc9800] hover:bg-gray-800 text-white rounded-full"
            >
              {theme === "light" ? "Dark" : "Light"}
            </button>
          </div>
        </div>
      </aside>
    </header>
  );
}
