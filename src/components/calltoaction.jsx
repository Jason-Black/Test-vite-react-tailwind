import React from 'react';

function CallToActionSection() {
  return (
    <div className="bg-gradient-to-r from-teal-400 to-blue-500 py-16">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-8">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-white mb-8">
          Join thousands of satisfied customers and take your business to the next level.
        </p>
        <button className="bg-white text-teal-500 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
          Get Started Now
        </button>
      </div>
    </div>
  );
}

export default CallToActionSection;
