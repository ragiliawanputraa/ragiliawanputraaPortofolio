import React, { useState } from 'react';
import { Certification, CertificationsData } from '../types';
import CertificationItem from '../components/CertificationItem';
import { Search, Filter, TrendingUp, Award, Target, CheckCircle } from 'lucide-react';
import certificationsDataRaw from '../../content/certifications/certifications.json';

const certificationsData: CertificationsData = certificationsDataRaw as CertificationsData;

const CertificationsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('date');

  // Ensure all certifications have an id (use title as fallback)
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
    image: c.image || '',
  }));

  const categories = ['all', ...Array.from(new Set(allCertifications.map(c => c.category)))];

  const filteredCertifications = allCertifications
    .filter(certification => 
      (selectedCategory === 'all' || certification.category === selectedCategory) &&
      (certification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       certification.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
       (certification.description && certification.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
       (certification.skills && certification.skills.some((skill: string) => skill.toLowerCase().includes(searchTerm.toLowerCase())))
      )
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'organization':
          return a.organization.localeCompare(b.organization);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-black dark:to-gray-900 pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">All Certifications</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My comprehensive collection of professional certifications across various technology domains. 
            Each certification represents my commitment to continuous learning and professional development.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-gray-100 dark:bg-gray-900/50 dark:backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-800 mb-12 animate-fade-in-up">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search certifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors duration-200 appearance-none"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="relative">
              <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors duration-200 appearance-none"
              >
                <option value="date" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">Sort by Date</option>
                <option value="title" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">Sort by Title</option>
                <option value="organization" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">Sort by Organization</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-gray-500 dark:text-gray-400">
            Showing {filteredCertifications.length} of {allCertifications.length} certifications
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredCertifications.map((certification) => (
            <CertificationItem key={certification.id} certification={certification} />
          ))}
        </div>

        {/* No Results */}
        {filteredCertifications.length === 0 && (
          <div className="text-center py-16 animate-fade-in-up">
            <Award className="mx-auto text-gray-400 dark:text-gray-600 mb-4" size={64} />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">No Certifications Found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search criteria or filters.</p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 animate-fade-in-up">
          <div className="bg-gray-100 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800 text-center">
            <div className="text-3xl font-bold text-amber-500 dark:text-amber-400 mb-2">{allCertifications.length}</div>
            <div className="text-gray-600 dark:text-gray-300">Total Certifications</div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800 text-center">
            <div className="text-3xl font-bold text-green-500 dark:text-green-400 mb-2">
              {allCertifications.filter(c => c.featured).length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Featured</div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800 text-center">
            <div className="text-3xl font-bold text-blue-500 dark:text-blue-400 mb-2">
              {allCertifications.filter(c => c.validUntil && new Date(c.validUntil) > new Date()).length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Active</div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800 text-center">
            <div className="text-3xl font-bold text-purple-500 dark:text-purple-400 mb-2">{categories.length - 1}</div>
            <div className="text-gray-600 dark:text-gray-300">Categories</div>
          </div>
        </div>

        {/* Learning Journey */}
        <div className="mt-16 bg-white dark:bg-gray-900/50 dark:backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-gray-800 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">My Learning Journey</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Target className="mx-auto text-amber-500 dark:text-amber-400 mb-3" size={32} />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Continuous Growth</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                I believe in lifelong learning and regularly pursue new certifications to stay current with industry trends.
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="mx-auto text-green-500 dark:text-green-400 mb-3" size={32} />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Practical Application</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Each certification is backed by hands-on experience and real-world project implementation.
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="mx-auto text-blue-500 dark:text-blue-400 mb-3" size={32} />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Future Ready</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                I focus on emerging technologies and industry-relevant skills to stay ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage; 