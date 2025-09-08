import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with airplane image */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-sky-50 to-blue-200">
        {/* Airplane SVG illustration */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-full h-full overflow-hidden">
          <div className="relative w-full h-full">
            {/* Airplane SVG */}
            <svg 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3/4 md:w-2/3 lg:w-1/2 h-auto opacity-80" 
              viewBox="0 0 800 400" 
              fill="none"
            >
              {/* Airplane body */}
              <ellipse cx="400" cy="200" rx="300" ry="40" fill="#E5E7EB" opacity="0.8"/>
              <ellipse cx="450" cy="200" rx="200" ry="25" fill="#D1D5DB" opacity="0.9"/>
              
              {/* Wings */}
              <ellipse cx="300" cy="180" rx="150" ry="15" fill="#D1D5DB" opacity="0.7" transform="rotate(-10 300 180)"/>
              <ellipse cx="300" cy="220" rx="150" ry="15" fill="#D1D5DB" opacity="0.7" transform="rotate(10 300 220)"/>
              
              {/* Windows */}
              <circle cx="500" cy="195" r="3" fill="#9CA3AF" opacity="0.6"/>
              <circle cx="480" cy="195" r="3" fill="#9CA3AF" opacity="0.6"/>
              <circle cx="460" cy="195" r="3" fill="#9CA3AF" opacity="0.6"/>
              <circle cx="440" cy="195" r="3" fill="#9CA3AF" opacity="0.6"/>
              <circle cx="420" cy="195" r="3" fill="#9CA3AF" opacity="0.6"/>
            </svg>
            
            {/* Cloud effects */}
            <div className="absolute top-1/4 right-1/4 w-24 md:w-32 h-12 md:h-16 bg-white opacity-20 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 w-16 md:w-24 h-8 md:h-12 bg-white opacity-15 rounded-full blur-md animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 right-1/2 w-12 md:w-20 h-6 md:h-10 bg-white opacity-10 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen py-20">
          {/* Left side content */}
          <div className="lg:col-span-6 space-y-8">
            {/* Navigation dots */}
            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-3 h-3 border-2 border-gray-400 rounded-full"></div>
                <div className="w-0.5 h-16 bg-gray-300"></div>
                <div className="w-3 h-3 border-2 border-gray-400 rounded-full"></div>
              </div>
              <div className="text-sm text-gray-600 font-medium">
                1
              </div>
            </div>

            {/* Main heading */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                ELEVATE YOUR TRAVEL JOURNEY
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Experience<br />
                The Magic Of<br />
                Flight!
              </h1>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-lg">
                Book A Trip Now
              </button>
              <button className="w-12 h-12 border-2 border-blue-500 rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors group">
                <svg className="w-5 h-5 text-blue-500 group-hover:text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right side - Know More card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="bg-white rounded-3xl shadow-xl p-6 max-w-sm w-full mx-auto lg:mx-0">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Know More</h3>
                <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <div className="w-12 h-12 rounded-full bg-blue-500 border-2 border-white"></div>
                    <div className="w-12 h-12 rounded-full bg-orange-400 border-2 border-white"></div>
                    <div className="w-12 h-12 rounded-full bg-blue-600 border-2 border-white"></div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Awesome Places</h4>
                  <p className="text-sm text-gray-600">
                    Discover The World One<br />
                    Adventure At A Time!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-2 text-gray-500">
          <span className="text-sm">Follow</span>
          <div className="flex space-x-3">
            <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </button>
            <button className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;