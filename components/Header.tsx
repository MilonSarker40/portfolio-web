"use client";
import Link from "next/link";
import { usePortfolio } from "@/lib/store";

export default function Header() {
  const { theme, toggleTheme } = usePortfolio();

  return (
    <header className="py-4 bg-[#ffffff]">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <nav className="flex justify-between items-center">
                        <h1 className="text-xl font-bold">Portfolio</h1>

                        <div className="flex items-center text-gray-800 text-base gap-6">
                            <Link className="hover:text-[#fc9800]" href="/">Home</Link>
                            <Link className="hover:text-[#fc9800]" href="/about">About</Link>
                            <Link className="hover:text-[#fc9800]" href="/projects">Projects</Link>
                            <Link className="hover:text-[#fc9800]" href="/projects">Services</Link>
                            <Link className="hover:text-[#fc9800]" href="/projects">Blog</Link>
                            <Link className="hover:text-[#fc9800]" href="/contact">Contact</Link> 

                            <button
                            onClick={toggleTheme}
                            className="px-8 py-2 bg-[#fc9800] hover:bg-gray-800 text-white rounded-full"
                            >
                            {theme === "light" ? "Dark" : "Light"}
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  );
}
