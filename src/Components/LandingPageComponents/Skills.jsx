import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Skills = () => {
  const socialLinks = [
    // {
    //   icon: FaFacebookF,
    //   url: "https://www.facebook.com/vishal.gowda", // Replace with your actual Facebook profile URL
    // },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/__its__me__vishal_", // Replace with your actual Instagram profile URL
    },
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/vishal-gowda-aa0177340/", // Replace with your actual LinkedIn profile URL
    },
  ];

  return (
    <div className="w-full h-auto bg-gray-100">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-start gap-6 py-6 md:h-[90vh]">
        {/* Profile Card */}
        <div className="w-full md:w-[30%] md:h-full">
          <div className="w-full h-full text-[#F2F8FC] shadow-lg rounded-2xl bg-white flex flex-col justify-between">
            {/* Image */}
            <div className="w-[98%] m-auto relative top-1 h-[250px] md:h-[280px] bg-gray-300 rounded-2xl overflow-hidden">
              <img
                src="./profileimg1.jpeg"
                alt="Skills"
                className="w-full h-full object-center rounded-2xl"
              />
            </div>

            {/* Availability */}
            <div className="flex my-8 justify-center items-center gap-2">
              <div className="relative">
                <span className="absolute top-2 -left-0.5 inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </div>
              <h2 className="font-my4 text-2xl font-bold text-gray-700">
                available for work
              </h2>
            </div>

            {/* Name */}
            <div className="text-center font-my4 text-gray-700 text-2xl font-bold -mt-4">
              <h3 className="text-4xl font-bold">Vishal Gowda s</h3>
              <p className="text-lg w-[90%] m-auto py-1">
                Web Design That Connects – Built in India
              </p>
            </div>

            {/* Socials */}
            <div className="flex items-center justify-center gap-2 text-3xl my-4">
              {socialLinks.map(({ icon: Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 bg-gray-300 w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-400 transition duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Button */}
            <div className="w-full flex items-center justify-center pb-5">
              <Link
                to="/Contact"
                className="bg-[#222E4C] text-white transition-colors duration-300 border border-gray-800 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm sm:text-base rounded-md flex items-center justify-between"
              >
                Contact Me <MdArrowOutward className="mx-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="w-full md:flex-col items-center justify-center h-full md:w-[68%] md:h-full rounded-2xl p-6 bg-white shadow-md overflow-y-auto">
          {/* Intro */}
          <div className="mb-6">
            <p className="text-lg md:text-lg font-semibold text-gray-700">
              I’m Vishal Gowda, a passionate Web Designer & Developer based in
              the vibrant country of India. I blend creative design with precise
              technical execution to deliver outstanding digital experiences.
            </p>
          </div>

          {/* Skills */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-6">
            {[
              "Product Design",
              "UX Design",
              "UI Design",
              "Framer",
              "Interaction Design",
              "Branding",
              "UX Research",
            ].map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-lg"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Experience */}
          <div className="space-y-4">
            {[
              {
                title: "Freelance",
                company: "ClicNGro",
                year: "2025",
              },
              {
                title: "Freelance",
                company: "Epxiable",
                year: "2025",
              },
              {
                title: "Freelance",
                company: "Swan Sorters",
                year: "2025",
              },
              {
                title: "Freelance",
                company: "MIT College Project",
                year: "2025",
              },
              {
                title: "Freelance",
                company: "Diploma Project",
                year: "2025",
              },
            ].map((job, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-xl"
              >
                <div className="text-gray-800 font-medium">{job.title}</div>
                <div className="text-gray-600">{job.company}</div>
                <div className="text-gray-500 text-sm">{job.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
