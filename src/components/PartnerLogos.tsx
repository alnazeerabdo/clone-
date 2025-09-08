import React from 'react';

const PartnerLogos: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Airbnb */}
          <div className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/>
              <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
            </svg>
            <span className="text-xl font-semibold">airbnb</span>
          </div>

          {/* Booking.com */}
          <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-semibold">Booking.com</span>
          </div>

          {/* Trivago */}
          <div className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">t</span>
            </div>
            <span className="text-xl font-semibold">trivago</span>
          </div>

          {/* Expedia */}
          <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <span className="text-xl font-semibold">Expedia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;