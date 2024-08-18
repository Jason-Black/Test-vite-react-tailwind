import React from 'react';

function ServicesSection() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1: Web Design */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-indigo-500 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 11h3v7h10v-7h3l-8-8-8 8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Web Design</h3>
            <p className="mt-2 text-gray-600">
              Crafting beautiful and functional websites tailored to your brand's identity.
            </p>
          </div>

          {/* Service 2: SEO Optimization */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-green-500 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13 7H7v6h6V7z" />
                <path
                  fillRule="evenodd"
                  d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm12 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">SEO Optimization</h3>
            <p className="mt-2 text-gray-600">
              Boost your website's visibility and ranking on search engines with our expert SEO services.
            </p>
          </div>

          {/* Service 3: Digital Marketing */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-pink-500 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5 3a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1H5zM4 2a2 2 0 012-2h8a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Digital Marketing</h3>
            <p className="mt-2 text-gray-600">
              Drive more traffic and increase conversions with our comprehensive digital marketing strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
