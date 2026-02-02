import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const technicalSkills = [
    { icon: '🐍', name: 'Python & Data Analysis' },
    { icon: '📊', name: 'Excel & Statistical Analysis' },
    { icon: '📈', name: 'Data Visualization (Matplotlib, Seaborn, Power BI)' },
    { icon: '🗄️', name: 'SQL & Database Management' }
  ];

  const specializations = [
    { icon: '🏏', name: 'Sports Analytics' },
    { icon: '📊', name: 'Cricket Data Analysis' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">About Me</h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-5 sm:p-8"
          >
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                <motion.span
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
                  className="mr-3 text-2xl sm:text-[28px] leading-none inline-block origin-bottom-right"
                  aria-hidden
                >
                  👋
                </motion.span>
                Hi! I'm W. V. P. S. SRIRAJ
              </h3>
              <p className="text-gray-200 text-base sm:text-lg leading-[1.7] sm:leading-relaxed mb-4 sm:mb-6 text-center font-light">
                A passionate and detail-oriented <span className="text-cyan-400 font-semibold">Data Science Enthusiast</span> and <span className="text-cyan-400 font-semibold">Cricket Analyst</span> from India. I specialize in Python, Excel, data visualization, and statistical analysis to draw insights from complex datasets and create meaningful stories with data.
              </p>
              <p className="text-gray-200 text-base sm:text-lg leading-[1.7] sm:leading-relaxed mb-6 sm:mb-8 text-center font-light">
                I'm deeply interested in uncovering actionable insights from raw data — especially in the field of sports analytics. Combining my on-field cricket experience with technical expertise, I focus on analyzing performance trends, player metrics, and match dynamics to support data-driven decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 flex items-center">
                  <span className="mr-3 text-xl sm:text-2xl w-7 h-7 sm:w-7 sm:h-7 flex items-center justify-center" aria-hidden>🔧</span>
                  Technical Skills
                </h4>
                <div className="space-y-3 sm:space-y-4">
                  {technicalSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-center gap-3 text-gray-200 text-sm sm:text-base leading-[1.6] bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <span className="text-xl sm:text-2xl flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center" aria-hidden>{skill.icon}</span>
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 flex items-center">
                  <span className="mr-3 text-xl sm:text-2xl w-7 h-7 sm:w-7 sm:h-7 flex items-center justify-center" aria-hidden>🎯</span>
                  Specializations
                </h4>
                <div className="space-y-3 sm:space-y-4">
                  {specializations.map((spec, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-center gap-3 text-gray-200 text-sm sm:text-base leading-[1.6] bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <span className="text-xl sm:text-2xl flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center" aria-hidden>{spec.icon}</span>
                      <span>{spec.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;