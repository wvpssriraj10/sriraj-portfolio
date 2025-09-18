import React from 'react';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

interface SrhProjectProps {
  onBack: () => void;
}

const SrhProject = ({ onBack }: SrhProjectProps) => {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/srhedabanner.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="pt-20 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={onBack}
              className="mb-8 flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Projects</span>
            </button>

            <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                🧡 SRH IPL Data Analysis Project
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                A Data-Driven Exploration of Sunrisers Hyderabad's IPL Journey (2008–2025)
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
            {/* Project Description */}
            <div className="mb-8">
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                This project showcases an in-depth Exploratory Data Analysis (EDA) of Sunrisers Hyderabad (SRH) using ball-by-ball match data from Cricsheet. With Python and popular libraries like Pandas, Seaborn, and Matplotlib, the project uncovers key patterns and trends in SRH's batting, bowling, and opponent-wise performances across seasons.
              </p>
              
              {/* Key Insights */}
              <div className="bg-slate-800/50 rounded-lg p-6 mb-8 border border-slate-700">
                <h3 className="text-2xl font-semibold text-white mb-4">Key insights include:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-gray-300 flex items-center">
                      <span className="text-orange-400 mr-2">🔸</span>
                      Top 10 Batsmen & Bowlers
                    </p>
                    <p className="text-gray-300 flex items-center">
                      <span className="text-orange-400 mr-2">🔸</span>
                      Year-wise performance trends
                    </p>
                    <p className="text-gray-300 flex items-center">
                      <span className="text-orange-400 mr-2">🔸</span>
                      Dismissal breakdowns
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-300 flex items-center">
                      <span className="text-orange-400 mr-2">🔸</span>
                      Most economical bowlers
                    </p>
                    <p className="text-gray-300 flex items-center">
                      <span className="text-orange-400 mr-2">🔸</span>
                      Matchups vs opponent teams
                    </p>
                    <p className="text-gray-300 flex items-center">
                      <span className="text-orange-400 mr-2">🔸</span>
                      4s, 6s, and best partnerships
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Details */}
              <div className="bg-slate-800/50 rounded-lg p-6 mb-8 border border-slate-700">
                <h3 className="text-2xl font-semibold text-white mb-4">Technical Implementation</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The analysis was visualized with clear, SRH-themed plots and also compiled into a PDF report and blog post. This project reflects both technical expertise in data analysis and a deep passion for cricket analytics.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <span className="bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full text-sm">Pandas</span>
                  <span className="bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full text-sm">Seaborn</span>
                  <span className="bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full text-sm">Matplotlib</span>
                  <span className="bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full text-sm">Cricsheet Data</span>
                </div>
              </div>

              {/* Project Links */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/wvpssriraj10/srh-eda-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 border border-slate-600"
                >
                  <Github size={20} />
                  <span>View GitHub Repository</span>
                </a>
                
                <a
                  href="https://srh-data-insights.hashnode.dev/uncovering-srhs-ipl-journey-a-data-driven-exploration-using-python"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <ExternalLink size={20} />
                  <span>Read Blog Post</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SrhProject;