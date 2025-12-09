"use client";

import Link from "next/link";
import { usePortfolio } from "@/lib/store";

export default function Header() {
  const { theme, toggleTheme } = usePortfolio();

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
    }
  };

  return (
    <header className="py-4 bg-[#ffffff] fixed w-full z-50 shadow-sm">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <a className="inline-block max-w-[200px] w-full" href="#">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-full max-w-lg relative z-10"
            />
          </a>

          {/* Menu Items */}
          <div className="flex items-center text-gray-800 text-base gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-[#fc9800]"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-[#fc9800]"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-[#fc9800]"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-[#fc9800]"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("blog")}
              className="hover:text-[#fc9800]"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-[#fc9800]"
            >
              Contact
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="px-8 py-2 bg-[#fc9800] hover:bg-gray-800 text-white rounded-full"
            >
              {theme === "light" ? "Dark" : "Light"}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
