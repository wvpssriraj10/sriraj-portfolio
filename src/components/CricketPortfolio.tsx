import React from 'react';
import { motion } from 'framer-motion';

const CricketPortfolio = () => {
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center justify-center drop-shadow-lg">
              <span className="mr-3" aria-hidden>🏏</span>
              My Cricket Portfolio
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-5 sm:p-8"
            >
              <div className="space-y-6 text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-2xl">🎯</span>
                  <h3 className="text-xl font-bold">Role: Bowling All-Rounder</h3>
                </div>

                <div className="flex items-start space-x-3 mb-6">
                  <span className="text-2xl">🧢</span>
                  <h3 className="text-xl font-bold mb-3">Teams I've Played For:</h3>
                </div>
                <div className="space-y-2 text-gray-200 ml-9 text-center font-light">
                  <p><strong>School Team:</strong> Narayana E-techno School</p>
                  <p><strong>College:</strong> VIT-AP University</p>
                  <p><strong>District or League Representation:</strong> Played 3rd division tournaments <span className="font-bold">for my School Team</span> <span className="italic">in Bengaluru</span>.</p>
                </div>

                <div className="flex items-start space-x-3 mb-6">
                  <span className="text-2xl">🏆</span>
                  <h3 className="text-xl font-bold mb-3">Achievements & Highlights:</h3>
                </div>
                <div className="space-y-2 text-gray-200 ml-9 text-center font-light">
                  <p>Runners-up in the Inter-Branch Cricket Tournament – 2024</p>
                  <p>Received a certificate for performance and team contribution</p>
                </div>
                {/* Cricket Certificate Image - max-width 100%, height auto, border-radius */}
                <div className="mt-4 sm:mt-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="rounded-lg overflow-hidden border-2 border-cyan-400/30"
                  >
                    <img
                      src="/cric-certificate.jpg"
                      alt="Cricket Achievement Certificate"
                      className="w-full max-w-full h-auto object-contain rounded-lg"
                      loading="lazy"
                    />
                  </motion.div>
                </div>

                <div className="flex items-start space-x-3 mb-6">
                  <span className="text-2xl">📈</span>
                  <h3 className="text-xl font-bold mb-3">Playing Style:</h3>
                </div>
                <div className="space-y-2 text-gray-200 ml-9 text-center font-light">
                  <p>Left-arm medium pacer and left-handed batsman 🏏</p>
                  <p className="italic text-cyan-400">'Cricket may look easy, but fast bowling isn't.'</p>
                  <p>Swing bowler with control in powerplay and death.</p>
                  <p>Calm under pressure, and good strike rotating in batting.</p>
                  <p>Strong fielding skills, especially in the inner ring</p>
                </div>

                <div className="space-y-2 text-gray-200 ml-9 text-center font-light">
                  <p className="text-cyan-400 font-semibold">Open to internships and entry-level data analyst roles in sports analytics or related fields.</p>
                </div>

                <div className="flex items-start space-x-3 mb-6">
                  <span className="text-2xl">🎥</span>
                  <h3 className="text-xl font-bold mb-3">Cricket Content Creation:</h3>
                </div>
                <div className="space-y-2 text-gray-200 ml-9 text-center font-light">
                  <p className="flex items-center gap-2">Through Instagram Reels :
                    <a href="https://www.instagram.com/w.v.p.s.sriraj_10/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full bg-cyan-500 text-white text-xs font-semibold shadow-lg animate-pulse focus:outline-none focus:ring-2 focus:ring-cyan-300 hover:bg-cyan-400 transition-all duration-200">w.v.p.s.sriraj_10</a>
                  </p>
                </div>

                <div className="flex items-start space-x-3 mb-6">
                  <span className="text-2xl">📊</span>
                  <h3 className="text-xl font-bold mb-3">Stats in Cricheroes :</h3>
                </div>
                <div className="space-y-2 text-gray-200 ml-9 text-center font-light">
                  <div className="flex flex-wrap items-center gap-3">
                    <span>link to stats:</span>
                    <a href="https://cricheroes.com/player-profile/1354210/w.v.p.s.sriraj/stats" target="_blank" rel="noopener noreferrer" className="min-h-[44px] inline-flex items-center px-3 py-2 rounded-full bg-cyan-500 text-white text-xs font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 hover:bg-cyan-400 active:bg-cyan-600 transition-all duration-200">cricheroes</a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-2xl">❤️</span>
                  <h3 className="text-xl font-bold mb-3">What Cricket Means to Me:</h3>
                </div>
                <div className="space-y-2 text-gray-200 ml-9 text-center font-light">
                  <p className="italic">"Cricket isn't just a game—it's where I find focus, fire, and freedom."</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Cricket Portfolio Image (centered vertically) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-full flex items-stretch"
            >
              <div className="rounded-2xl overflow-hidden border-4 border-cyan-400/50 shadow-2xl w-full h-full glass-card">
                <img
                  src="/cric-portfolio.jpg"
                  alt="Cricket Portfolio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl border-4 border-cyan-400/30 animate-pulse pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CricketPortfolio;
