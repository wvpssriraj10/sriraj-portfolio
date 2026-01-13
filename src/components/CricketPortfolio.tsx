import React from 'react';

const CricketPortfolio = () => {
  return (
    <div className="night-sky-bg">
      <section className="py-20 bg-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <span className="mr-3">🏏</span>
              My Cricket Portfolio
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left Column - Cricket Info */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <div className="space-y-6 text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-2xl">🎯</span>
                  <h3 className="text-xl font-bold">Role: Bowling All-Rounder</h3>
                </div>

                <div className="flex items-start space-x-3 mb-6">
                  <span className="text-2xl">🧢</span>
                  <h3 className="text-xl font-bold mb-3">Teams I've Played For:</h3>
                </div>
                <div className="space-y-2 text-gray-300 ml-9 text-center">
                  <p><strong>School Team:</strong> Narayana E-techno School</p>
                  <p><strong>College:</strong> VIT-AP University</p>
                  <p><strong>District or League Representation:</strong> Played 3rd division tournaments <span className="font-bold">for my School Team</span> <span className="italic">in Bengaluru</span>.</p>
                </div>

                <div className="flex items-start space-x-3 mb-6">
                  <span className="text-2xl">🏆</span>
                  <h3 className="text-xl font-bold mb-3">Achievements & Highlights:</h3>
                </div>
                <div className="space-y-2 text-gray-300 ml-9 text-center">
                  <p>Runners-up in the Inter-Branch Cricket Tournament – 2024</p>
                  <p>Received a certificate for performance and team contribution</p>
                </div>
                {/* Cricket Certificate Image */}
                <div className="mt-4">
                  <div className="rounded-lg overflow-hidden border-2 border-cyan-400/30">
                    <img 
                      src="/cric-certificate.jpg"
                      alt="Cricket Achievement Certificate"
                      className="w-full object-contain"
                    />
                  </div>
                </div>

                <div className="flex items-start space-x-3 mb-6">
                  <span className="text-2xl">📈</span>
                  <h3 className="text-xl font-bold mb-3">Playing Style:</h3>
                </div>
                <div className="space-y-2 text-gray-300 ml-9 text-center">
                  <p>Left-arm medium pacer and left-handed batsman 🏏</p>
                  <p className="italic text-cyan-400">'Cricket may look easy, but fast bowling isn\'t.'</p>
                  <p>Swing bowler with control in powerplay and death.</p>
                  <p>Calm under pressure, and good strike rotating in batting.</p>
                  <p>Strong fielding skills, especially in the inner ring</p>
                </div>

                <div className="space-y-2 text-gray-300 ml-9 text-center">
                  <p className="text-cyan-400 font-semibold">Open to internships and entry-level data analyst roles in sports analytics or related fields.</p>
                </div>

                <div className="flex items-start space-x-3 mb-6">
                  <span className="text-2xl">🎥</span>
                  <h3 className="text-xl font-bold mb-3">Cricket Content Creation:</h3>
                </div>
                <div className="space-y-2 text-gray-300 ml-9 text-center">
                  <p className="flex items-center gap-2">Through Instagram Reels :
                    <a href="https://www.instagram.com/w.v.p.s.sriraj_10/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full bg-cyan-500 text-white text-xs font-semibold shadow-lg animate-pulse focus:outline-none focus:ring-2 focus:ring-cyan-300 hover:bg-cyan-400 transition-all duration-200">w.v.p.s.sriraj_10</a>
                  </p>
                </div>

                <div className="flex items-start space-x-3 mb-6">
                  <span className="text-2xl">📊</span>
                  <h3 className="text-xl font-bold mb-3">Stats in Cricheroes :</h3>
                </div>
                <div className="space-y-2 text-gray-300 ml-9 text-center">
                  <div className="flex items-center gap-3">
                    <span>link to stats:</span>
                    <a href="https://cricheroes.com/player-profile/1354210/w.v.p.s.sriraj/stats" target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full bg-cyan-500 text-white text-xs font-semibold shadow-lg animate-pulse focus:outline-none focus:ring-2 focus:ring-cyan-300 hover:bg-cyan-400 transition-all duration-200">cricheroes</a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-2xl">❤️</span>
                  <h3 className="text-xl font-bold mb-3">What Cricket Means to Me:</h3>
                </div>
                <div className="space-y-2 text-gray-300 ml-9 text-center">
                  <p className="italic">"Cricket isn't just a game—it's where I find focus, fire, and freedom."</p>
                </div>
              </div>
            </div>

            {/* Right Column - Cricket Portfolio Image (centered vertically) */}
            <div className="relative h-full flex items-stretch">
              <div className="rounded-2xl overflow-hidden border-4 border-cyan-400/50 shadow-2xl w-full h-full">
                <img 
                  src="/cric-portfolio.jpg"
                  alt="Cricket Portfolio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl border-4 border-cyan-400/30 animate-pulse pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CricketPortfolio;