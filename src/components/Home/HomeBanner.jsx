import React from 'react';

const HomeBanner = () => {
  return (
    <header className="mb-20 min-h-[610.86px] flex items-center justify-center bg-white" style={{ 
      backgroundImage: 'linear-gradient(to right, #f3e8ff, #f9f6ff, #f3e8ff)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="absolute top-0 left-0 h-full w-full opacity-30" style={{
        clipPath: 'polygon(0 0, 15% 0, 30% 100%, 0 100%)',
        background: 'linear-gradient(135deg, #a78bfa, #c4b5fd)'
      }}></div>
      
      <div className="absolute top-0 right-0 h-full w-full opacity-30" style={{
        clipPath: 'polygon(85% 0, 100% 0, 100% 100%, 70% 100%)',
        background: 'linear-gradient(45deg, #a78bfa, #c4b5fd)'
      }}></div>

      <div className="text-center p-8 max-w-4xl z-10">
        <h1 className="text-6xl font-extrabold mb-4 leading-tight">
          Deal Your <span className="text-primary">Products</span> In A <span className='text-primary'>Smart</span> Way !
        </h1>
        
        <p className="text-lg text-gray-700 mb-10">
          SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!
        </p>

        <div className="flex justify-center mb-8">
          <div className="flex w-full max-w-lg shadow-lg rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search For Products, Categories..."
              className="p-4 w-full text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-l-lg"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white p-4 transition duration-300 rounded-r-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-xl transition duration-300 transform hover:scale-105">
            Watch All Products
          </button>
          <button className="bg-white text-purple-600 border border-purple-600 font-semibold py-3 px-8 rounded-lg shadow-xl hover:bg-purple-50 transition duration-300 transform hover:scale-105">
            Post an Product
          </button>
        </div>
      </div>
    </header>
  );
};

export default HomeBanner;