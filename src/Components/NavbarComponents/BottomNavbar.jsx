import React from "react";
import { Link } from "react-router-dom";

const BottomNavbar = () => {
  const scrollToSection = () => {
    const section = document.getElementById("Projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const section = document.getElementById("Services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-[#1f2944] text-white rounded-full shadow-xl flex gap-4 items-center justify-center w-auto backdrop-blur-lg border border-white/20">
      <button
        onClick={scrollToSection}
        className="px-3 py-1 rounded-md hover:bg-white/10 font-medium"
      >
        Projects
      </button>
      <button
        onClick={scrollToServices}
        className="px-3 py-1 rounded-md hover:bg-white/10 font-medium"
      >
        Services
      </button>
      <Link to='/Contact' className="px-3 py-1 rounded-md hover:bg-white/10 font-medium">
        Contact
      </Link>
    </div>
  );
};

export default BottomNavbar;
