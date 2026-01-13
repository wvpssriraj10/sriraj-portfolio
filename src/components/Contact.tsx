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
      // Use NODE_ENV for build-time detection of development vs production.
      // Fallback to hostname check in case NODE_ENV isn't available.
      const isLocal = (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development')
        || (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'));

      let response: Response;
      if (isLocal) {
        // When running locally, post directly to FormSubmit
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
        // Production: send JSON to our serverless function
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

      // Log response for debugging
      console.log('Contact form response status:', response.status);
      let responseBody: any = null;
      try {
        responseBody = await response.clone().json().catch(() => null);
        console.log('Contact form response body:', responseBody);
      } catch (err) {
        console.log('No JSON body in contact response');
      }

      if (response.ok) {
        showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
        setFormData({ name: '', email: '', message: '', honeypot: '' });
      } else {
        // Prefer server-provided message if available
        const serverMessage = responseBody?.message || 'Failed to send message.';
        showToast(serverMessage, 'error');
        throw new Error(serverMessage);
      }
    } catch (error: any) {
      console.error('Error sending contact message:', error);
      // If error has message, surface it; otherwise show generic fallback
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

  return (
    <div className="night-sky-bg">
      <section id="contact" className="py-20 bg-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Get in touch with me for collaborations, opportunities, or just to say hello!
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} style={{ display: 'none' }} autoComplete="off" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name</label>
                <input 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="mt-1 block w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent" 
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</label>
                <input 
                  id="email" 
                  name="email" 
                  type="email"
                  value={formData.email} 
                  onChange={handleChange} 
                  className="mt-1 block w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent" 
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="mt-1 block w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none" 
                  rows={6}
                  placeholder="Your message..."
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-500/50 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
                <button 
                  type="button" 
                  onClick={handleResumeDownload} 
                  className="w-full sm:w-auto border border-cyan-400 text-cyan-300 hover:text-white hover:bg-cyan-400/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download size={16} />
                  <span>Download Resume</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
