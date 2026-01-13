import React, { memo } from 'react';
import { ChevronDown } from 'lucide-react';

const Home = memo(() => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/bg.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Gradient overlay at bottom to blend with night sky background */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent via-black/60 to-black"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Profile Picture */}
        <div className="mb-8 mt-20 sm:mt-24">
          <div className="w-32 h-32 sm:w-44 sm:h-44 mx-auto rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl relative">
            <div className="absolute inset-0 rounded-full pointer-events-none animate-pulse bg-gradient-to-r from-cyan-400/40 to-blue-500/40 blur-md z-0"></div>
            <img 
              src="/sriraj.jpg"
              alt="W V P S SRIRAJ"
              className="w-full h-full object-cover relative z-10"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        {/* Main Content Card with Transparent Border */}
        <div className="border-2 border-white/30 backdrop-blur-sm rounded-2xl p-4 sm:p-8 shadow-2xl relative max-w-xs sm:max-w-2xl mx-auto">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg tracking-widest">
            W V P S SRIRAJ
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl mb-6 text-white drop-shadow-lg">
            Cricketer 🏏 | Data Science Enthusiast | Performance Analyst | Data Explorer
          </p>
          
          <p className="text-sm sm:text-lg text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Transforming raw data into actionable insights, specializing in sports analytics and data visualization
          </p>
          
          <button 
            onClick={scrollToNext}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto mb-4"
          >
            <span>Explore My Work</span>
            <ChevronDown size={20} />
          </button>
          {/* Scroll Indicator - now just below the button */}
          <div className="flex justify-center mt-2">
            <ChevronDown size={32} className="text-white/70 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
});

Home.displayName = 'Home';

export default Home;