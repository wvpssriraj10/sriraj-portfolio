import React, { useState } from 'react';
import { Mail, Linkedin, Github, Instagram, Download } from 'lucide-react';

// ContactProps removed as showToast is no longer used
interface ContactProps {
  showToast: (message: string, type: 'success' | 'error') => void;
}

const Contact = ({ }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: ''
  });





  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleResumeDownload = () => {
    const exportDocxUrl = 'https://docs.google.com/document/d/1LX9UQ-BgZbzr56FdvAk0pohqmY_lUVWL/export?format=docx';
    const link = document.createElement('a');
    link.href = exportDocxUrl;
    link.download = 'Sriraj_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Downloading latest resume (DOCX)...', 'success');
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:wsriraj10@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sriraj-w-v-p-s', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/wvpssriraj10', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/w.v.p.s.sriraj_10/', label: 'Instagram' }
  ];

  return (
    <div className="night-sky-bg">
      <section id="contact" className="py-12 sm:py-20 pb-10 sm:pb-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Contact Me!</h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-4"></div>
            <p className="text-blue-400 text-base sm:text-lg">
              Get in Touch
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Left Side - Contact Form - 20-24px horizontal padding */}
            <div className="w-full min-w-0">
              <form
                action="https://formsubmit.co/wsriraj10@gmail.com"
                method="POST"
                className="space-y-4 sm:space-y-6"
              >
                {/* Configuration Fields for FormSubmit */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="true" /> {/* Keep true so user can solve it if blocked */}
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} /> {/* Redirect back to same page */}
                <input type="hidden" name="_subject" value="New submission from Portfolio" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2 text-left">
                    Your Name <span className="text-white">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full min-h-[48px] px-4 py-3 bg-gray-800/90 border border-gray-400 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all text-base"
                    placeholder="What's your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2 text-left">
                    Your Email <span className="text-white">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full min-h-[48px] px-4 py-3 bg-gray-800/90 border border-gray-400 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all text-base"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2 text-left">
                    Your Message <span className="text-white">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[120px] px-4 py-3 bg-gray-800/90 border border-gray-400 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none transition-all text-base"
                    rows={5}
                    placeholder="What you want to say?"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[48px] bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Send Message
                </button>

                {/* Social Icons - 44x44 touch targets; centered on mobile only */}
                <div className="flex justify-center sm:justify-start gap-4 sm:gap-6 pt-4 flex-wrap">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-w-[44px] min-h-[44px] flex items-center justify-center text-white hover:text-cyan-400 transition-colors rounded-lg active:opacity-80"
                      aria-label={social.label}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </form>
            </div>

            {/* Right Side - Profile Picture and CTA (footer area on mobile) */}
            <div className="flex flex-col items-center w-full min-w-0 pb-8 sm:pb-10">
              {/* Profile Picture - responsive size on mobile */}
              <div className="relative mb-6 sm:mb-8 w-[min(18rem,85vw)] h-[min(18rem,85vw)] sm:w-[28rem] sm:h-[28rem] flex items-center justify-center mx-auto">
                <div className="absolute inset-0 rounded-full border-2 border-blue-400/40 animate-pulse"></div>
                <div className="absolute w-[92%] h-[92%] rounded-full border-2 border-blue-400/50 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute w-[85%] h-[85%] rounded-full border-2 border-blue-500/60 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                <div className="absolute w-[78%] h-[78%] rounded-full border-2 border-blue-500/70 animate-pulse" style={{ animationDelay: '0.9s' }}></div>
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-blue-400 shadow-2xl z-10 bg-slate-800 aspect-square">
                  <img
                    src="/sriraj1.jpg"
                    alt="W V P S SRIRAJ"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* CTA Text - wrap, no overflow */}
              <div className="mb-6 sm:mb-8 w-full flex justify-center px-1">
                <div className="flex items-center gap-3 max-w-md justify-center">
                  <span className="w-4 h-4 bg-cyan-400 rounded-full flex-shrink-0 animate-slow-jump mt-0.5" aria-hidden></span>
                  <p className="text-lg sm:text-2xl font-bold italic m-0 text-white text-center break-words" style={{
                    textShadow: '0 0 10px rgba(96, 165, 250, 0.5), 0 0 20px rgba(6, 182, 212, 0.3)',
                    lineHeight: '1.3'
                  }}>
                    Let's build something amazing together!
                  </p>
                </div>
              </div>

              {/* Download Resume - min 48px, centered */}
              <div className="self-center">
                <button
                  onClick={handleResumeDownload}
                  className="min-h-[48px] px-6 sm:px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 active:from-cyan-700 active:to-blue-800 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
