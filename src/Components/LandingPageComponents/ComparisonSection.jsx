import React from 'react';
import { Link } from 'react-router-dom';

const ComparisonSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-semibold text-gray-700">Precision vs Basic</h2>
      <p className="text-gray-700 mt-4 mb-10 text-lg max-w-2xl mx-auto">
        Precision-driven design and animations, surpassing static and unengaging layouts.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Me Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full md:w-[400px]">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Me</h3>
          <hr className="border-dotted border-gray-300 mb-6" />
          <ul className="text-left text-gray-700 space-y-3">
            <li>✓ Custom, high-performance websites</li>
            <li>✓ Pixel-perfect UI/UX design</li>
            <li>✓ Seamless animations & interactions</li>
            <li>✓ Scalable & future-proof solutions</li>
            <li>✓ Optimized for speed & conversions</li>
            <li>✓ Advanced SEO tactics for enhanced visibility</li>
          </ul>
          <button className="mt-8 bg-[#222E4C] text-white px-6 py-3 rounded-xl shadow-md  transition-all w-full">
             <Link to='/Contact' >↗ Contact Me</Link>
          </button>
        </div>

        {/* Others Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full md:w-[400px]">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Others</h3>
          <hr className="border-dotted border-gray-300 mb-6" />
          <ul className="text-left text-gray-700 space-y-3">
            <li>✓ Generic templates</li>
            <li>✓ Basic design skills</li>
            <li>✓ Limited customization</li>
            <li>✓ Slow performance</li>
            <li>✓ Lacks scalability</li>
            <li>✓ Static & unengaging layouts</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
