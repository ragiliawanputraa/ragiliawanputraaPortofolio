import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext must be used within a ThemeProvider");
  }

  const { theme } = themeContext;

  return (
    <footer className={`border-t py-8 ${theme === 'light' ? 'bg-gray-100 border-gray-200' : 'bg-black border-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
            © {currentYear} Ragiliawan Putra Rencana. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 