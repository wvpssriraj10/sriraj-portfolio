import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  onProjectClick: (project: string) => void;
}

const Projects = ({ onProjectClick }: ProjectsProps) => {
  return (
    <div className="night-sky-bg">
      <section className="py-20 bg-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Projects & Experience</h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SRH Project */}
            <div className="bg-gradient-to-br from-cyan-700/60 to-blue-800/60 rounded-2xl p-8 border-2 border-cyan-400 shadow-xl">
              <h3 className="text-2xl font-extrabold text-white mb-4 flex items-center">
                <span className="mr-3">🏏</span>
                SRH IPL EDA Dashboard
              </h3>
              <p className="text-cyan-200 mb-6 leading-relaxed font-semibold text-center">
                Comprehensive analysis of Sunrisers Hyderabad using Cricsheet ball-by-ball data. Interactive dashboard with detailed insights into team performance, player statistics, and match outcomes.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'].map((tag, index) => (
                  <span
                    key={index}
                    className="bg-cyan-600/20 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-600/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={() => onProjectClick('srh')}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
                >
                  <ExternalLink size={16} />
                  <span>View Project</span>
                </button>
                
                <a
                  href="https://github.com/wvpssriraj10/srh-eda-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-slate-600 text-gray-300 hover:text-white hover:border-slate-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://srh-data-insights.hashnode.dev/uncovering-srhs-ipl-journey-a-data-driven-exploration-using-python"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-slate-600 text-gray-300 hover:text-white hover:border-slate-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
                >
                  <ExternalLink size={16} />
                  <span>Blog Post</span>
                </a>
              </div>
            </div>

            {/* Prodigy Internship - Highlighted */}
            <div className="bg-gradient-to-br from-cyan-700/60 to-blue-800/60 rounded-2xl p-8 border-2 border-cyan-400 shadow-xl">
              <h3 className="text-2xl font-extrabold text-white mb-4 flex items-center">
                <span className="mr-3">📊</span>
                Data Science Internship – Prodigy Infotech
              </h3>
              <p className="text-cyan-200 mb-6 leading-relaxed font-semibold text-center">
                Successfully completed a 1-month Data Science internship with outstanding remarks. Worked on real-world projects involving data cleaning, visualization, machine learning, and deriving actionable insights from complex datasets using Python and various data science libraries.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Python', 'Machine Learning', 'Data Visualization', 'Pandas', 'Data Analysis'].map((tag, index) => (
                  <span
                    key={index}
                    className="bg-cyan-600/20 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-600/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="https://www.linkedin.com/posts/sriraj-w-v-p-s_datascience-internship-learning-activity-7313062644590985216-nmdn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cyan-400 text-cyan-300 hover:text-white hover:border-cyan-300 px-4 py-2 rounded-lg text-sm font-bold transition-colors flex items-center space-x-2 bg-slate-900/60"
                >
                  <ExternalLink size={16} />
                  <span>LinkedIn Post</span>
                </a>
              </div>
            </div>

            {/* Lead Generation & Sales Dashboard - Arham World */}
            <div className="bg-gradient-to-br from-cyan-700/60 to-blue-800/60 rounded-2xl p-8 border-2 border-cyan-400 shadow-xl">
              <h3 className="text-2xl font-extrabold text-white mb-2 flex items-center">
                <span className="mr-3">📈</span>
                Lead Generation & Sales Dashboard
              </h3>
              <div className="text-cyan-300 text-sm mb-4 font-semibold">
                <span>Data Analytics Intern</span>
                <span className="mx-2">•</span>
                <span>Arham World</span>
              </div>
              <p className="text-cyan-200 mb-6 leading-relaxed font-semibold">
                Built a comprehensive lead generation database and an interactive sales dashboard for the Education Wing. Work included market research, data cleaning, visualization, and documentation—delivering an actionable list of 500+ qualified leads and a dynamic dashboard with insights on segments and sales performance.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['Lead Generation', 'Google Sheets', 'REGEXEXTRACT', 'TRIM', 'Pivot Tables', 'Charts', 'KPI Scorecards', 'Slicers', 'Data Cleaning', 'Documentation'].map((tag, index) => (
                  <span
                    key={index}
                    className="bg-cyan-600/20 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-600/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mb-2 text-white font-bold">Key Responsibilities</div>
              <ul className="list-disc list-inside text-cyan-200 space-y-2 mb-2">
                <li>
                  Generated and qualified over 500 leads for K-12 schools and engineering colleges through targeted online research.
                </li>
                <li>
                  Cleaned and structured large datasets in Google Sheets using formulas (REGEXEXTRACT, TRIM) to ensure data accuracy.
                </li>
                <li>
                  Designed and built an interactive dashboard using pivot tables, charts, KPI scorecards, and slicers to visualize lead data.
                </li>
                <li>
                  Authored detailed Meeting Minutes to ensure clear communication and alignment on project goals within the team.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;