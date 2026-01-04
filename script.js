// Certificate data
const certificates = [
  {
    id: 'powerbi',
    title: 'PowerBI Workshop Certificate',
    issuer: 'OfficeMaster PowerBI Workshop - Creating AI-Powered interactive dashboards',
    description: 'PowerBI Workshop Certificate from OfficeMaster',
    imageUrl: '/PowerBI Workshop Certificate.jpg',
    brief: 'This "Certificate of Completion" from OfficeMaster confirms the successful participation in a "PowerBI Workshop," issued on March 30th, 2025. The certificate explicitly states that the holder "can create AI-Powered interactive dashboards in PowerBI in under 30 mins." This demonstrates practical skills in using PowerBI, a leading business intelligence tool, for data visualization and creating interactive reports, especially with an emphasis on efficiency and potentially AI integration for enhanced insights.',
    linkedinUrl: 'https://www.linkedin.com/posts/sriraj-w-v-p-s_powerbi-dataanalytics-businessintelligence-activity-7312026644481773568-xLJA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER4EaYBIUTdQpMEjPujtlFEccZmOjt2PiU'
  },
  {
    id: 'deloitte',
    title: 'Deloitte Data Analytics Job Simulation',
    issuer: 'Data analysis and forensic technology simulation',
    description: 'Deloitte Data Analytics Job Simulation Certificate',
    imageUrl: '/Deloitte data analyst job simulation.jpg',
    brief: 'This "Certificate of Completion" from Deloitte indicates participation in a "Data Analytics Job Simulation." The program, completed in March 2025, involved practical tasks in "Data analysis" and "Forensic technology." This simulation provides hands-on experience with real-world data challenges and the methodologies used by professional services firms like Deloitte in data analytics and forensic investigations. It suggests proficiency in data interpretation and application in a business context.',
    linkedinUrl: 'https://www.linkedin.com/posts/sriraj-w-v-p-s_dataanalytics-forensictechnology-continuouslearning-activity-7311460935464800256-8MEe?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER4EaYBIUTdQpMEjPujtlFEccZmOjt2PiU'
  },
  {
    id: 'ioc',
    title: 'IOC Professional Sport Management',
    issuer: 'International Olympic Committee certificate in Professional Sport Management',
    description: 'IOC Professional Sport Management Certificate',
    imageUrl: '/Professional Sport Management-Certificate.jpg',
    brief: 'This "Certificate of Achievement" from the International Olympic Committee (IOC) signifies the successful completion of a program focused on "Professional Sport Management." This certification likely covers key aspects of managing sports organizations, events, and athletes, including governance, marketing, finance, and operations within the sports industry. It demonstrates a foundational understanding of the administrative and strategic elements critical for a career in sports management.',
    linkedinUrl: 'https://www.linkedin.com/posts/sriraj-w-v-p-s_sportsmanagement-ioc-athlete365-activity-7309998420306337792-dRc0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER4EaYBIUTdQpMEjPujtlFEccZmOjt2PiU'
  },
  {
    id: 'cricket',
    title: 'Cricket Analytics Workshop',
    issuer: 'Mad About Sports 5-day workshop on cricket analytics and data-driven decision making',
    description: 'Cricket Analytics Workshop Certificate',
    imageUrl: '/MAS_Certificate.jpg',
    brief: 'This "Certificate of Completion" from Mad About Sports is for a "5-days workshop on Cricket Analytics," issued on March 23rd, 2025. The certificate outlines key skills gained: "Analyze and interpret cricket match data using professional analytics techniques," "Apply data-driven decision-making to select the best XI for India\'s next match," and "Utilize a step-by-step framework to pursue a part-time or full-time career in cricket analytics." This showcases specialized analytical skills applied to the domain of sports, specifically cricket.',
    linkedinUrl: 'https://www.linkedin.com/posts/sriraj-w-v-p-s_cricketanalytics-sportsdata-iplanalysis-activity-7309584706583310336-wDhW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER4EaYBIUTdQpMEjPujtlFEccZmOjt2PiU'
  },
  {
    id: 'commonwealth',
    title: 'Commonwealth Bank Data Science Simulation',
    issuer: 'Commonwealth Bank Introduction to Data Science Job Simulation',
    description: 'Commonwealth Bank Data Science Job Simulation',
    imageUrl: '/introduction to data science job simulation.jpg',
    brief: 'This "Certificate of Completion" from Commonwealth Bank, issued via Forage on March 17th, 2025, is for an "Introduction to Data Science Job Simulation." During the program, practical tasks were completed in "Data Aggregation and Analysis," "Data Anonymisation," "Propose Data Analysis Approaches," and "Designing a Database." This simulation provides foundational exposure to data science workflows within a financial institution context, focusing on data handling, privacy, and analytical planning.',
    linkedinUrl: 'https://www.linkedin.com/posts/sriraj-w-v-p-s_commonwealth-bank-introduction-to-data-science-activity-7307438109439229953-wAkr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER4EaYBIUTdQpMEjPujtlFEccZmOjt2PiU'
  },
  {
    id: 'nvidia',
    title: 'NVIDIA CUDA Python Certificate',
    issuer: 'NVIDIA Deep Learning Institute - Fundamentals of Accelerated Computing with CUDA Python',
    description: 'NVIDIA CUDA Python Certificate',
    imageUrl: '/NVIDIA-Deep Learning Institute certification.jpg',
    brief: 'This "Certificate of Competency" from NVIDIA, issued on February 25th, 2025, acknowledges "demonstrating competence in the completion of Fundamentals of Accelerated Computing with CUDA Python." This highly specialized certification indicates proficiency in using NVIDIA\'s CUDA platform and Python for parallel computing, which is crucial for high-performance computing, data science, and artificial intelligence applications. It highlights expertise in optimizing code for GPUs.',
    linkedinUrl: 'https://www.linkedin.com/posts/sriraj-w-v-p-s_nvidia-deeplearning-cuda-activity-7303453602331734017-sD4i?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER4EaYBIUTdQpMEjPujtlFEccZmOjt2PiU'
  },
  {
    id: 'excel',
    title: 'Microsoft Excel Certificate',
    issuer: 'Coursera Project Network - Getting Started with Microsoft Excel',
    description: 'Microsoft Excel Certificate from Coursera',
    imageUrl: '/Getting Started with Microsoft Excel certificate Coursera.jpg',
    brief: 'This "Project Certificate" from Coursera Project Network, dated March 6th, 2025, signifies the successful completion of "Getting Started with Microsoft Excel." This certification validates foundational skills in using Microsoft Excel, an essential tool for data organization, analysis, and visualization in various professional settings.',
    linkedinUrl: 'https://www.linkedin.com/posts/sriraj-w-v-p-s_excel-dataanalysis-learning-activity-7303450812817489920-4naH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER4EaYBIUTdQpMEjPujtlFEccZmOjt2PiU'
  },
  {
    id: 'aws',
    title: 'AWS Solutions Architecture Job Simulation',
    issuer: 'Amazon Web Services Solutions Architecture Job Simulation',
    description: 'AWS Solutions Architecture Certificate',
    imageUrl: '/AWS Solutions Architecture Job Simulation Certification of Completion.jpg',
    brief: 'This "Certificate of Completion" from AWS, issued via Forage on March 3rd, 2025, is for a "Solutions Architecture Job Simulation." The practical task involved "Designing a simple, scalable, hosting architecture." This simulation provides practical experience in understanding and designing cloud-based solutions using AWS services, a critical skill for roles involving cloud infrastructure and system design.',
    linkedinUrl: 'https://www.linkedin.com/posts/sriraj-w-v-p-s_i-just-completed-amazon-web-services-aws-activity-7302321138938916865-rgUA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER4EaYBIUTdQpMEjPujtlFEccZmOjt2PiU'
  },
  {
    id: 'business-analysis',
    title: 'Business Analysis & Process Management Certification',
    issuer: 'Coursera - Business Analysis & Process Management',
    description: 'Business Analysis & Process Management Certification',
    imageUrl: '/Business Analysis & Process Management Certification.jpg',
    brief: '',
    linkedinUrl: ''
  },
  {
    id: 'software-engineering',
    title: 'Software Engineering Job Simulation Certificate',
    issuer: 'Forage - Software Engineering Job Simulation',
    description: 'Software Engineering Job Simulation Certificate',
    imageUrl: '/Software Engineering Job Simulation Certificate.jpg',
    brief: 'This "Certificate of Completion" from Electronic Arts (EA), issued via Forage on March 2nd, 2025, is for a "Software Engineering Job Simulation." Practical tasks completed include "Write a Feature Proposal," "Create a Game Object Class," "Improve Inventory System," and "Live Bugfix." This simulation offers hands-on experience with core software development practices within the context of game development, covering aspects from design to debugging.',
    linkedinUrl: 'https://www.linkedin.com/posts/sriraj-w-v-p-s_softwareengineering-gamedevelopment-electronicarts-activity-7301895650001006592-Kr84?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER4EaYBIUTdQpMEjPujtlFEccZmOjt2PiU'
  }
];

// Global state
let currentSection = 'home';
let selectedCertificate = null;

// DOM elements
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const navLinks = document.querySelectorAll('.nav-link');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const certificatesGrid = document.getElementById('certificates-grid');
const certificateModal = document.getElementById('certificate-modal');
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');
const srhProjectModal = document.getElementById('srh-project-modal');
const mainContent = document.querySelector('main');

// Initialize certificates grid
function initCertificates() {
  certificatesGrid.innerHTML = certificates.map(cert => `
    <div class="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 group" data-cert-id="${cert.id}">
      <div class="h-48 overflow-hidden">
        <img src="${cert.imageUrl}" alt="${cert.title} certificate" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div class="p-4">
        <h3 class="text-white font-semibold text-sm mb-2 line-clamp-2">${cert.title}</h3>
        <p class="text-gray-400 text-xs line-clamp-2">${cert.issuer}</p>
      </div>
    </div>
  `).join('');

  // Add click handlers
  certificatesGrid.querySelectorAll('[data-cert-id]').forEach(el => {
    el.addEventListener('click', () => {
      const certId = el.getAttribute('data-cert-id');
      const cert = certificates.find(c => c.id === certId);
      if (cert) openCertificateModal(cert);
    });
  });
}

// Open certificate modal
function openCertificateModal(cert) {
  selectedCertificate = cert;
  document.getElementById('modal-title').textContent = cert.title;
  document.getElementById('modal-issuer').textContent = cert.issuer;
  document.getElementById('modal-image').src = cert.imageUrl;
  document.getElementById('modal-image').alt = cert.title;
  document.getElementById('modal-brief').textContent = cert.brief || '';
  
  const linkedinLink = document.getElementById('linkedin-link');
  if (cert.linkedinUrl) {
    linkedinLink.href = cert.linkedinUrl;
    linkedinLink.classList.remove('hidden');
  } else {
    linkedinLink.classList.add('hidden');
  }
  
  certificateModal.classList.remove('hidden');
}

// Close certificate modal
function closeCertificateModal() {
  certificateModal.classList.add('hidden');
  selectedCertificate = null;
}

// Show toast notification
function showToast(message, type) {
  toast.textContent = message;
  toast.className = `fixed top-20 right-4 z-50 p-4 rounded-lg text-white animate-slide-in ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`;
  toast.classList.remove('hidden');
  
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 5000);
}

// Scroll to section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    currentSection = sectionId;
    updateActiveNav();
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  }
}

// Update active navigation
function updateActiveNav() {
  navLinks.forEach(link => {
    const section = link.getAttribute('data-section');
    if (section === currentSection) {
      link.classList.remove('text-gray-300', 'hover:text-white');
      link.classList.add('text-cyan-400');
    } else {
      link.classList.remove('text-cyan-400');
      link.classList.add('text-gray-300', 'hover:text-white');
    }
  });
  
  mobileNavLinks.forEach(link => {
    const section = link.getAttribute('data-section');
    if (section === currentSection) {
      link.classList.remove('text-gray-300', 'hover:text-white');
      link.classList.add('text-cyan-400');
    } else {
      link.classList.remove('text-cyan-400');
      link.classList.add('text-gray-300', 'hover:text-white');
    }
  });
}

// Handle scroll
function handleScroll() {
  const scrollY = window.scrollY;
  
  // Update navbar background
  if (scrollY > 50) {
    navbar.classList.remove('bg-transparent');
    navbar.classList.add('bg-slate-900/95', 'backdrop-blur-md', 'border-b', 'border-slate-700');
  } else {
    navbar.classList.add('bg-transparent');
    navbar.classList.remove('bg-slate-900/95', 'backdrop-blur-md', 'border-b', 'border-slate-700');
  }
  
  // Update current section
  const sections = ['home', 'about', 'cricket-portfolio', 'projects', 'certifications', 'contact'];
  const scrollPosition = scrollY + 100;
  
  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const { offsetTop, offsetHeight } = element;
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        if (currentSection !== section) {
          currentSection = section;
          updateActiveNav();
        }
        break;
      }
    }
  }
}

// Toggle mobile menu
function toggleMobileMenu() {
  const isHidden = mobileMenu.classList.contains('hidden');
  if (isHidden) {
    mobileMenu.classList.remove('hidden');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  } else {
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }
}

// Handle contact form submission
async function handleContactSubmit(e) {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    message: document.getElementById('message').value.trim(),
    honeypot: document.querySelector('[name="honeypot"]').value
  };
  
  // Honeypot check
  if (formData.honeypot !== '') {
    showToast('Spam detected. Please try again.', 'error');
    return;
  }
  
  // Validation
  if (!formData.name || !formData.email || !formData.message) {
    showToast('Please fill in all fields.', 'error');
    return;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    showToast('Please enter a valid email address.', 'error');
    return;
  }
  
  const submitBtn = document.getElementById('submit-btn');
  const submitText = document.getElementById('submit-text');
  const submitSpinner = document.getElementById('submit-spinner');
  
  submitBtn.disabled = true;
  submitText.textContent = 'Sending...';
  submitSpinner.classList.remove('hidden');
  
  try {
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    let response;
    
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
      contactForm.reset();
    } else {
      let errMsg = 'Failed to send message.';
      try {
        const data = await response.json();
        if (data?.message) errMsg = data.message;
      } catch {}
      throw new Error(errMsg);
    }
  } catch (error) {
    showToast('Failed to send message. Please try again or contact me directly.', 'error');
  } finally {
    submitBtn.disabled = false;
    submitText.textContent = 'Send Message';
    submitSpinner.classList.add('hidden');
  }
}

// Handle resume download
function handleResumeDownload() {
  const exportDocxUrl = 'https://docs.google.com/document/d/1LX9UQ-BgZbzr56FdvAk0pohqmY_lUVWL/export?format=docx';
  const link = document.createElement('a');
  link.href = exportDocxUrl;
  link.download = 'Sriraj_Resume.docx';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('Downloading latest resume (DOCX)...', 'success');
}

// Handle certificate download
function handleCertificateDownload() {
  if (selectedCertificate) {
    showToast(`Download started for ${selectedCertificate.title}`, 'success');
    // You can implement actual download logic here if needed
  }
}

// Show SRH project modal
function showSrhProject() {
  srhProjectModal.classList.remove('hidden');
  mainContent.style.display = 'none';
}

// Hide SRH project modal
function hideSrhProject() {
  srhProjectModal.classList.add('hidden');
  mainContent.style.display = 'block';
  scrollToSection('projects');
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Initialize certificates
  initCertificates();
  
  // Navigation
  document.getElementById('logo-btn').addEventListener('click', () => scrollToSection('home'));
  document.getElementById('explore-btn').addEventListener('click', () => scrollToSection('about'));
  
  // Nav links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const section = link.getAttribute('data-section');
      scrollToSection(section);
    });
  });
  
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      const section = link.getAttribute('data-section');
      scrollToSection(section);
    });
  });
  
  // Mobile menu
  menuToggle.addEventListener('click', toggleMobileMenu);
  
  // Contact form
  contactForm.addEventListener('submit', handleContactSubmit);
  
  // Resume download
  document.getElementById('resume-download-btn').addEventListener('click', handleResumeDownload);
  
  // Certificate modal
  document.getElementById('close-cert-modal').addEventListener('click', closeCertificateModal);
  document.getElementById('download-cert-btn').addEventListener('click', handleCertificateDownload);
  certificateModal.addEventListener('click', (e) => {
    if (e.target === certificateModal) closeCertificateModal();
  });
  
  // SRH project
  document.getElementById('srh-project-btn').addEventListener('click', showSrhProject);
  document.getElementById('srh-back-btn').addEventListener('click', hideSrhProject);
  
  // Scroll handler
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial call
});

