import React, { useState, memo, useCallback } from 'react';
import { Mail, Linkedin, Github, Instagram, Download } from 'lucide-react';

interface ContactProps {
  showToast: (message: string, type: 'success' | 'error') => void;
}

const Contact = memo(({ showToast }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
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
  }, [formData, showToast]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }, []);

  const handleResumeDownload = useCallback(() => {
    const exportDocxUrl = 'https://docs.google.com/document/d/1LX9UQ-BgZbzr56FdvAk0pohqmY_lUVWL/export?format=docx';
    const link = document.createElement('a');
    link.href = exportDocxUrl;
    link.download = 'Sriraj_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Downloading latest resume (DOCX)...', 'success');
  }, [showToast]);

  return (
    <section id="contact" className="py-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} style={{ display: 'none' }} autoComplete="off" />

          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="mt-1 block w-full" rows={6} />
          </div>

          <div className="flex items-center gap-3">
            <button type="submit" disabled={isSubmitting} className="btn-primary">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            <button type="button" onClick={handleResumeDownload} className="btn-secondary">
              <Download size={16} /> Resume
            </button>
          </div>
        </form>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;
