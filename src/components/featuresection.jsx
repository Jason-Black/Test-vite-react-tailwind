import React from 'react';

function FeatureSection() {
  return (
    <div className="bg-gray-100 py-12">
      {/* Background color (bg-gray-100) and padding (py-12) */}
      <div className="max-w-6xl mx-auto px-6">
        {/* Max width (max-w-6xl), horizontal padding (px-6) */}
        <h2 className="text-3xl font-bold text-center text-gray-800">
          {/* Text size (text-3xl), text color (text-gray-800), and text alignment (text-center) */}
          Our Features
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Responsive grid layout with a gap between items */}
          <div className="text-center">
            <div className="text-indigo-500 mb-4">
              {/* Icon color (text-indigo-500) and margin-bottom (mb-4) */}
              <svg
                className="w-16 h-16 mx-auto"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 11h3v7h10v-7h3l-8-8-8 8z" />
              </svg>
              {/* Replace SVG with any icon of your choice */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {/* Text size (text-xl), font weight (font-semibold), text color (text-gray-800) */}
              Feature One
            </h3>
            <p className="mt-2 text-gray-600">
              {/* Margin-top (mt-2) and text color (text-gray-600) */}
              Description of feature one that highlights its benefits and unique value.
            </p>
          </div>
          <div className="text-center">
            <div className="text-green-500 mb-4">
              {/* Icon color (text-green-500) */}
              <svg
                className="w-16 h-16 mx-auto"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13 7H7v6h6V7z" />
                <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm12 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Feature Two</h3>
            <p className="mt-2 text-gray-600">Description of feature two that highlights its benefits and unique value.</p>
          </div>
          <div className="text-center">
            <div className="text-pink-500 mb-4">
              {/* Icon color (text-pink-500) */}
              <svg
                className="w-16 h-16 mx-auto"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M6 3a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1H6zM5 2a2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Feature Three</h3>
            <p className="mt-2 text-gray-600">Description of feature three that highlights its benefits and unique value.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
