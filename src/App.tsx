import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Linkedin, Github, Instagram, ChevronDown } from 'lucide-react';

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
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Clickable */}
            <button 
              onClick={goToHome}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold text-white">
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

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    currentSection === item.id
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Social Icons */}
              <div className="flex justify-center space-x-6 pt-4 border-t border-slate-700">
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
            </div>
          </div>
        )}
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