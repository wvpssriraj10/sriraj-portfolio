import React, { memo, Suspense } from 'react';
import { IconCloud } from './ui/interactive-icon-cloud';
import LoadingSpinner from './LoadingSpinner';

const About = memo(() => {
  // Icon slugs for the interactive cloud - matching your tech stack
  const techIcons = [
    'python',
    'pandas',
    'jupyter',
    'numpy',
    'postgresql',
    'mysql',
    'microsoft',
    'powerbi',
    'matplotlib',
    'amazonaws',
    'googlecloud',
    'github',
    'git',
    'visualstudiocode',
    'docker',
    'kubernetes',
    'javascript',
    'typescript',
    'html5',
    'css3',
    'nodejs',
    'react',
    'tailwindcss',
    'vercel',
  ];

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

  return (
    <div className="night-sky-bg relative">
      {/* Gradient overlay at top to blend with home section */}
      <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black via-black/80 to-transparent z-0"></div>
      <section className="py-20 bg-transparent relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
          </div>

          <div className="bg-slate-700/50 rounded-2xl p-8 border border-slate-600">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">👋</span>
                Hi! I'm W. V. P. S. SRIRAJ
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 text-center">
                A passionate and detail-oriented <span className="text-cyan-400 font-semibold">Data Science Enthusiast</span> and <span className="text-cyan-400 font-semibold">Cricket Analyst</span> from India. I specialize in Python, Excel, data visualization, and statistical analysis to draw insights from complex datasets and create meaningful stories with data.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 text-center">
                I'm deeply interested in uncovering actionable insights from raw data — especially in the field of sports analytics. Combining my on-field cricket experience with technical expertise, I focus on analyzing performance trends, player metrics, and match dynamics to support data-driven decisions.
              </p>
            </div>

            {/* Interactive Tech Stack Cloud */}
            <div className="mb-12">
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center justify-center">
                <span className="mr-3">⚡</span>
                Tech Stack
              </h4>
              <div className="relative flex items-center justify-center overflow-hidden rounded-lg border border-slate-600 bg-slate-800/30 p-8 min-h-[400px]">
                <Suspense fallback={<LoadingSpinner />}>
                  <IconCloud iconSlugs={techIcons} theme="dark" />
                </Suspense>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Technical Skills */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <span className="mr-3">🔧</span>
                  Technical Skills
                </h4>
                <div className="space-y-4">
                  {technicalSkills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3 text-gray-300">
                      <span className="text-xl">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specializations */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <span className="mr-3">🎯</span>
                  Specializations
                </h4>
                <div className="space-y-4">
                  {specializations.map((spec, index) => (
                    <div key={index} className="flex items-center space-x-3 text-gray-300">
                      <span className="text-xl">{spec.icon}</span>
                      <span>{spec.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

About.displayName = 'About';

export default About;