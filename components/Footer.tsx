import React from "react";
import { FaFacebookF,FaInstagram,FaYoutube,FaTwitter   } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
      {/* Main Footer */}
      <div
        className="rounded-t-3xl pt-20 pb-15 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/footer-bg.png')",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Logo + About */}
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-tr from-red-400 to-amber-500 rounded-lg"></div>
              <h2 className="text-2xl font-semibold text-gray-800">MyPortfolio</h2>
              <span className="text-sm">™</span>
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
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Products</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-amber-500">Portfolio Website</a></li>
              <li><a href="#" className="hover:text-amber-500">Business Website</a></li>
              <li><a href="#" className="hover:text-amber-500">E-commerce App</a></li>
              <li><a href="#" className="hover:text-amber-500">Admin Dashboard</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-amber-500">Fast Performance</a></li>
              <li><a href="#" className="hover:text-amber-500">SEO Ready</a></li>
              <li><a href="#" className="hover:text-amber-500">Mobile Friendly</a></li>
              <li><a href="#" className="hover:text-amber-500">Easy Customization</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Help</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-amber-500">Support</a></li>
              <li><a href="#" className="hover:text-amber-500">Get a Quote</a></li>
              <li><a href="#" className="hover:text-amber-500">License</a></li>
              <li><a href="#" className="hover:text-amber-500">Hire Us</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-4 text-sm text-white bg-[#000]">
        Copyright © {new Date().getFullYear()}. Made with ❤️ by Milon.
      </div>
    </footer>
  );
};

export default Footer;
