import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import ProjectsPage from './pages/ProjectsPage';
import CertificationsPage from './pages/CertificationsPage';
import CVPage from './pages/CVPage';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState('main');

  useEffect(() => {
    if (currentPage === 'main') {
      const handleScroll = () => {
        const sections = ['home', 'about', 'projects', 'certification', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;

            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [currentPage]);

  const handleNavigation = (page: string, section?: string) => {
    setCurrentPage(page);
    
    if (page === 'main' && section) {
      // Small delay to ensure page is rendered before scrolling
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Scroll to top for other pages
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'projects':
        return <ProjectsPage />;
      case 'certifications':
        return <CertificationsPage />;
      case 'cv':
        return <CVPage />;
      default:
        return (
          <MainPage 
            onNavigateToProjects={() => handleNavigation('projects')}
            onNavigateToCertifications={() => handleNavigation('certifications')}
          />
        );
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black">
      <Navbar 
        activeSection={activeSection} 
        currentPage={currentPage}
        onNavigate={handleNavigation}
      />
      
      {/* Back to Main Button for dedicated pages */}
      {currentPage !== 'main' && (
        <button
          onClick={() => handleNavigation('main')}
          className="fixed bottom-8 left-8 z-40 bg-amber-400 text-black p-3 rounded-full shadow-lg hover:bg-amber-300 transition-all duration-300 hover:scale-110"
        >
          <ArrowLeft size={24} />
        </button>
      )}
      
      {renderPage()}
      
      {currentPage === 'main' && <Footer />}
    </div>
    </ThemeProvider>
  );
};

export default App;