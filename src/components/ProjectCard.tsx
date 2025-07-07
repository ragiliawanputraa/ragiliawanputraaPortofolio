import React from 'react';
import { Project } from '../types';
import { 
  Globe, 
  Smartphone, 
  Monitor, 
  Server, 
  Cloud, 
  Palette, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  MessageSquare, 
  Camera, 
  Music, 
  GamepadIcon, 
  BookOpen, 
  Shield, 
  Zap, 
  Code,
  Star,
  Calendar,
  ExternalLink,
  Github,
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  isCompact?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isCompact = false }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-500 bg-green-100 dark:text-green-400 dark:bg-green-400/20 border-green-200 dark:border-green-400/30';
      case 'in-progress': return 'text-yellow-500 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-400/20 border-yellow-200 dark:border-yellow-400/30';
      case 'planned': return 'text-blue-500 bg-blue-100 dark:text-blue-400 dark:bg-blue-400/20 border-blue-200 dark:border-blue-400/30';
      default: return 'text-gray-500 bg-gray-100 dark:text-gray-400 dark:bg-gray-400/20 border-gray-200 dark:border-gray-400/30';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'web development': return <Globe size={20} />;
      case 'mobile app': return <Smartphone size={20} />;
      case 'desktop app': return <Monitor size={20} />;
      case 'backend': return <Server size={20} />;
      case 'cloud': return <Cloud size={20} />;
      case 'ui/ux': return <Palette size={20} />;
      case 'e-commerce': return <ShoppingCart size={20} />;
      case 'social': return <Users size={20} />;
      case 'analytics': return <BarChart3 size={20} />;
      case 'communication': return <MessageSquare size={20} />;
      case 'media': return <Camera size={20} />;
      case 'entertainment': return <Music size={20} />;
      case 'gaming': return <GamepadIcon size={20} />;
      case 'education': return <BookOpen size={20} />;
      case 'security': return <Shield size={20} />;
      case 'productivity': return <Zap size={20} />;
      default: return <Code size={20} />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900/50 dark:backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-amber-400/30 dark:hover:border-amber-400/30 animate-fade-in-up">
      {/* Project Image */}
      <div className="h-48 bg-gray-100 dark:bg-gradient-to-br dark:from-amber-400/20 dark:to-yellow-300/20 flex items-center justify-center border-b border-gray-200 dark:border-gray-800 relative text-gray-400 dark:text-white overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          getCategoryIcon(project.category)
        )}
        {project.featured && (
          <div className="absolute top-3 right-3">
            <Star className="text-amber-500 dark:text-amber-400 fill-amber-500 dark:fill-amber-400" size={20} />
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
            {project.status.replace('-', ' ')}
          </span>
        </div>
        
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
          <Calendar size={14} className="mr-2" />
          {project.date}
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {isCompact ? project.description : project.longDescription || project.description}
        </p>
        
        {/* Category */}
        <div className="flex items-center mb-4">
          <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-400/20 dark:text-purple-400 rounded-full text-sm border border-purple-200 dark:border-purple-400/30">
            {project.category}
          </span>
        </div>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-700 hover:border-amber-400 dark:hover:border-amber-400/50 transition-colors duration-200">
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex space-x-4">
          <a
            href={project.demoLink}
            className="inline-flex items-center px-4 py-2 bg-amber-500 text-white dark:bg-amber-400 dark:text-black rounded-lg hover:bg-amber-600 dark:hover:bg-amber-300 transition-colors duration-200 font-medium"
          >
            <ExternalLink size={16} className="mr-2" />
            Live Demo
          </a>
          <a
            href={project.githubLink}
            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-amber-500 dark:hover:border-amber-400 transition-colors duration-200"
          >
            <Github size={16} className="mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 