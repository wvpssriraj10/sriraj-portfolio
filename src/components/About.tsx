import React from 'react';

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

  return (
    <div className="night-sky-bg">
      <section className="py-20 bg-transparent">
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
};

export default About;