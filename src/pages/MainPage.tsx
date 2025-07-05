import React from 'react';

import Home from '../components/Home';
import About from '../components/About';
import ProjectsPreview from '../components/ProjectsPreview';
import CertificationPreview from '../components/CertificationPreview';
import Contact from '../components/Contact';

interface MainPageProps {
  onNavigateToProjects: () => void;
  onNavigateToCertifications: () => void;
}

const MainPage: React.FC<MainPageProps> = ({ onNavigateToProjects, onNavigateToCertifications }) => {
  return (
    <main>
      <Home />
      <About />
      <ProjectsPreview onNavigateToProjects={onNavigateToProjects} />
      <CertificationPreview onNavigateToCertifications={onNavigateToCertifications} />
      <Contact />
    </main>
  );
};

export default MainPage; 