import React from 'react';

function PortfolioSection() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio Item 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              className="w-full h-56 object-cover"
              src="https://via.placeholder.com/400x300"
              alt="Portfolio 1"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Project Title 1</h3>
              <p className="mt-2 text-gray-600">
                A brief description of the project, highlighting the key features and impact.
              </p>
            </div>
          </div>

          {/* Portfolio Item 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              className="w-full h-56 object-cover"
              src="https://via.placeholder.com/400x300"
              alt="Portfolio 2"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Project Title 2</h3>
              <p className="mt-2 text-gray-600">
                A brief description of the project, highlighting the key features and impact.
              </p>
            </div>
          </div>

          {/* Portfolio Item 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              className="w-full h-56 object-cover"
              src="https://via.placeholder.com/400x300"
              alt="Portfolio 3"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Project Title 3</h3>
              <p className="mt-2 text-gray-600">
                A brief description of the project, highlighting the key features and impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioSection;
