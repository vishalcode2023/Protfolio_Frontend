import TopNavbar from "../NavbarComponents/TopNavbar";
import BottomNavbar from "../NavbarComponents/BottomNavbar";
import { FiArrowRight } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";


const LandingPage = () => {

  const scrollToServices = () => {
    const section = document.getElementById("Projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className="bg-gray-100 w-full h-[88vh]">
      <div className="py-5">
        <TopNavbar />
      </div>
      <div className="flex flex-col items-center my-28 h-full ">
        <div className="text-center space-y-6  max-w-6xl ">
          <div className=" flex items-end mx-4">
            <div className="relative w-20 h-20 sm:w-40 sm:h-40 md:w-28 md:h-24">
              <img
                src="/profile.jpeg"
                alt="Vishal's Profile"
                className="w-[80%] h-full object-cover rounded-xl"
              />
            </div>

            <h1 className="text-4xl text-gray-600 sm:text-4xl md:text-7xl font-bold  whitespace-nowrap font-my4 mr-5 md:mx-8 md:mr-0">
  I&apos;m Vishal Gowda S
</h1>
          </div>

          <div className="flex mx-5 items-center">
            <div>
              <h2 className="text-4xl text-gray-600 sm:text-2xl md:text-7xl font-bold  whitespace-nowrap font-my4">
  Remote Designer
</h2>
            </div>
            <div className="relative w-16 h-16 sm:w-40 sm:h-40 md:w-24 md:h-24 mx-auto">
              <img
                src="https://framerusercontent.com/images/F8rOBHbbIkzGRluKefWlxCX9WI.png?scale-down-to=512"
                alt="Vishal's Profile"
                className="w-full h-full object-cover rounded-xl mx-2"
              />
            </div>
            <div className="relative w-16 h-16 sm:w-40 sm:h-40 md:w-24 md:h-24 mx-auto">
              <img
                src="https://framerusercontent.com/images/XJP6N21SKyA8OD0sTiV9H2m0.jpg?scale-down-to=1024"
                alt="Vishal's Profile"
                className="w-full h-full object-cover rounded-xl mx-4"
              />
            </div>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            I specialize in creating thoughtful and impactful products,
            collaborating with startups and leading brands.
          </p>

          <div className="flex sm:flex-row items-center justify-center gap-4">
            <Link to='/Contact' className="bg-[#222E4C] text-white transition-colors duration-300 border border-gray-800 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm sm:text-base rounded-md flex items-center justify-between">
              Get In Touch <MdArrowOutward className="mx-2 w-5 h-5" />
            </Link>
            <button onClick={scrollToServices} className="text-gray-800 hover:bg-gray-100 transition-colors duration-300 border border-gray-800 px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm sm:text-base rounded-md flex items-center justify-between">
              See Projects <FiArrowRight className="mx-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="">
           <BottomNavbar />
      </div>
    </div>
  );
};

export default LandingPage;
