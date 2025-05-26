import { Link } from "react-router-dom"; // ✅ Correct import
import { HiMail, HiOutlineLightBulb } from "react-icons/hi";

const TellAboutYourProject = () => {
  const scrollToServices = () => {
    const section = document.getElementById("Projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-100">
      {/* Icon */}
      <HiOutlineLightBulb className="text-[#222E4C] mb-4" size={100} />

      {/* Title */}
      <h1 className="text-3xl sm:text-5xl font-semibold text-gray-700 mb-2">
        Tell Me About Your Next
      </h1>
      <h2 className="text-3xl sm:text-5xl font-semibold text-gray-700 mb-6">
        Creative Project
      </h2>

      {/* Description */}
      <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-md">
        Let’s create captivating digital experiences that engage audiences and
        drive meaningful brand interactions across diverse platforms
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Link
          to="/Contact"
          className="w-full sm:w-auto px-6 py-3 bg-[#222E4C] text-white rounded-lg shadow-md flex items-center justify-center gap-2"
        >
          <HiMail size={20} />
          Get In Touch
        </Link>

        <button
          onClick={scrollToServices}
          className="w-full sm:w-auto px-6 py-3 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          ➜ See Projects
        </button>
      </div>
    </div>
  );
};

export default TellAboutYourProject;
