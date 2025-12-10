import { TransitionUp } from "@/animation/framerAnimation";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaAnglesLeft } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <TransitionUp className="">
      {/* Main Footer */}
      <div
        className="rounded-t-3xl pt-20 pb-12 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/career-default-bg.svg')",
        }}
      >
        <div className="container mx-auto px-4">

          {/* FLEX WRAPPER */}
          <div className="flex flex-wrap lg:flex-nowrap gap-10">

            {/* Logo + About */}
            <div className="w-full md:w-1/2 lg:w-[30%]">
              <div className="flex items-center gap-2">
                <a className="inline-block max-w-[120px] w-full" href="#">
                  <img
                    src="/images/logo.png"
                    alt="Logo"
                    className="w-full max-w-lg relative z-10"
                  />
                </a>
              </div>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Affordable Website & App Development.
                <br />
                Powered by Next.js & Tailwind CSS.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-5 mt-6 text-amber-500">
                <a href="#" className="hover:opacity-70"><FaFacebookF size={20} /></a>
                <a href="#" className="hover:opacity-70"><FaInstagram size={20} /></a>
                <a href="#" className="hover:opacity-70"><FaYoutube size={20} /></a>
                <a href="#" className="hover:opacity-70"><FaTwitter size={20} /></a>
              </div>
            </div>

            {/* Quick links */}
            <div className="w-full md:w-1/2 lg:w-[20%]">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick links</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="relative pl-6">
                  <FaAnglesLeft className="absolute left-0 top-1 text-xs" />
                  <a href="#" className="hover:text-amber-500">Home</a>
                </li>
                <li className="relative pl-6">
                  <FaAnglesLeft className="absolute left-0 top-1 text-xs" />
                  <a href="#" className="hover:text-amber-500">About us</a>
                </li>
                <li className="relative pl-6">
                  <FaAnglesLeft className="absolute left-0 top-1 text-xs" />
                  <a href="#" className="hover:text-amber-500">Projects</a>
                </li>
                <li className="relative pl-6">
                  <FaAnglesLeft className="absolute left-0 top-1 text-xs" />
                  <a href="#" className="hover:text-amber-500">Services</a>
                </li>
                <li className="relative pl-6">
                  <FaAnglesLeft className="absolute left-0 top-1 text-xs" />
                  <a href="#" className="hover:text-amber-500">Blog</a>
                </li>
                <li className="relative pl-6">
                  <FaAnglesLeft className="absolute left-0 top-1 text-xs" />
                  <a href="#" className="hover:text-amber-500">Contact</a>
                </li>
              </ul>
            </div>

            {/* Features */}
            <div className="w-full md:w-1/2 lg:w-[20%]">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="relative pl-6">
                  <FaAnglesLeft className="absolute left-0 top-1 text-xs" />
                  Fast Performance
                </li>
                <li className="relative pl-6">
                  <FaAnglesLeft className="absolute left-0 top-1 text-xs" />
                  SEO Ready
                </li>
                <li className="relative pl-6">
                  <FaAnglesLeft className="absolute left-0 top-1 text-xs" />
                  Mobile Friendly
                </li>
                <li className="relative pl-6">
                  <FaAnglesLeft className="absolute left-0 top-1 text-xs" />
                  Easy Customization
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="w-full md:w-1/2 lg:w-[20%]">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="relative pl-7">
                  <FaMapMarkerAlt className="absolute left-0 top-[6px] text-xs" />
                  Metro Housing Bosila, Mohammadpur, Dhaka, Bangladesh.
                </li>
                <li className="relative pl-7">
                  <FaPhoneAlt className="absolute left-0 top-[6px] text-xs" />
                  01521236545
                </li>
                <li className="relative pl-7">
                  <MdOutlineEmail className="absolute left-0 top-[6px] text-xs" />
                  info@example.com
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-4 text-sm text-white bg-[#000]">
        Copyright © {new Date().getFullYear()}. Made with ❤️ by Milon.
      </div>
    </TransitionUp>
  );
};

export default Footer;
