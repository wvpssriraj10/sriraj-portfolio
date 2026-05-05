import { Instagram } from 'lucide-react';

const CricketPage = () => {
  const cricheroesUrl = 'https://cricheroes.com/player-profile/1354210/w.v.p.s.sriraj/stats';
  const instagramUrl = 'https://www.instagram.com/w.v.p.s.sriraj_10/';

  return (
    <div className="min-h-screen bg-slate-900 text-white font-body night-sky-bg selection:bg-cyan-500/30">
      {/* Navbar */}
      <header className="w-full border-b border-white/10 bg-slate-900/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 min-h-[64px] gap-4">
            <a
              href="/"
              className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
              />
              <span className="text-lg sm:text-xl font-bold text-white truncate font-heading tracking-wide">
                Sriraj
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Page content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Back link */}
        <div className="mb-6 sm:mb-10">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors"
          >
            <span aria-hidden>←</span>
            <span className="font-semibold">Back to Portfolio</span>
          </a>
        </div>

        {/* Single clean card-based section */}
        <section className="glass-card rounded-2xl p-6 sm:p-10 border border-cyan-400/20">
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center justify-center drop-shadow-lg">
              <span className="mr-3" aria-hidden>
                🏏
              </span>
              Cricket Profile
            </h1>
            <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 items-stretch">
            {/* Left: cricket biography */}
            <div className="space-y-7 sm:space-y-9 text-white">
              <div className="flex items-start gap-3">
                <div className="text-2xl" aria-hidden>
                  🎯
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">Role</h2>
                  <p className="text-gray-200 mt-1">Bowling All-Rounder</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-2xl" aria-hidden>
                  🧢
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">Teams Played For</h2>
                  <ul className="mt-2 space-y-1 text-gray-200 list-disc list-inside">
                    <li>Narayana School</li>
                    <li>VIT-AP University</li>
                    <li>3rd division Bengaluru tournaments</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-2xl" aria-hidden>
                  🏆
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">Achievements</h2>
                  <p className="text-gray-200 mt-2">
                    Runners-up in the Inter-Branch Cricket Tournament (2024)
                  </p>
                  <a
                    href="/cric-certificate.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-3 text-cyan-300 hover:text-cyan-200 font-semibold transition-colors"
                  >
                    View Tournament Certificate
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-2xl" aria-hidden>
                  📌
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">Playing Style</h2>
                  <ul className="mt-2 space-y-1 text-gray-200 list-disc list-inside">
                    <li>Left-arm medium pacer</li>
                    <li>Left-handed batsman</li>
                    <li>Swing bowling</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-2xl" aria-hidden>
                  🎥
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">Cricket Content Creation</h2>
                  <p className="text-gray-200 mt-2">
                    Instagram:{' '}
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500 text-white text-xs font-semibold shadow-lg hover:bg-cyan-400 transition-all duration-200"
                    >
                      <Instagram size={14} aria-hidden />
                      <span>w.v.p.s.sriraj_10</span>
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-2xl" aria-hidden>
                  📊
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">Cricheroes stats</h2>
                  <a
                    href={cricheroesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center min-h-[44px] mt-2 px-4 py-2 rounded-full bg-cyan-500 text-white text-sm font-semibold shadow-lg hover:bg-cyan-400 transition-all duration-200"
                  >
                    View Cricheroes Profile Stats
                  </a>
                </div>
              </div>
            </div>

            {/* Right: images */}
            <div>
              <div className="rounded-2xl border-2 border-cyan-400/30 shadow-2xl bg-slate-950/60 p-3 h-full">
                <div className="rounded-xl overflow-hidden h-full">
                  <img
                    src="/cric-portfolio.jpg"
                    alt="Cricket Portfolio"
                    className="w-full h-full min-h-[26rem] sm:min-h-[32rem] object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-900/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-300">
          <p className="text-sm">
            © {new Date().getFullYear()} W V P S SRIRAJ. Built with data, cricket, and curiosity.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CricketPage;

