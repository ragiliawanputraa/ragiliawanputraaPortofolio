import React, { useState } from 'react';
import { Project, ProjectsData } from '../types';
import ProjectCard from '../components/ProjectCard';
import { Search, Filter, TrendingUp, Code } from 'lucide-react';
import projectsDataRaw from '../../content/projects/projects.json';

const projectsData: ProjectsData = projectsDataRaw as ProjectsData;

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('date');

  // Ensure all projects have an id (use title as fallback)
  const allProjects: Project[] = projectsData.projects_list.map((p, idx) => ({
    id: p.id || p.title || String(idx),
    title: p.title,
    description: p.description,
    longDescription: p.longDescription || p.description || '',
    technologies: p.technologies,
    category: p.category,
    demoLink: p.demoLink,
    githubLink: p.githubLink,
    featured: p.featured,
    date: p.date,
    status: p.status || 'completed',
    image: p.image || '',
  }));

  const categories = ['all', ...Array.from(new Set(allProjects.map(p => p.category)))];

  const filteredProjects = allProjects
    .filter(project => 
      (selectedCategory === 'all' || project.category === selectedCategory) &&
      (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
       project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'status':
          return a.status.localeCompare(b.status);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-black dark:to-gray-900 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">All Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my complete portfolio of projects across various technologies and domains. 
            Each project represents a unique challenge and learning experience.
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
                placeholder="Search projects..."
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
                <option value="status" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">Sort by Status</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-gray-500 dark:text-gray-400">
            Showing {filteredProjects.length} of {allProjects.length} projects
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 animate-fade-in-up">
            <Code className="mx-auto text-gray-400 dark:text-gray-600 mb-4" size={64} />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">No Projects Found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search criteria or filters.</p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 animate-fade-in-up">
          <div className="bg-gray-100 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800 text-center">
            <div className="text-3xl font-bold text-amber-500 dark:text-amber-400 mb-2">{allProjects.length}</div>
            <div className="text-gray-600 dark:text-gray-300">Total Projects</div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800 text-center">
            <div className="text-3xl font-bold text-green-500 dark:text-green-400 mb-2">
              {allProjects.filter(p => p.status === 'completed').length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Completed</div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800 text-center">
            <div className="text-3xl font-bold text-yellow-500 dark:text-yellow-400 mb-2">
              {allProjects.filter(p => p.status === 'in-progress').length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">In Progress</div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800 text-center">
            <div className="text-3xl font-bold text-purple-500 dark:text-purple-400 mb-2">{categories.length - 1}</div>
            <div className="text-gray-600 dark:text-gray-300">Categories</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage; 