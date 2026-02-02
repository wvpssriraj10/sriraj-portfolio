import React from 'react';
import { ChevronDown } from 'lucide-react';

const Home = () => {
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
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
        {/* Profile Picture - aspect ratio maintained */}
        <div className="mb-6 sm:mb-8 mt-20 sm:mt-24">
          <div className="w-28 h-28 min-[375px]:w-32 min-[375px]:h-32 sm:w-44 sm:h-44 mx-auto rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl relative aspect-square">
            <img 
              src="/sriraj.jpg"
              alt="W V P S SRIRAJ"
              className="w-full h-full object-cover relative z-10"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Main Content Card - min 32px name, 18px tagline, 16px description on mobile */}
        <div className="border-2 border-white/30 backdrop-blur-sm rounded-2xl p-5 sm:p-8 shadow-2xl relative max-w-[340px] min-[375px]:max-w-xs sm:max-w-2xl mx-auto">
          <h1 className="text-[32px] min-[375px]:text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg tracking-widest break-words">
            W V P S SRIRAJ
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-white drop-shadow-lg">
            Cricketer 🏏 | Data Science Enthusiast | Performance Analyst | Data Explorer
          </p>
          
          <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
            Transforming raw data into actionable insights, specializing in sports analytics and data visualization
          </p>
          
          <button 
            onClick={scrollToNext}
            className="min-h-[48px] px-6 sm:px-8 py-3 bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-[0.98] shadow-lg flex items-center justify-center space-x-2 mx-auto mb-4 w-full sm:w-auto"
          >
            <span>Explore My Work</span>
            <ChevronDown size={20} />
          </button>
          <div className="flex justify-center mt-2">
            <ChevronDown size={32} className="text-white/70 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;