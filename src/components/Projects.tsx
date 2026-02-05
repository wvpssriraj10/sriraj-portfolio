import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectsProps {
  onProjectClick: (project: string) => void;
}

const Projects = ({ onProjectClick }: ProjectsProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="night-sky-bg">
      <section className="py-12 sm:py-20 bg-transparent">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">Projects & Experience</h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 sm:gap-8"
          >
            {/* SRH Project */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-5 sm:p-8 hover:shadow-2xl hover:shadow-cyan-500/10 transition-shadow"
            >
              <h3 className="text-2xl font-extrabold text-white mb-4 flex items-center">
                <span className="mr-3">🏏</span>
                SRH IPL EDA Dashboard
              </h3>
              <p className="text-gray-200 mb-6 leading-relaxed font-semibold text-center font-light">
                Comprehensive analysis of Sunrisers Hyderabad using Cricsheet ball-by-ball data. Interactive dashboard with detailed insights into team performance, player statistics, and match outcomes.
              </p>

              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'].map((tag, index) => (
                  <span
                    key={index}
                    className="bg-cyan-600/20 text-cyan-300 px-2.5 py-1 rounded-full text-xs sm:text-sm border border-cyan-600/30 break-normal"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                <button
                  onClick={() => onProjectClick('srh')}
                  className="min-h-[44px] px-4 py-2.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2 shadow-lg hover:shadow-orange-600/40"
                >
                  <ExternalLink size={16} />
                  <span>View Project</span>
                </button>

                <a
                  href="https://github.com/wvpssriraj10/srh-eda-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center justify-center border border-slate-600 text-gray-300 hover:text-white hover:border-slate-500 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors space-x-2"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://srh-data-insights.hashnode.dev/uncovering-srhs-ipl-journey-a-data-driven-exploration-using-python"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center justify-center border border-slate-600 text-gray-300 hover:text-white hover:border-slate-500 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors space-x-2"
                >
                  <ExternalLink size={16} />
                  <span>Blog Post</span>
                </a>
              </div>
            </motion.div>

            {/* Prodigy Internship - Highlighted */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-5 sm:p-8 hover:shadow-2xl hover:shadow-cyan-500/10 transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-500/20 to-transparent w-full h-1"></div>
              <h3 className="text-2xl font-extrabold text-white mb-4 flex items-center">
                <span className="mr-3">📊</span>
                Data Science Internship – Prodigy Infotech
              </h3>
              <p className="text-gray-200 mb-6 leading-relaxed font-semibold text-center font-light">
                Successfully completed a 1-month Data Science internship with outstanding remarks. Worked on real-world projects involving data cleaning, visualization, machine learning, and deriving actionable insights from complex datasets using Python and various data science libraries.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {['Python', 'Machine Learning', 'Data Visualization', 'Pandas', 'Data Analysis'].map((tag, index) => (
                  <span
                    key={index}
                    className="bg-cyan-600/20 text-cyan-300 px-2.5 py-1 rounded-full text-xs sm:text-sm border border-cyan-600/30 break-normal"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                <a
                  href="https://www.linkedin.com/posts/sriraj-w-v-p-s_datascience-internship-learning-activity-7313062644590985216-nmdn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center justify-center border border-cyan-400 text-cyan-300 hover:text-white hover:border-cyan-300 px-4 py-2.5 rounded-lg text-sm font-bold transition-colors space-x-2 bg-slate-900/60 shadow-lg hover:shadow-cyan-500/20"
                >
                  <ExternalLink size={16} />
                  <span>LinkedIn Post</span>
                </a>
              </div>
            </motion.div>

            {/* Data Analyst Intern – Arham World */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-5 sm:p-8 hover:shadow-2xl hover:shadow-cyan-500/10 transition-shadow"
            >
              <h3 className="text-2xl font-extrabold text-white mb-2 flex items-center">
                <span className="mr-3">📈</span>
                Data Analyst Intern – Arham World
              </h3>
              <div className="text-cyan-300 text-sm mb-4 font-semibold">
                Lead Generation & Sales Dashboard
              </div>
              <p className="text-gray-200 mb-6 leading-relaxed font-semibold font-light">
                Built a comprehensive lead generation database and an interactive sales dashboard for the Education Wing. Work included market research, data cleaning, visualization, and documentation—delivering an actionable list of 500+ qualified leads and a dynamic dashboard with insights on segments and sales performance.
              </p>

              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {['Lead Generation', 'Google Sheets', 'REGEXEXTRACT', 'TRIM', 'Pivot Tables', 'Charts', 'KPI Scorecards', 'Slicers', 'Data Cleaning', 'Documentation'].map((tag, index) => (
                  <span
                    key={index}
                    className="bg-cyan-600/20 text-cyan-300 px-2.5 py-1 rounded-full text-xs sm:text-sm border border-cyan-600/30 break-normal"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mb-2 text-white font-bold">Key Responsibilities</div>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-2 font-light">
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

              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mt-4 sm:mt-6">
                <a
                  href="https://www.linkedin.com/posts/sriraj-w-v-p-s_completed-data-analyst-internship-at-arham-activity-7414728132957483009-P_Kf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAER4EaYBIUTdQpMEjPujtlFEccZmOjt2PiU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center justify-center border border-cyan-400 text-cyan-300 hover:text-white hover:border-cyan-300 px-4 py-2.5 rounded-lg text-sm font-bold transition-colors space-x-2 bg-slate-900/60 shadow-lg hover:shadow-cyan-500/20"
                >
                  <ExternalLink size={16} />
                  <span>LinkedIn Post</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;