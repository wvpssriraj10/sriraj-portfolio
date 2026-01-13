import React, { useState } from 'react';
import { Mail, Linkedin, Github, Instagram, Download } from 'lucide-react';

interface ContactProps {
  showToast: (message: string, type: 'success' | 'error') => void;
}

const Contact = ({ showToast }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.honeypot !== '') {
      showToast('Spam detected. Please try again.', 'error');
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast('Please fill in all fields.', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const isLocal = (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development')
        || (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'));

      let response: Response;
      if (isLocal) {
        const form = new FormData();
        form.append('name', formData.name);
        form.append('email', formData.email);
        form.append('message', formData.message);
        form.append('_subject', `New message from ${formData.name}`);
        form.append('_replyto', formData.email);
        form.append('_captcha', 'false');
        form.append('_template', 'table');

        response = await fetch('https://formsubmit.co/ajax/wsriraj10@gmail.com', {
          method: 'POST',
          body: form,
          headers: { 'Accept': 'application/json' }
        });
      } else {
        response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message
          })
        });
      }

      if (response.ok) {
        showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
        setFormData({ name: '', email: '', message: '', honeypot: '' });
      } else {
        const responseBody = await response.json().catch(() => ({}));
        const serverMessage = responseBody?.message || 'Failed to send message.';
        showToast(serverMessage, 'error');
      }
    } catch (error: any) {
      console.error('Error sending contact message:', error);
      const errMsg = error?.message || 'Failed to send message. Please try again or contact me directly.';
      showToast(errMsg, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <section id="contact" className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} style={{ display: 'none' }} autoComplete="off" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2 text-left">
                    Your Name <span className="text-white">*</span>
                  </label>
                  <input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-gray-800/90 border border-gray-400 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all" 
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
                    className="w-full px-4 py-3 bg-gray-800/90 border border-gray-400 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all" 
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
                    className="w-full px-4 py-3 bg-gray-800/90 border border-gray-400 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none transition-all" 
                    rows={6}
                    placeholder="What you want to say?"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-500/50 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Social Icons Below Form */}
                <div className="flex gap-6 pt-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyan-400 transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </form>
            </div>

            {/* Right Side - Profile Picture and CTA */}
            <div className="flex flex-col items-start">
              {/* Profile Picture with Glowing Concentric Circles */}
              <div className="relative mb-8 w-64 h-64 flex items-center justify-center">
                {/* Outer glowing circles - all blue colored, centered around picture */}
                <div className="absolute w-64 h-64 rounded-full border-2 border-blue-400/40 animate-pulse"></div>
                <div className="absolute w-60 h-60 rounded-full border-2 border-blue-400/50 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute w-56 h-56 rounded-full border-2 border-blue-500/60 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                <div className="absolute w-52 h-52 rounded-full border-2 border-blue-500/70 animate-pulse" style={{ animationDelay: '0.9s' }}></div>
                
                {/* Profile Picture */}
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-blue-400 shadow-2xl z-10 bg-slate-800">
                  <img 
                    src="/sriraj1.jpg"
                    alt="W V P S SRIRAJ"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Call to Action Text */}
              <div className="mb-8">
                <p className="text-white text-xl font-medium flex items-center gap-2 text-left">
                  <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                  Let's build something amazing together!
                </p>
              </div>

              {/* Download Resume Button */}
              <button 
                onClick={handleResumeDownload}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
