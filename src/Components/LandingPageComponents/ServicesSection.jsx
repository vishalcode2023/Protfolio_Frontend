import React from "react";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const cards = [
  {
    title: "UX & UI",
    description:
      "Crafting seamless, user-friendly interfaces that enhance engagement and usability.",
    image:
      "https://framerusercontent.com/images/SG0ZbESc0TAkt6qXYHYpwhuuuME.png?scale-down-to=1024", // Replace with your actual image path
  },
  {
    title: "MERN Development",
    description:
      "Building high-performance, interactive websites using MERN, powerful design and development tools for seamless user experiences.",
    icon: "⚡",
  },
  {
    title: "Design & Creativity",
    description:
      "Creating visually compelling designs that truly resonate with your target audience and brand.",
    image:
      "https://framerusercontent.com/images/8P0e6AzdnfLABVNNwGpdPbhIu5Q.png?scale-down-to=1024", // Replace with your actual image path
  },
  {
    title: "Interactive Web Experiences",
    description:
      "Interactive websites with Framer’s advanced design and development tools to deliver smooth and engaging user experiences.",
    icon: "💻",
  },
];

export default function ServicesSection() {
  return (
    <div className="bg-gray-100 min-h-screen p-6 md:p-10" id="Services">
      <div className="heading text-center py-5 text-4xl text-gray-700">
        <h2 className="font-my3 font-bold my-5">Crafting Digital Excellence</h2>
        <p className="text-lg font-my3 text-gray-500 relative -top-4">
          Building smooth and engaging digital interactions that elevate user
          satisfaction
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-4 md:relative md:left-34">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl p-6 shadow-md flex flex-col gap-4 items-start md:items-center
            ${card.image ? "md:flex-row md:justify-center" : ""}
            ${index === 0 || index === 2 ? "md:col-span-2" : "md:col-span-1"}
          `}
          >
            {card.image && (
              <img // Changed from <Image> to <img>
                src={card.image}
                alt={card.title}
                className="w-full md:w-1/2 rounded-xl object-cover"
              />
            )}
            <div className="flex flex-col gap-2">
              <div className="text-3xl">{card.icon}</div>
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10 flex justify-center">
        {/* <Link className="bg-[#222E4C] text-white transition-colors duration-300 border border-gray-800 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm sm:text-base rounded-md flex items-center justify-between">
              Contact <MdArrowOutward className="mx-2 w-5 h-5" />
        </Link> */}
      </div>
    </div>
  );
}
