import { useState, memo, useCallback, useMemo } from 'react';
import { X, ExternalLink } from 'lucide-react';
import ParallaxCardCarousel from './ui/3d-cards-slider';

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

const Credentials = memo(({ showToast }: CredentialsProps) => {
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

  const handleCertificateClick = useCallback((certificate: Certificate) => {
    setSelectedCertificate(certificate);
  }, []);

  // Map certificates to carousel card format
  const carouselCards = useMemo(() => {
    return certificates.map((cert) => ({
      id: cert.id,
      title: cert.title,
      subtitle: cert.issuer,
      description: cert.brief || cert.description,
      imageUrl: cert.imageUrl,
      actionLabel: cert.linkedinUrl ? 'View on LinkedIn' : 'View Details',
      onAction: () => {
        if (cert.linkedinUrl) {
          window.open(cert.linkedinUrl, '_blank', 'noopener,noreferrer');
        } else {
          handleCertificateClick(cert);
        }
      }
    }));
  }, [certificates, handleCertificateClick]);

  return (
    <div className="night-sky-bg">
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">My Credentials</h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Professional certifications and internship experiences that showcase my commitment to continuous learning
            </p>
          </div>

          {/* 3D Carousel View - Primary Display */}
          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
            <ParallaxCardCarousel 
              cards={carouselCards}
              autoplaySpeed={4000}
              enableAutoplay={true}
              cardWidth={360}
              cardHeight={520}
              gap={40}
              perspective={1500}
              maxRotation={25}
              backgroundColor="bg-transparent"
            />
          </div>

          {/* Certificate Modal */}
          {selectedCertificate && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
              <div className="bg-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">{selectedCertificate.title}</h3>
                    <button
                      onClick={() => setSelectedCertificate(null)}
                      className="text-gray-400 hover:text-white"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-cyan-400 font-semibold text-lg">{selectedCertificate.issuer}</p>
                  </div>

                  <div className="mb-6">
                    <img
                      src={selectedCertificate.imageUrl}
                      alt={selectedCertificate.title}
                      className="w-full h-auto rounded-lg border border-slate-600"
                      loading="eager"
                      decoding="async"
                    />
                  </div>

                  <div className="mb-6">
                    <p className="text-gray-200 text-base text-center whitespace-pre-line">{selectedCertificate.brief}</p>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <button
                      onClick={() => {
                        showToast(`Download started for ${selectedCertificate.title}`, 'success');
                      }}
                      className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Download Certificate
                    </button>
                    {selectedCertificate.linkedinUrl && (
                      <a
                        href={selectedCertificate.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-slate-600 text-cyan-300 hover:text-white hover:border-slate-500 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 mt-2"
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
});

Credentials.displayName = 'Credentials';

export default Credentials;