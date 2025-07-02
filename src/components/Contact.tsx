import React, { useState } from 'react';
import { Mail, Linkedin, Github, Instagram, Send, Download } from 'lucide-react';

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
      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('message', formData.message);
      form.append('_subject', `New message from ${formData.name}`);
      form.append('_captcha', 'false');
      form.append('_template', 'table');

      const response = await fetch('https://formsubmit.co/wsriraj10@gmail.com', {
        method: 'POST',
        body: form
      });

      if (response.ok) {
        showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
        setFormData({ name: '', email: '', message: '', honeypot: '' });
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      showToast('Failed to send message. Please try again or contact me directly.', 'error');
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
    const link = document.createElement('a');
    link.href = '/sriraj resume.docx';
    link.download = 'sriraj resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Resume download started!', 'success');
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:wsriraj10@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sriraj-w-v-p-s', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/wvpssriraj10', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/w.v.p.s.sriraj_10/', label: 'Instagram' }
  ];

  return (
    <div className="night-sky-bg">
      <section className="py-20 bg-transparent min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-white">Contact Me!</h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mt-2"></div>
            <p className="text-cyan-300 text-xl mt-4 font-semibold">Get in Touch</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Contact Form */}
            <div className="max-w-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="What's your good name?"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                    placeholder="What you want to say?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Social Links */}
              <div className="mt-12 pt-8">
                <div className="flex justify-center lg:justify-start space-x-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Profile Image with Resume Button */}
            <div className="flex flex-col items-center justify-center">
              {/* Profile Image with Glow Effect - Larger */}
              <div className="relative mb-8 flex flex-col items-center">
                {/* Outer glow ring - larger */}
                <div className="w-[28rem] h-[28rem] rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 animate-pulse flex items-center justify-center">
                  {/* Inner ring */}
                  <div className="w-[24rem] h-[24rem] rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-600/30 flex items-center justify-center">
                    {/* Profile image container */}
                    <div className="w-[20rem] h-[20rem] rounded-full overflow-hidden border-4 border-cyan-400/70 shadow-2xl">
                      <img 
                        src="/sriraj1.jpg"
                        alt="W V P S SRIRAJ"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
                <div className="absolute -bottom-14 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce delay-300"></div>
                <div className="mt-16 text-2xl font-bold italic text-cyan-300 text-center">Let&apos;s build something amazing together!</div>
              </div>
              {/* Download Resume Button - Centered below image */}
              <button
                onClick={handleResumeDownload}
                className="relative group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-cyan-400/50 hover:border-cyan-300 flex items-center space-x-3 mx-auto"
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-30 blur-sm group-hover:opacity-50 transition-opacity duration-300"></div>
                {/* Button content */}
                <div className="relative flex items-center space-x-3">
                  <Download size={20} className="animate-bounce" />
                  <span className="text-lg">Download Resume</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;