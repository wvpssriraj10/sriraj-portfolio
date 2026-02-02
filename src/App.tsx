import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Linkedin, Github, Instagram } from 'lucide-react';

// Portfolio Components
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import CricketPortfolio from './components/CricketPortfolio';
import Credentials from './components/Credentials';
import Contact from './components/Contact';
import SrhProject from './components/SrhProject';

// Toast notification component
const Toast = ({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) => (
  <div className={`fixed top-20 right-4 z-50 p-4 rounded-lg text-white ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} animate-slide-in`}>
    <div className="flex items-center justify-between">
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 text-white hover:text-gray-200">
        <X size={16} />
      </button>
    </div>
  </div>
);

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [showSrhProject, setShowSrhProject] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update current section based on scroll position
      const sections = ['home', 'about', 'cricket-portfolio', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const goToHome = () => {
    setShowSrhProject(false);
    scrollToSection('home');
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:wsriraj10@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sriraj-w-v-p-s', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/wvpssriraj10', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/w.v.p.s.sriraj_10/', label: 'Instagram' }
  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'cricket-portfolio', label: 'Cricket Portfolio' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  if (showSrhProject) {
    return <SrhProject onBack={() => setShowSrhProject(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation - z-[100] ensures header stays above content when scrolling */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 min-h-[64px] gap-2">
            {/* Logo - Clickable, flex-shrink-0 prevents overlap */}
            <button 
              onClick={goToHome}
              className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity flex-shrink-0 min-h-[44px] min-w-[44px] -ml-2 pl-2 justify-start md:min-w-0 md:ml-0 md:pl-0"
            >
              <img src="/logo.png" alt="Logo" className="w-9 h-9 sm:w-10 sm:h-10 object-contain" />
              <span className="text-lg sm:text-xl font-bold text-white truncate">
                Sriraj
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      currentSection === item.id
                        ? 'text-cyan-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Social Icons - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* Mobile menu button - min 44x44px touch target */}
            <div className="md:hidden flex-shrink-0">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg active:opacity-90 transition-colors"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - smooth open/close */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <div className="px-4 pt-2 pb-4 space-y-1 bg-slate-900/98 backdrop-blur-md border-b border-slate-700">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-3 rounded-lg text-base font-medium min-h-[44px] flex items-center transition-colors ${
                    currentSection === item.id
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Social Icons - 44x44 touch targets, 12-16px gap */}
              <div className="flex justify-center gap-4 pt-4 border-t border-slate-700">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors rounded-lg active:opacity-80"
                    aria-label={social.label}
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>
      </nav>

      {/* Main Content */}
      <main>
        <section id="home">
          <Home />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="cricket-portfolio">
          <CricketPortfolio />
        </section>
        
        <section id="projects">
          <Projects onProjectClick={(project) => {
            if (project === 'srh') {
              setShowSrhProject(true);
            }
          }} />
        </section>
        
        <section id="certifications">
          <Credentials showToast={showToast} />
        </section>
        
        <section id="contact">
          <Contact showToast={showToast} />
        </section>
      </main>

      {/* Toast Notifications */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default App;