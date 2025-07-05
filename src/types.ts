export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  demoLink: string;
  githubLink: string;
  featured: boolean;
  date: string;
  status: 'completed' | 'in-progress' | 'planned';
  image?: string;
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  date: string;
  credentialLink: string;
  category: string;
  featured: boolean;
  description: string;
  skills: string[];
  validUntil?: string;
} 