import React, { useState, useEffect, useContext } from 'react';
import { 
  Menu, 
  X, 
  Home as HomeIcon,
  User,
  Code,
  Award,
  Phone,
  Sun,
  Moon,
} from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

interface NavbarProps {
  activeSection: string;
  currentPage: string;
  onNavigate: (page: string, section?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext nya error nih");
  }

  const { theme, setTheme } = themeContext;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navigationItems = [
    { name: 'Home', id: 'home', icon: HomeIcon, page: 'main' },
    { name: 'About Me', id: 'about', icon: User, page: 'main' },
    { name: 'Projects', id: 'projects', icon: Code, page: 'projects' },
    { name: 'Certification', id: 'certification', icon: Award, page: 'certifications' },
    { name: 'Contact', id: 'contact', icon: Phone, page: 'main' },
    { id: 'cv',name: 'Curriculum Vitae',page: 'cv',icon: Award,},
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (item: typeof navigationItems[0]) => {
    if (item.page === 'main') {
      onNavigate('main', item.id);
    } else {
      onNavigate(item.page);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => onNavigate('main', 'home')}
              className="text-xl font-bold text-white hover:text-amber-400 transition-colors duration-200"
            >
              Ragiliawan Putra
            </button>
          </div>

          {/* Desktop Navigation & Theme Toggle */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-amber-400 ${
                    (currentPage === item.page && (item.page !== 'main' || activeSection === item.id))
                      ? 'text-amber-400 border-b-2 border-amber-400'
                      : 'text-gray-500 dark:text-gray-300'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="ml-6 p-2 rounded-full text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
             {/* Theme Toggle Button */}
             <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-300 hover:text-amber-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-400 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-md border-t border-gray-700">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`w-full flex items-center px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md ${
                    (currentPage === item.page && (item.page !== 'main' || activeSection === item.id))
                      ? 'text-amber-400 bg-gray-800'
                      : 'text-gray-500 dark:text-gray-300 hover:text-amber-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <Icon size={18} className="mr-3" />
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 