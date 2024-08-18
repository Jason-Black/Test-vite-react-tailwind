import React from 'react';

function TestimonialSection() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-12">
      {/* Background gradient and padding */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          {/* Responsive text size, centered, with white color */}
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Responsive grid layout */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            {/* White background, rounded corners, drop shadow, padding */}
            <p className="text-gray-700 mb-4">
              {/* Text color and margin-bottom */}
              "This service has completely changed the way I work. It's fast, reliable, and user-friendly."
            </p>
            <div className="text-right text-indigo-500 font-semibold">
              {/* Text alignment, color, and font weight */}
              - John Doe
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-gray-700 mb-4">
              "I've tried many solutions, but this one stands out. The support team is fantastic!"
            </p>
            <div className="text-right text-indigo-500 font-semibold">
              - Jane Smith
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-gray-700 mb-4">
              "Highly recommend this service to anyone looking for efficiency and quality."
            </p>
            <div className="text-right text-indigo-500 font-semibold">
              - Emily Johnson
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
