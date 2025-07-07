import React from 'react';
import CertificationItem from './CertificationItem';
import { Certification, CertificationsData } from '../types';
import { Award, ArrowRight } from 'lucide-react';
import certificationsDataRaw from '../../content/certifications/certifications.json';

const certificationsData: CertificationsData = certificationsDataRaw as CertificationsData;

interface CertificationPreviewProps {
  onNavigateToCertifications: () => void;
}

const CertificationPreview: React.FC<CertificationPreviewProps> = ({ onNavigateToCertifications }) => {
  const allCertifications: Certification[] = certificationsData.certifications_list.map((c, idx) => ({
    id: c.id || c.title || String(idx),
    title: c.title,
    organization: c.organization,
    date: c.date,
    credentialLink: c.credentialLink || '',
    category: c.category,
    featured: c.featured,
    description: c.description || '',
    skills: c.skills || [],
    validUntil: c.validUntil || '',
  }));
  const featuredCertifications = allCertifications.filter((cert) => cert.featured);

  return (
    <section id="certification" className="min-h-screen bg-gray-50 dark:bg-black py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Certifications</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Professional credentials and achievements</p>
        </div>

        <div className="space-y-6 mb-16">
          {featuredCertifications.map((cert) => (
            <CertificationItem key={cert.id} certification={cert} isCompact={true} />
          ))}
        </div>

        <div className="text-center animate-fade-in-up">
          <div className="bg-gray-100 dark:bg-gray-900/50 dark:backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-gray-800 hover:border-amber-500/50 dark:hover:border-amber-400/30 transition-all duration-300 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">View Complete Certification Portfolio</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Explore my comprehensive collection of professional certifications across various technology domains. 
              Each certification represents my commitment to continuous learning and professional development.
            </p>
            <button
              onClick={onNavigateToCertifications}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-white dark:text-black rounded-lg hover:from-amber-400 hover:to-yellow-300 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Award size={24} className="mr-3" />
              You can see my complete certification list here!
              <ArrowRight size={20} className="ml-3" />
            </button>
          </div>

          <div className="bg-white dark:bg-gray-900/50 dark:backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Continuous Learning</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm committed to continuous learning and professional development. I regularly pursue new certifications 
              and courses to stay current with the latest technologies and best practices in software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationPreview; 