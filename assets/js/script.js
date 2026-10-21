// Certificate data with categories (Issue #18)
const certificates = [
  {
    id: 'usc-mathematics-ai-datascience',
    title: 'The Role of Mathematics in AI and Data Science',
    issuer: 'University of Southern California (USC India)',
    description: 'Webinar on foundational mathematical principles in AI and Data Science',
    category: 'Data Science',
    date: 'Oct 2026',
    imageUrl: '/assets/images/USC india certificate.jpg',
    brief: 'Attended an insightful webinar hosted by the University of Southern California (USC India) exploring foundational mathematical principles and their essential role in shaping modern Artificial Intelligence and Data Science.',
    linkedinUrl: 'https://lnkd.in/p/dB8WNC5c'
  },
  {
    id: 'nestgen-sustainability-marketing',
    title: 'NESTGEN Digital & Marketing Masterclass - Purpose-Driven & Sustainability Marketing',
    issuer: 'Nestlé',
    description: 'Masterclass certification from the NESTGEN E-Learning Festival 2026 focusing on purpose-driven marketing.',
    category: 'Management/Marketing',
    date: 'Jul 2026',
    imageUrl: '/assets/images/nestgen-sustainability-marketing.jpg',
    brief: 'This certificate was awarded for completing the NESTGEN Digital & Marketing masterclass on 21st July 2026. The curriculum focused on unlocking specific skills in Purpose-Driven & Sustainability Marketing.',
    linkedinUrl: 'https://lnkd.in/p/ggrmSxcr'
  },
  {
    id: 'nestgen-ai-social-commerce',
    title: 'NESTGEN Digital & Marketing Masterclass - Social Commerce, AI & Data',
    issuer: 'Nestlé',
    description: 'Masterclass certification from the NESTGEN E-Learning Festival 2026 focusing on AI, data, and brand strategy.',
    category: 'Management/Marketing',
    date: 'Jul 2026',
    imageUrl: '/assets/images/nestgen-ai-social-commerce.jpg',
    brief: 'This certificate was awarded for completing the NESTGEN Digital & Marketing masterclass on 21st July 2026. The curriculum focused on unlocking skills in social commerce, AI & data, and culture-driven brand strategy.',
    linkedinUrl: 'https://lnkd.in/p/ggrmSxcr'
  },
  {
    id: 'oracle-oci-foundations-2025',
    title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    issuer: 'Oracle / Oracle University',
    description: 'Foundations Associate certification for Oracle Cloud Infrastructure 2025.',
    category: 'Cloud',
    date: 'Mar 2026',
    imageUrl: '/assets/images/eCertificate Oracle Certified Foundations Associate.jpg',
    brief: 'This eCertificate officially recognizes the achievement of the Oracle Cloud Infrastructure 2025 Certified Foundations Associate designation. It was awarded on March 20, 2026.',
    linkedinUrl: ''
  },
  {
    id: 'oracle-agentic-ai-foundations',
    title: 'Oracle Certified Foundations Associate – Agentic AI',
    issuer: 'Oracle',
    description: 'Official Oracle certification validating foundational expertise in Agentic AI principles, autonomous workflows, and AI agent architectures.',
    category: 'Data Science',
    date: '2026',
    imageUrl: '/assets/images/eCertificate Oracle Agentic AI Certified Foundations Associate.png',
    brief: 'This certification demonstrates a solid foundation in the core concepts of Agentic AI, focusing on how autonomous agents reason, plan, and execute tasks to solve complex problems. Through this program, I gained key insights into agent design patterns, decision-making frameworks, multi-agent coordination, and integrating agentic workflows into modern cloud applications to automate intelligent end-to-end processes.',
    linkedinUrl: 'https://www.linkedin.com/posts/sriraj-w-v-p-s_oracle-agentic-ai-certified-foundations-associate-activity-7499715059510571008-3IU9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER4EaYBIUTdQpMEjPujtlFEccZmOjt2PiU'
  },
  {
    id: 'hedera-hcf',
    title: 'Hedera Certified Foundation (HCF)',
    issuer: 'Hedera Hashgraph (Hedera Certification Program)',
    description: 'Hedera Certified Foundation Certificate',
    category: 'Cloud',
    date: '2026',
    imageUrl: '/assets/images/HCF CERTIFICATE.jpg',
    brief: 'Covers core network foundations including the Hashgraph DAG architecture, Gossip about Gossip protocol, Virtual Voting, and asynchronous Byzantine Fault Tolerance (aBFT) consensus. Validates understanding of network finality, node roles (Consensus vs. Mirror nodes), account structure, and transaction fees.',
    linkedinUrl: ''
  },
  {
    id: 'hedera-hcda',
    title: 'Hedera Certified Developer Associate (HCDA)',
    issuer: 'Hedera Hashgraph (Hedera Certification Program)',
    description: 'Hedera Certified Developer Associate Certificate',
    category: 'Cloud',
    date: '2026',
    imageUrl: '/assets/images/HCDA CERTIFICATE.jpg',
    brief: 'Focuses on programmatic application development using the Hedera JavaScript SDK. Covers multi-signature configurations, key rotation, native asset engineering via the Hedera Token Service (HTS), topic messaging via the Hedera Consensus Service (HCS), and deploying EVM-compatible Solidity smart contracts.',
    linkedinUrl: ''
  },
  {
    id: 'powerbi',
    title: 'PowerBI Workshop Certificate',
    issuer: 'OfficeMaster PowerBI Workshop - Creating AI-Powered interactive dashboards',
    description: 'PowerBI Workshop Certificate from OfficeMaster',
    category: 'Data Science',
    date: 'Mar 2025',
    imageUrl: '/assets/images/PowerBI Workshop Certificate.jpg',
    brief: 'This "Certificate of Completion" from OfficeMaster confirms the successful participation in a "PowerBI Workshop," issued on March 30th, 2025. The certificate explicitly states that the holder "can create AI-Powered interactive dashboards in PowerBI in under 30 mins." This demonstrates practical skills in using PowerBI, a leading business intelligence tool, for data visualization and creating interactive reports, especially with an emphasis on efficiency and potentially AI integration for enhanced insights.',
    linkedinUrl: 'https://www.linkedin.com/posts/sriraj-w-v-p-s_powerbi-dataanalytics-businessintelligence-activity-7312026644481773568-xLJA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER4EaYBIUTdQpMEjPujtlFEccZmOjt2PiU'
  },
  {
    id: 'deloitte',
    title: 'Deloitte Data Analytics Job Simulation',
    issuer: 'Data analysis and forensic technology simulation',
    description: 'Deloitte Data Analytics Job Simulation Certificate',
    category: 'Data Science',
    date: 'Mar 2025',
    imageUrl: '/assets/images/Deloitte data analyst job simulation.jpg',
    brief: 'This "Certificate of Completion" from Deloitte indicates participation in a "Data Analytics Job Simulation." The program, completed in March 2025, involved practical tasks in "Data analysis" and "Forensic technology." This simulation provides hands-on experience with real-world data challenges and the methodologies used by professional services firms like Deloitte in data analytics and forensic investigations. It suggests proficiency in data interpretation and application in a business context.',
    linkedinUrl: 'https://www.linkedin.com/posts/sriraj-w-v-p-s_dataanalytics-forensictechnology-continuouslearning-activity-7311460935464800256-8MEe?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER4EaYBIUTdQpMEjPujtlFEccZmOjt2PiU'
  },
  {
    id: 'ioc',
    title: 'IOC Professional Sport Management',
    issuer: 'International Olympic Committee certificate in Professional Sport Management',
    description: 'IOC Professional Sport Management Certificate',
    category: 'Management/Marketing',
    date: '2025',
    imageUrl: '/assets/images/Professional Sport Management-Certificate.jpg',
    brief: 'This "Certificate of Achievement" from the International Olympic Committee (IOC) signifies the successful completion of a program focused on "Professional Sport Management." This certification likely covers key aspects of managing sports organizations, events, and athletes, including governance, marketing, finance, and operations within the sports industry. It demonstrates a foundational understanding of the administrative and strategic elements critical for a career in sports management.',
    linkedinUrl: 'https://www.linkedin.com/posts/sriraj-w-v-p-s_sportsmanagement-ioc-athlete365-activity-7309998420306337792-dRc0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER4EaYBIUTdQpMEjPujtlFEccZmOjt2PiU'
  },
  {
    id: 'cricket',
    title: 'Cricket Analytics Workshop',
    issuer: 'Mad About Sports 5-day workshop on cricket analytics and data-driven decision making',
    description: 'Cricket Analytics Workshop Certificate',
    category: 'Data Science',
    date: 'Mar 2025',
    imageUrl: '/assets/images/MAS_Certificate.jpg',
    brief: 'This "Certificate of Completion" from Mad About Sports is for a "5-days workshop on Cricket Analytics," issued on March 23rd, 2025. The certificate outlines key skills gained: "Analyze and interpret cricket match data using professional analytics techniques," "Apply data-driven decision-making to select the best XI for India\'s next match," and "Utilize a step-by-step framework to pursue a part-time or full-time career in cricket analytics." This showcases specialized analytical skills applied to the domain of sports, specifically cricket.',
    linkedinUrl: 'https://www.linkedin.com/posts/sriraj-w-v-p-s_cricketanalytics-sportsdata-iplanalysis-activity-7309584706583310336-wDhW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER4EaYBIUTdQpMEjPujtlFEccZmOjt2PiU'
  },
  {
    id: 'commonwealth',
    title: 'Commonwealth Bank Data Science Simulation',
    issuer: 'Commonwealth Bank Introduction to Data Science Job Simulation',
    description: 'Commonwealth Bank Data Science Job Simulation',
    category: 'Data Science',
    date: 'Mar 2025',
    imageUrl: '/assets/images/introduction to data science job simulation.jpg',
    brief: 'This "Certificate of Completion" from Commonwealth Bank, issued via Forage on March 17th, 2025, is for an "Introduction to Data Science Job Simulation." During the program, practical tasks were completed in "Data Aggregation and Analysis," "Data Anonymisation," "Propose Data Analysis Approaches," and "Designing a Database." This simulation provides foundational exposure to data science workflows within a financial institution context, focusing on data handling, privacy, and analytical planning.',
    linkedinUrl: 'https://www.linkedin.com/posts/sriraj-w-v-p-s_commonwealth-bank-introduction-to-data-science-activity-7307438109439229953-wAkr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER4EaYBIUTdQpMEjPujtlFEccZmOjt2PiU'
  },
  {
    id: 'nvidia',
    title: 'NVIDIA CUDA Python Certificate',
    issuer: 'NVIDIA Deep Learning Institute - Fundamentals of Accelerated Computing with CUDA Python',
    description: 'NVIDIA CUDA Python Certificate',
    category: 'Data Science',
    date: 'Feb 2025',
    imageUrl: '/assets/images/NVIDIA-Deep Learning Institute certification.jpg',
    brief: 'This "Certificate of Competency" from NVIDIA, issued on February 25th, 2025, acknowledges "demonstrating competence in the completion of Fundamentals of Accelerated Computing with CUDA Python." This highly specialized certification indicates proficiency in using NVIDIA\'s CUDA platform and Python for parallel computing, which is crucial for high-performance computing, data science, and artificial intelligence applications. It highlights expertise in optimizing code for GPUs.',
    linkedinUrl: 'https://www.linkedin.com/posts/sriraj-w-v-p-s_nvidia-deeplearning-cuda-activity-7303453602331734017-sD4i?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER4EaYBIUTdQpMEjPujtlFEccZmOjt2PiU'
  },
  {
    id: 'excel',
    title: 'Microsoft Excel Certificate',
    issuer: 'Coursera Project Network - Getting Started with Microsoft Excel',
    description: 'Microsoft Excel Certificate from Coursera',
    category: 'Data Science',
    date: 'Mar 2025',
    imageUrl: '/assets/images/Getting Started with Microsoft Excel certificate Coursera.jpg',
    brief: 'This "Project Certificate" from Coursera Project Network, dated March 6th, 2025, signifies the successful completion of "Getting Started with Microsoft Excel." This certification validates foundational skills in using Microsoft Excel, an essential tool for data organization, analysis, and visualization in various professional settings.',
    linkedinUrl: 'https://www.linkedin.com/posts/sriraj-w-v-p-s_excel-dataanalysis-learning-activity-7303450812817489920-4naH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER4EaYBIUTdQpMEjPujtlFEccZmOjt2PiU'
  },
  {
    id: 'aws',
    title: 'AWS Solutions Architecture Job Simulation',
    issuer: 'Amazon Web Services Solutions Architecture Job Simulation',
    description: 'AWS Solutions Architecture Certificate',
    category: 'Cloud',
    date: 'Mar 2025',
    imageUrl: '/assets/images/AWS Solutions Architecture Job Simulation Certification of Completion.jpg',
    brief: 'This "Certificate of Completion" from AWS, issued via Forage on March 3rd, 2025, is for a "Solutions Architecture Job Simulation." The practical task involved "Designing a simple, scalable, hosting architecture." This simulation provides practical experience in understanding and designing cloud-based solutions using AWS services, a critical skill for roles involving cloud infrastructure and system design.',
    linkedinUrl: 'https://www.linkedin.com/posts/sriraj-w-v-p-s_i-just-completed-amazon-web-services-aws-activity-7302321138938916865-rgUA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER4EaYBIUTdQpMEjPujtlFEccZmOjt2PiU'
  },
  {
    id: 'business-analysis',
    title: 'Business Analysis & Process Management Certification',
    issuer: 'Coursera - Business Analysis & Process Management',
    description: 'Business Analysis & Process Management Certification',
    category: 'Management/Marketing',
    date: '2025',
    imageUrl: '/assets/images/Business Analysis & Process Management Certification.jpg',
    brief: '',
    linkedinUrl: ''
  },
  {
    id: 'software-engineering',
    title: 'Software Engineering Job Simulation Certificate',
    issuer: 'Forage - Software Engineering Job Simulation',
    description: 'Software Engineering Job Simulation Certificate',
    category: 'Data Science',
    date: 'Mar 2025',
    imageUrl: '/assets/images/Software Engineering Job Simulation Certificate.jpg',
    brief: 'This "Certificate of Completion" from Electronic Arts (EA), issued via Forage on March 2nd, 2025, is for a "Software Engineering Job Simulation." Practical tasks completed include "Write a Feature Proposal," "Create a Game Object Class," "Improve Inventory System," and "Live Bugfix." This simulation offers hands-on experience with core software development practices within the context of game development, covering aspects from design to debugging.',
    linkedinUrl: 'https://www.linkedin.com/posts/sriraj-w-v-p-s_softwareengineering-gamedevelopment-electronicarts-activity-7301895650001006592-Kr84?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER4EaYBIUTdQpMEjPujtlFEccZmOjt2PiU'
  },
  {
    id: 'yuva-intern',
    title: 'Virtual Data Science Explorer Intern Certificate',
    issuer: 'Yuva Intern by Henry Harvin',
    description: 'Virtual internship program focusing on practical Data Science concepts, exploratory data analysis, and professional project development workflows.',
    category: 'Data Science',
    date: 'Aug 2026',
    // TODO: Generate real thumbnail from PDF first page. PDF at: /assets/images/YuvaIntern Internship Certificate.pdf
    // Add a file like: /assets/images/yuva-intern-thumbnail.jpg (recommended: 400x300px WebP/JPG)
    // Placeholder: certificate-style SVG matching other thumbnails
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIyMCIgeT0iMjAiIHdpZHRoPSIzNjAiIGhlaWdodD0iMjYwIiByeD0iOCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMzc0MTUxIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSIyMDAiIHk9IjEwMCIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjIwIiBmaWxsPSIjMTExODI5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5WaXJ0dWFsIERhdGEgU2NpZW5jZSBFeHBsb3JlciBJbnRlcm48L3RleHQ+PHRleHQgeD0iMjAwIiB5PSIxNDAiIGZvbnQtZmFtaWx5PSJJbnRlciwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzM3NDE1MSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+WWV1YSBJbnRlcm4gYnkgSGVucnkgSGFydmluPC90ZXh0Pjx0ZXh0IHg9IjIwMCIgeT0iMTgwIiBmb250LWZhbWlseT0iSW50ZXIsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2YjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkF3YXJkZWQgQXVndXN0IDIwMjY8L3RleHQ+PHJlY3QgeD0iMTUwIiB5PSIyMjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMSIgZmlsbD0iIzA2YjZkNCIvPjwvc3ZnPg==',
    brief: 'Completed a virtual internship program focusing on practical Data Science concepts, exploratory data analysis, and professional project development workflows. Awarded August 2026.',
    linkedinUrl: 'https://lnkd.in/p/dmu-6TJe'
  }
];

// Certificate categories for tabs (Issue #18)
const certCategories = ['All', 'Cloud', 'Data Science', 'Management/Marketing'];

// State for certificates section
let currentCertCategory = 'All';
let certShowMore = false;
const CERTS_PER_PAGE = 6;

// Global state
let currentSection = 'home';
let selectedCertificate = null;

// Certificate modal elements
const certificateModal = document.getElementById('certificate-modal');
const certificatesGrid = document.getElementById('certificates-grid');
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');
const srhProjectModal = document.getElementById('srh-project-modal');
const mainContent = document.querySelector('main');
const certTabsContainer = document.getElementById('cert-tabs');
const certShowMoreBtn = document.getElementById('cert-show-more-btn');

// Lightbox modal elements (Issue #20)
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.getElementById('lightbox-close');
let lastFocusedElement = null;

// Initialize certificates grid with tabs and show more (Issue #18)
function initCertificates() {
  // Build category tabs
  if (certTabsContainer) {
    certTabsContainer.innerHTML = certCategories.map((cat, i) => `
      <button class="cert-tab px-4 py-2 text-sm font-medium rounded-full transition-all ${
        i === 0 ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
      }" data-category="${cat}" aria-selected="${i === 0}" role="tab">
        ${cat}
      </button>
    `).join('');

    certTabsContainer.querySelectorAll('.cert-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        currentCertCategory = btn.dataset.category;
        certShowMore = false;
        certTabsContainer.querySelectorAll('.cert-tab').forEach(b => {
          b.classList.remove('bg-cyan-500', 'text-white');
          b.classList.add('bg-slate-800', 'text-gray-300');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.remove('bg-slate-800', 'text-gray-300');
        btn.classList.add('bg-cyan-500', 'text-white');
        btn.setAttribute('aria-selected', 'true');
        renderCertificates();
      });
    });
  }

  // Show More button handler
  if (certShowMoreBtn) {
    certShowMoreBtn.addEventListener('click', () => {
      certShowMore = !certShowMore;
      certShowMoreBtn.textContent = certShowMore ? 'Show Less' : 'Show More';
      certShowMoreBtn.setAttribute('aria-expanded', certShowMore);
      renderCertificates();
    });
  }

  renderCertificates();
}

// Render filtered certificates
function renderCertificates() {
  let filtered = certificates.filter(c => currentCertCategory === 'All' || c.category === currentCertCategory);
  if (!certShowMore) {
    filtered = filtered.slice(0, CERTS_PER_PAGE);
  }

  certificatesGrid.innerHTML = filtered.map(cert => `
    <div class="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 group" data-cert-id="${cert.id}">
      <div class="h-48 overflow-hidden bg-slate-900 flex items-center justify-center relative">
        ${cert.imageUrl.toLowerCase().endsWith('.pdf')
          ? `<div class="text-cyan-400 flex flex-col items-center p-4"><svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mb-2 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg><span class="text-xs font-semibold uppercase tracking-wider text-gray-300 group-hover:text-cyan-300 transition-colors">View PDF</span></div>`
          : `<img src="${cert.imageUrl}" alt="${cert.title} certificate" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 cursor-zoom-in" loading="lazy" data-lightbox="${cert.imageUrl}" />`
        }
        <div class="absolute bottom-2 left-2 right-2 text-xs text-gray-400 bg-black/60 px-2 py-1 rounded text-center">${cert.date}</div>
      </div>
      <div class="p-4">
        <h3 class="text-white font-semibold text-sm mb-2 line-clamp-2">${cert.title}</h3>
        <p class="text-gray-400 text-xs line-clamp-1">${cert.issuer} | ${cert.category}</p>
      </div>
    </div>
  `).join('');

  // Add click handlers for certificate modal
  certificatesGrid.querySelectorAll('[data-cert-id]').forEach(el => {
    el.addEventListener('click', () => {
      const certId = el.getAttribute('data-cert-id');
      const cert = certificates.find(c => c.id === certId);
      if (cert) openCertificateModal(cert);
    });
  });

  // Add lightbox handlers for certificate images (Issue #20)
  certificatesGrid.querySelectorAll('[data-lightbox]').forEach(img => {
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      openLightbox(img.dataset.lightbox, img.alt);
    });
  });

  // Toggle Show More button visibility
  const totalFiltered = certificates.filter(c => currentCertCategory === 'All' || c.category === currentCertCategory).length;
  if (certShowMoreBtn) {
    certShowMoreBtn.classList.toggle('hidden', totalFiltered <= CERTS_PER_PAGE);
  }
}

// Open certificate modal
function openCertificateModal(cert) {
  selectedCertificate = cert;
  document.getElementById('modal-title').textContent = cert.title;
  document.getElementById('modal-issuer').textContent = cert.issuer;
  
  const imgElement = document.getElementById('modal-image');
  const pdfElement = document.getElementById('modal-pdf');
  
  if (cert.imageUrl.toLowerCase().endsWith('.pdf')) {
    imgElement.classList.add('hidden');
    pdfElement.src = cert.imageUrl;
    pdfElement.classList.remove('hidden');
  } else {
    pdfElement.classList.add('hidden');
    pdfElement.src = '';
    imgElement.src = cert.imageUrl;
    imgElement.alt = cert.title;
    imgElement.classList.remove('hidden');
  }
  
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

// Lightbox modal functions (Issue #20)
function openLightbox(imageUrl, altText) {
  lastFocusedElement = document.activeElement;
  lightboxImage.src = imageUrl;
  lightboxImage.alt = altText;
  lightboxModal.classList.remove('hidden');
  lightboxModal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  lightboxClose.focus();
  trapFocus(lightboxModal);
}

function closeLightbox() {
  lightboxModal.classList.add('hidden');
  lightboxModal.classList.remove('flex');
  lightboxImage.src = '';
  lightboxImage.alt = '';
  document.body.style.overflow = '';
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function trapFocus(element) {
  const focusableElements = element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  element.addEventListener('keydown', function handleTab(e) {
    if (e.key !== 'Tab') return;
    
    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  });
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
    // Web3Forms — no activation required, works instantly
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        access_key: 'e0fe8135-e0ae-48ca-8ba0-db2728e4164c',
        name: formData.name,
        email: formData.email,
        message: formData.message,
        subject: `New message from ${formData.name}`
      })
    });

    const data = await response.json();

    if (data.success) {
      showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
      contactForm.reset();
    } else {
      console.error('Web3Forms error:', data);
      throw new Error(data?.message || 'Failed to send message');
    }
  } catch (error) {
    console.error('Contact form error:', error);
    showToast('Failed to send message. Please try again or contact me directly.', 'error');
  } finally {
    submitBtn.disabled = false;
    submitText.textContent = 'Send Message';
    submitSpinner.classList.add('hidden');
  }
}

// Handle resume view
function handleResumeDownload() {
  window.open('/assets/docs/wvpssriraj resume DA (1).pdf', '_blank');
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

// Initialization
function init() {
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
  
  // Lightbox modal (Issue #20)
  lightboxClose.addEventListener('click', closeLightbox);
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightboxModal.classList.contains('hidden')) {
      closeLightbox();
    }
  });
  
  // SRH project - removed click handler since it's now an <a> tag (Issue #8)
  // document.getElementById('srh-project-btn').addEventListener('click', showSrhProject);
  document.getElementById('srh-back-btn').addEventListener('click', hideSrhProject);
  
  // Read More toggles (Issue #11)
  initReadMoreToggles();
  
  // Scroll handler
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial call
}

// Read More toggle for long descriptions (Issue #11)
function initReadMoreToggles() {
  document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = btn.previousElementSibling;
      const isExpanded = btn.dataset.expanded === 'true';
      if (isExpanded) {
        p.classList.add('line-clamp-3');
        p.textContent = p.dataset.fullText.substring(0, p.dataset.fullText.length);
        btn.textContent = 'Read more';
        btn.dataset.expanded = 'false';
      } else {
        p.classList.remove('line-clamp-3');
        btn.textContent = 'Read less';
        btn.dataset.expanded = 'true';
      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
