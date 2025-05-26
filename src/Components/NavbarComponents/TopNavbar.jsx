import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const TopNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full top-0 fixed h-16 flex items-center justify-around md:justify-between md:px-24 z-10 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-white/30 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="heading font-my6">
        <h3 className="text-2xl font-bold">Vishal Gowda s</h3>
      </div>

      <div className="heading flex items-center justify-center">
        {/* Available for work section: hidden on mobile */}
        <div className="mr-5 hidden md:flex items-center gap-2">
          <div className="relative font-my3">
            <span className="absolute top-2 -left-0.5 inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </div>
          <h2 className="font-my4 text-2xl">available for work</h2>
        </div>

        <div className="flex gap-2 text-2xl md:border-l pl-4">
          <a
            href="https://instagram.com/__its__me__vishal_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/in/vishal-gowda-aa0177340"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
