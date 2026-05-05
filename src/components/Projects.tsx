import { Database, ExternalLink, Github } from 'lucide-react';
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

  const standardCardClass =
    'glass-card rounded-2xl p-5 sm:p-8 border border-slate-700/60 bg-slate-950/55 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-400/40 transition-all duration-300';

  type CardButton = {
    label: string;
    href?: string;
    onClick?: () => void;
    icon?: 'external' | 'github' | 'database';
    primary?: boolean;
  };

  type PortfolioCard = {
    icon: string;
    title: string;
    subtitle?: string;
    date: string;
    description: string;
    tags: string[];
    buttons: CardButton[];
    featured?: boolean;
  };

  const renderButtonIcon = (icon?: CardButton['icon']) => {
    if (icon === 'github') return <Github size={16} />;
    if (icon === 'database') return <Database size={16} />;
    return <ExternalLink size={16} />;
  };

  const renderCard = (card: PortfolioCard) => (
    <motion.div
      key={card.title}
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`${standardCardClass} h-full flex flex-col ${card.featured ? 'relative overflow-hidden' : ''}`}
    >
      {card.featured && (
        <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-500/20 to-transparent w-full h-1"></div>
      )}

      <h4 className="text-2xl font-extrabold text-white mb-1 flex items-center">
        <span className="mr-3">{card.icon}</span>
        {card.title}
      </h4>

      {card.subtitle && (
        <div className="text-cyan-300 text-sm mb-1 font-semibold">
          {card.subtitle}
        </div>
      )}

      <div className="text-slate-400 text-[0.8rem] mb-4">
        {card.date}
      </div>

      <p className="text-slate-300 mb-6 leading-relaxed text-sm sm:text-base font-light">
        {card.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
        {card.tags.slice(0, 5).map((tag, index) => (
          <span
            key={index}
            className="bg-cyan-900/40 text-cyan-400 px-2.5 py-1 rounded-full text-xs sm:text-sm border border-cyan-800 break-normal"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Fixed 3-slot CTA layout across all cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 pt-1 mt-auto">
        {[0, 1, 2].map((slotIndex) => {
          const button = card.buttons[slotIndex];
          const isUnavailable = !!button && !button.href && !button.onClick;
          const baseClass = button?.primary
            ? 'min-h-[44px] w-full inline-flex items-center justify-center px-3 py-2.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors space-x-2 shadow-lg hover:shadow-orange-600/40'
            : 'min-h-[44px] w-full inline-flex items-center justify-center border border-slate-600 text-gray-300 hover:text-white hover:border-cyan-400/50 px-3 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors space-x-2 bg-slate-950/60';

          if (!button || isUnavailable) {
            return (
              <div
                key={`${card.title}-cta-slot-${slotIndex}`}
                style={{ display: 'none' }}
              ></div>
            );
          }

          if (button.href) {
            return (
              <a
                key={`${card.title}-${button.label}`}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className={baseClass}
              >
                {renderButtonIcon(button.icon)}
                <span>{button.label}</span>
              </a>
            );
          }

          return (
            <button
              key={`${card.title}-${button.label}`}
              onClick={button.onClick}
              className={baseClass}
            >
              {renderButtonIcon(button.icon)}
              <span>{button.label}</span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );

  const personalProjects: PortfolioCard[] = [
    {
      icon: '🏏',
      title: 'IPL Auction Intelligence Platform',
      date: '2025',
      description:
        'Built an IPL analytics platform that turns historical ball-by-ball data into scouting insights like player ROI and auction efficiency for faster decision-making.',
      tags: ['Python', 'Pandas', 'JavaScript', 'HTML/CSS', 'Data Analysis'],
      buttons: [
        {
          label: 'View Project',
          href: 'https://ipl-intelligence.vercel.app',
          icon: 'external',
          primary: true,
        },
        {
          label: 'GitHub',
          href: 'https://github.com/wvpssriraj10/ipl-auction-player-study',
          icon: 'github',
        },
        {
          label: 'LinkedIn Post',
          href: 'https://www.linkedin.com/posts/sriraj-w-v-p-s_over-the-past-few-weeks-or-so-ive-been-activity-7452984505713262592-a3AF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER4EaYBIUTdQpMEjPujtlFEccZmOjt2PiU',
          icon: 'external',
        },
      ],
    },
    {
      icon: '🏏',
      title: 'SRH IPL EDA Dashboard',
      date: '2024',
      description:
        'Created an interactive Sunrisers Hyderabad performance dashboard using ball-by-ball match data to highlight trends in team outcomes and player impact.',
      tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
      buttons: [
        {
          label: 'View Project',
          onClick: () => onProjectClick('srh'),
          icon: 'external',
          primary: true,
        },
        {
          label: 'GitHub',
          href: 'https://github.com/wvpssriraj10/srh-eda-dashboard',
          icon: 'github',
        },
        {
          label: 'Blog Post',
          href: 'https://srh-data-insights.hashnode.dev/uncovering-srhs-ipl-journey-a-data-driven-exploration-using-python',
          icon: 'external',
        },
      ],
    },
  ];

  const workExperience: PortfolioCard[] = [
    {
      icon: '📊',
      title: 'Data Science Internship – Prodigy Infotech',
      date: '2025',
      description:
        'Completed a one-month internship delivering practical projects in data cleaning, visualization, and machine learning with measurable business insights.',
      tags: ['Python', 'Machine Learning', 'Data Visualization', 'Pandas', 'Data Analysis'],
      buttons: [
        {
          label: 'View Project',
          icon: 'external',
        },
        {
          label: 'GitHub',
          icon: 'github',
        },
        {
          label: 'LinkedIn Post',
          href: 'https://www.linkedin.com/posts/sriraj-w-v-p-s_datascience-internship-learning-activity-7313062644590985216-nmdn',
          icon: 'external',
        },
      ],
      featured: true,
    },
    {
      icon: '📈',
      title: 'Data Analyst Intern – Arham World',
      subtitle: 'Lead Generation & Sales Dashboard',
      date: '2025',
      description:
        'Built a lead database and sales dashboard for the Education Wing, delivering 500+ qualified leads and a clear performance view for faster follow-ups.',
      tags: ['Google Sheets', 'Pivot Tables', 'Data Visualization', 'Data Cleaning', 'Market Research'],
      buttons: [
        {
          label: 'View Project',
          icon: 'external',
        },
        {
          label: 'GitHub',
          icon: 'github',
        },
        {
          label: 'LinkedIn Post',
          href: 'https://www.linkedin.com/posts/sriraj-w-v-p-s_completed-data-analyst-internship-at-arham-activity-7414728132957483009-P_Kf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAER4EaYBIUTdQpMEjPujtlFEccZmOjt2PiU',
          icon: 'external',
        },
      ],
    },
    {
      icon: '🧠',
      title: 'Data Science and Analytics Intern',
      subtitle: 'Graphura India Private Limited',
      date: 'Jan 2026 – Present',
      description:
        'Working on end-to-end analytics workflows across SQL, dashboards, and machine learning to convert raw datasets into actionable insights for stakeholders.',
      tags: ['Python', 'SQL', 'Machine Learning', 'Data Visualization', 'Data Cleaning'],
      buttons: [
        {
          label: 'View Project',
          href: '/graphura-joining-letter.pdf',
          icon: 'external',
        },
        {
          label: 'GitHub',
          icon: 'github',
        },
        {
          label: 'LinkedIn Post',
          href: 'https://www.linkedin.com/posts/sriraj-w-v-p-s_im-happy-to-share-that-i-have-joined-graphura-activity-7415091235025084416-ALjU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER4EaYBIUTdQpMEjPujtlFEccZmOjt2PiU',
          icon: 'external',
        },
      ],
    },
  ];

  return (
    <div className="night-sky-bg">
      <section className="py-12 sm:py-20 pb-20 bg-transparent">
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

          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl font-bold text-cyan-300 mb-6 sm:mb-8"
          >
            Personal Projects
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start mb-2 sm:mb-3"
          >
            {personalProjects.map(renderCard)}
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl font-bold text-cyan-300 mt-2 sm:mt-3 mb-4 sm:mb-5"
          >
            Work Experience
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start"
          >
            {workExperience.map(renderCard)}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;