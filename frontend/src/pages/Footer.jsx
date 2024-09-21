import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#34495E] via-[#2C3E50] to-[#34495E] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Portfolio..</h2>
            <p className="text-gray-200 text-sm  ">
              I'm a passionate full-stack developer, always keen to explore new
              technologies and deliver quality software solutions.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-gray-300 hover:text-[#1ABC9C]">
                  About
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-gray-300 hover:text-[#1ABC9C]"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-[#1ABC9C]"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#1ABC9C]">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold mb-3">Connect With Me</h2>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://github.com/manukumar07"
                className="text-white hover:text-[#1ABC9C] transition-colors duration-300"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/manu-kumar-pal/"
                className="text-white hover:text-[#1ABC9C] transition-colors duration-300"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#1ABC9C] transition-colors duration-300"
              >
                <FaTwitter size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-[#1ABC9C] my-8" />

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <p className="text-white mb-4 md:mb-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} Mk. All rights reserved.
          </p>
          <p className="text-gray-300 text-center md:text-left">
            Made with <FaHeart className="text-red-500 inline-block" /> by Manu
            Kumar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
