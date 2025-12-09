import { TransitionUp } from "@/animation/framerAnimation";
import React from "react";
import { FaFacebookF,FaInstagram,FaYoutube,FaTwitter ,FaMapMarkerAlt,FaPhoneAlt} from "react-icons/fa";
import { FaAnglesLeft } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";


const Footer = () => {
  return (
    <TransitionUp className="">
      {/* Main Footer */}
      <div
        className="rounded-t-3xl pt-20 pb-15 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/career-default-bg.svg')",
        }}
      >
        <div className="container grid grid-cols-1 md:grid-cols-5 gap-5">

          {/* Logo + About */}
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              {/* <div className="w-10 h-10 bg-gradient-to-tr from-red-400 to-amber-500 rounded-lg"></div>
              <h2 className="text-2xl font-semibold text-gray-800">MyPortfolio</h2>
              <span className="text-sm">™</span> */}
              <a className=" inline-block max-w-[200px] w-full" href="#"><img
              src="/images/logo.png"
              alt="Banner"
              className="w-full max-w-lg relative z-10"
            /></a>
            </div>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Affordable Website & App Development.
              <br />
              Powered by Next.js & Tailwind CSS.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-6 text-amber-500">
              <a href="#" className="hover:opacity-70">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:opacity-70">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:opacity-70">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="hover:opacity-70">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick links</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-amber-500 relative pl-5"><FaAnglesLeft className="absolute top-[2px] left-0 text-xs" />Home</a></li>
              <li><a href="#" className="hover:text-amber-500 relative pl-5"><FaAnglesLeft className="absolute top-[2px] left-0 text-xs" />About us</a></li>
              <li><a href="#" className="hover:text-amber-500 relative pl-5"><FaAnglesLeft className="absolute top-[2px] left-0 text-xs" />Projects</a></li>
              <li><a href="#" className="hover:text-amber-500 relative pl-5"><FaAnglesLeft className="absolute top-[2px] left-0 text-xs" />Services</a></li>
              <li><a href="#" className="hover:text-amber-500 relative pl-5"><FaAnglesLeft className="absolute top-[2px] left-0 text-xs" />Blog</a></li>
              <li><a href="#" className="hover:text-amber-500 relative pl-5"><FaAnglesLeft className="absolute top-[2px] left-0 text-xs" />Contact</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-amber-500 relative pl-5"><FaAnglesLeft className="absolute top-[2px] left-0 text-xs" />Fast Performance</a></li>
              <li><a href="#" className="hover:text-amber-500 relative pl-5"><FaAnglesLeft className="absolute top-[2px] left-0 text-xs" />SEO Ready</a></li>
              <li><a href="#" className="hover:text-amber-500 relative pl-5"><FaAnglesLeft className="absolute top-[2px] left-0 text-xs" />Mobile Friendly</a></li>
              <li><a href="#" className="hover:text-amber-500 relative pl-5"><FaAnglesLeft className="absolute top-[2px] left-0 text-xs" />Easy Customization</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-amber-500 relative pl-5"><FaMapMarkerAlt className="absolute top-[2px] left-0 text-xs" /> Metro Housing Bosila,Mohammadpur,Dhaka,Bangladesh.</a></li>
              <li><a href="#" className="hover:text-amber-500 relative pl-5"><FaPhoneAlt className="absolute top-[2px] left-1 text-xs" /> 01521236545</a></li>
              <li><a href="#" className="hover:text-amber-500 relative pl-5"><MdOutlineEmail className="absolute top-[2px] left-0 text-xs" /> info@example.com</a></li>
            </ul>
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
