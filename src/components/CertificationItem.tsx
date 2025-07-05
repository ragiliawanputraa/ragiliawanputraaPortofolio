import React from 'react';
import { Certification } from '../types';
import { 
  Star,
  Calendar,
  Award,
  ExternalLink,
} from 'lucide-react';

interface CertificationItemProps {
  certification: Certification;
  isCompact?: boolean;
}

const CertificationItem: React.FC<CertificationItemProps> = ({ certification, isCompact = false }) => {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'cloud computing': return 'text-blue-800 bg-blue-100 dark:text-blue-400 dark:bg-blue-400/20 border-blue-200 dark:border-blue-400/30';
      case 'web development': return 'text-green-800 bg-green-100 dark:text-green-400 dark:bg-green-400/20 border-green-200 dark:border-green-400/30';
      case 'data science': return 'text-purple-800 bg-purple-100 dark:text-purple-400 dark:bg-purple-400/20 border-purple-200 dark:border-purple-400/30';
      case 'cybersecurity': return 'text-red-800 bg-red-100 dark:text-red-400 dark:bg-red-400/20 border-red-200 dark:border-red-400/30';
      case 'mobile development': return 'text-yellow-800 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-400/20 border-yellow-200 dark:border-yellow-400/30';
      case 'devops': return 'text-orange-800 bg-orange-100 dark:text-orange-400 dark:bg-orange-400/20 border-orange-200 dark:border-orange-400/30';
      default: return 'text-gray-800 bg-gray-100 dark:text-gray-400 dark:bg-gray-400/20 border-gray-200 dark:border-gray-400/30';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900/50 dark:backdrop-blur-sm rounded-xl shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-amber-500/50 dark:hover:border-amber-400/30 animate-fade-in-up">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mr-3">{certification.title}</h3>
            {certification.featured && (
              <Star className="text-amber-500 dark:text-amber-400 fill-amber-500 dark:fill-amber-400" size={16} />
            )}
          </div>
          <p className="text-amber-600 dark:text-amber-400 font-medium mb-1">{certification.organization}</p>
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
            <Calendar size={14} className="mr-2" />
            {certification.date}
            {certification.validUntil && (
              <span className="ml-4">Valid until: {certification.validUntil}</span>
            )}
          </div>
        </div>
        <div className="flex-shrink-0 ml-4">
          <Award className="text-amber-500 dark:text-amber-400" size={24} />
        </div>
      </div>

      {/* Category */}
      <div className="mb-4">
        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(certification.category)}`}>
          {certification.category}
        </span>
      </div>

      {!isCompact && (
        <>
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{certification.description}</p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {certification.skills.map((skill) => (
              <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded text-xs border border-gray-200 dark:border-gray-700">
                {skill}
              </span>
            ))}
          </div>
        </>
      )}

      <a
        href={certification.credentialLink}
        className="inline-flex items-center text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors duration-200 font-medium"
      >
        <ExternalLink size={16} className="mr-2" />
        View Credential
      </a>
    </div>
  );
};

export default CertificationItem; 