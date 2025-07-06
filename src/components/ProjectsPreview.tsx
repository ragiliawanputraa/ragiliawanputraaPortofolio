import React from 'react';
import ProjectCard from './ProjectCard';
import { Project, ProjectsData } from '../types';
import { Code, ArrowRight } from 'lucide-react';
import projectsDataRaw from '../../content/projects/projects.json';

const projectsData: ProjectsData = projectsDataRaw as ProjectsData;

interface ProjectsPreviewProps {
  onNavigateToProjects: () => void;
}

const ProjectsPreview: React.FC<ProjectsPreviewProps> = ({ onNavigateToProjects }) => {
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
  const featuredProjects = allProjects.filter((project) => project.featured);

  return (
    <section id="projects" className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-black dark:to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Showcasing my latest work and technical skills</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} isCompact={true} />
          ))}
        </div>

        <div className="text-center animate-fade-in-up">
          <div className="bg-gray-100 dark:bg-gray-900/50 dark:backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-gray-800 hover:border-amber-500/50 dark:hover:border-amber-400/30 transition-all duration-300 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Explore My Complete Portfolio</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Discover all my projects organized by category, including web applications, mobile apps, 
              backend systems, and experimental projects. Each project includes detailed documentation, 
              live demos, and source code.
            </p>
            <button
              onClick={onNavigateToProjects}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-white dark:text-black rounded-lg hover:from-amber-400 hover:to-yellow-300 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Code size={24} className="mr-3" />
              Explore All Projects
              <ArrowRight size={20} className="ml-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview; 