import { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

interface CredentialsProps {
  showToast: (message: string, type: 'success' | 'error') => void;
}

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  description: string;
  imageUrl: string;
  linkedinUrl?: string;
  brief?: string;
}

const Credentials = ({ showToast }: CredentialsProps) => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
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
      id: 'superr-selector-2025',
      title: 'SupeRR Selector 2025 Certificate of Participation',
      issuer: 'Rajasthan Royals - SupeRR Selector Hackathon 2025',
      description: 'SupeRR Selector 2025 Certificate of Participation',
      imageUrl: '/SupeRR-Selector-2025.png',
      brief:
        'Certificate of Participation for SupeRR Selector 2025, a hackathon organized by Rajasthan Royals. This experience focused on applying data-driven thinking to cricket strategy, squad composition, and decision-making under constraints.',
      linkedinUrl:
        'https://www.linkedin.com/posts/sriraj-w-v-p-s_rajasthanroyals-superrselector-cricketanalytics-activity-7411778327243550720-Ft76?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER4EaYBIUTdQpMEjPujtlFEccZmOjt2PiU'
    },
    {
      id: 'byte-mole',
      title: 'Byte & Mole Hackathon Certificate of Participation',
      issuer: 'VIT-AP University',
      description: 'Byte & Mole Hackathon Certificate',
      imageUrl: '/Byte-Mole-Hackathon.png',
      brief:
        'Certificate of Participation for the Byte & Mole Hackathon at VIT-AP University, recognizing active involvement in a coding-and-chemistry themed event that encouraged creativity and collaboration.',
      linkedinUrl: ''
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

  const handleCertificateClick = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  return (
    <div className="night-sky-bg">
      <section className="py-12 sm:py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">My Credentials</h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-4"></div>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto px-1">
              Professional certifications and internship experiences that showcase my commitment to continuous learning
            </p>
          </div>

          {/* Single column on mobile (<640px), 2 cols md, 4 cols lg; gap 20-24px mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                onClick={() => handleCertificateClick(certificate)}
                className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 group active:scale-[0.98]"
              >
                {/* Center image on mobile so it's not cropped; use object-contain to show full certificate */}
                <div className="h-44 sm:h-48 overflow-hidden flex items-center justify-center bg-slate-900/50">
                  <img
                    src={certificate.imageUrl}
                    alt={certificate.title + ' certificate'}
                    className="w-full max-w-full h-full min-h-0 object-contain object-center group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2 break-words min-w-0">
                    {certificate.title}
                  </h3>
                  <p className="text-gray-400 text-xs line-clamp-2 break-words min-w-0">{certificate.issuer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Certificate Modal */}
          {selectedCertificate && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
              <div className="bg-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700">
                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-start gap-2 mb-4">
                    <h3 className="text-lg sm:text-2xl font-bold text-white break-words min-w-0 pr-2">{selectedCertificate.title}</h3>
                    <button
                      onClick={() => setSelectedCertificate(null)}
                      className="min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-400 hover:text-white rounded-lg flex-shrink-0"
                      aria-label="Close"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-cyan-400 font-semibold text-lg">{selectedCertificate.issuer}</p>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <img
                      src={selectedCertificate.imageUrl}
                      alt={selectedCertificate.title}
                      className="w-full max-w-full h-auto object-contain rounded-lg border border-slate-600"
                    />
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <p className="text-gray-200 text-sm sm:text-base text-center whitespace-pre-line leading-relaxed">{selectedCertificate.brief}</p>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <a
                      href={selectedCertificate.imageUrl}
                      download
                      onClick={() => {
                        showToast(`Downloading ${selectedCertificate.title}`, 'success');
                      }}
                      className="min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Download Certificate
                    </a>
                    {selectedCertificate.linkedinUrl && (
                      <a
                        href={selectedCertificate.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center border border-slate-600 text-cyan-300 hover:text-white hover:border-slate-500 px-6 py-3 rounded-lg font-medium transition-colors space-x-2"
                      >
                        <ExternalLink size={16} />
                        <span>LinkedIn Post</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Credentials;